import React from "react";
import { useState, useEffect } from "react";
import { getItem, setItem } from "../utils/local-storage";
import { useRef } from "react";
import "../App.css";
import TextBox from "../components/textbox";
import Button from "../components/button";
import TagOutput from "../components/tag-output";
import PresetList from "../components/preset-list";
import PresetTitle from "../components/preset-title";
import Modal from "../components/modal";
import TextArea from "../components/textarea";

export type StringArrayMap = Record<string, string[]>;

function Home() {
  function addTag() {
    setDisplayedTags((prevItems) => [...prevItems, " " + curTag]);
    setCurTag("");
    mainInputRef.current?.focus();
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(displayedTags.toString());
    mainInputRef.current?.focus();
  }
  function changePreset(name: string) {
    setCurPreset(name);
    setDisplayedTags(presets[name]);
    mainInputRef.current?.focus();
  }
  function savePreset() {
    setPresets((prev) => ({
      ...prev,
      [curPreset]: [...displayedTags],
    }));
    mainInputRef.current?.focus();
  }

  function createNewPreset() {
    setPresets((prev) => ({
      ...prev,
      [presetName]: [],
    }));
    setCurPreset(presetName);
    setPresetName("");
    setDisplayedTags([]);
    setIsOpen(false);
    mainInputRef.current?.focus();
  }
  function saveToNewPreset() {
    setPresets((prev) => ({
      ...prev,
      [presetName]: [...displayedTags],
    }));
    setCurPreset(presetName);
    setPresetName("");

    setIsOpen(false);
    mainInputRef.current?.focus();
  }

  function sanitize(str: string) {
    let newTags = str.split(",");
    return newTags;
  }
  function saveTagsToNewPreset() {
    setPresets((prev) => ({
      ...prev,
      [presetName]: [...sanitize(textAreaValue)],
    }));

    setPresetName("");

    setIsOpen1(false);
    mainInputRef.current?.focus();
  }
  function kdAddTag() {
    setDisplayedTags((prevItems) => [...prevItems, " " + curTag]);
    setCurTag("");
    mainInputRef.current?.focus();
  }
  // deletes preset given a key
  const deleteKey = (key: string) => {
    setPresets((prev) => {
      const newMap = { ...prev };
      delete newMap[key];
      return newMap;
    });
  };

  // delete tags given its index
  const deleteByIndex = (index: number) => {
    setDisplayedTags((prev) => prev.filter((_, i) => i !== index));
  };
  const mainInputRef = useRef<HTMLInputElement>(null);
  const [presetName, setPresetName] = useState<string>("");
  // list of presets
  const [presets, setPresets] = useState<StringArrayMap>(() => {
    const item = getItem("presets");
    return (
      (item as StringArrayMap) || {
        default: ["1 girl"],
        one: ["2 girls"],
      }
    );
  });
  const addBrace = (str: string): string => {
    const hasParenWrap = str.startsWith("[") && str.endsWith("]");

    if (hasParenWrap) {
      // remove parentheses
      return str.slice(1, -1);
    }

    return `{${str}}`;
  };

  const addBracket = (str: string): string => {
    const hasBraceWrap = str.startsWith("{") && str.endsWith("}");

    if (hasBraceWrap) {
      // remove parentheses
      return str.slice(1, -1);
    }

    return `[${str}]`;
  };
  const addWeight = (index: number) => {
    setDisplayedTags((prev) =>
      prev.map((item, i) => (i === index ? addBrace(item) : item))
    );
  };
  const subtractWeight = (index: number) => {
    setDisplayedTags((prev) =>
      prev.map((item, i) => (i === index ? addBracket(item) : item))
    );
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  //the tag the user is typing into the text box
  const [curTag, setCurTag] = useState<string>("");

  //the preset that is selected by the user.
  const [curPreset, setCurPreset] = useState<string>("default");

  // the tags that will be displayed on screen in tag output. this copies the tags of curPreset so you can edit these without overwriting the original
  const [displayedTags, setDisplayedTags] = useState<Array<string>>(
    presets[curPreset]
  );
  //used for the modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  // used for pasting new tags into text area
  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    setItem("presets", presets);
  }, [presets]);

  return (
    <main className="home-page max-w-screen">
      <TextBox
        text={curTag}
        setText={setCurTag}
        keyDown={kdAddTag}
        refProp={mainInputRef}
      ></TextBox>
      <Button text={"add tag"} click={addTag}></Button>
      <PresetTitle name={curPreset}></PresetTitle>
      <span className="flex justify-center w-[100vw] gap-4 m-2">
        <PresetList
          presetsMap={presets}
          click={changePreset}
          deleteKey={deleteKey}
        ></PresetList>
        <TagOutput
          tags={displayedTags}
          deleteTag={deleteByIndex}
          addWeight={addWeight}
          subtractWeight={subtractWeight}
        ></TagOutput>

        <span className=" flex flex-col gap-2 justify-between">
          <Button text={"copy to clipboard"} click={copyToClipboard}></Button>
          <span className="flex flex-col gap-2">
            <Button text={"save"} click={savePreset}></Button>
            <Button
              text={"add new preset"}
              click={() => setIsOpen(true)}
            ></Button>
          </span>
          <Button
            text={"save tags to new preset"}
            click={() => setIsOpen1(true)}
          ></Button>
        </span>
      </span>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-black">Create New Preset</h2>

        <TextBox setText={setPresetName} text={presetName}></TextBox>

        <Button click={() => setIsOpen(false)} text={"cancel"}></Button>
        <span className="flex gap-3 justify-center my-2">
          <Button
            click={() => createNewPreset()}
            text={"create new preset"}
          ></Button>

          <Button
            click={() => saveToNewPreset()}
            text={"save tags to new preset"}
          ></Button>
        </span>
      </Modal>
      <TextArea text={textAreaValue} setText={setTextAreaValue}></TextArea>

      <Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
        <h2 className="text-black">Create New Preset</h2>
        <span className="flex gap-3 justify-center">
          <TextBox setText={setPresetName} text={presetName}></TextBox>
          <Button
            click={() => saveTagsToNewPreset()}
            text={"create pasted tags preset"}
          ></Button>
          <Button click={() => setIsOpen1(false)} text={"cancel"}></Button>
        </span>
      </Modal>
    </main>
  );
}

export default Home;
