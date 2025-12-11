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
  const deleteKey = (key: string) => {
    setPresets((prev) => {
      const newMap = { ...prev };
      delete newMap[key];
      return newMap;
    });
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
    <main className="home-page">
      <TextBox
        text={curTag}
        setText={setCurTag}
        keyDown={kdAddTag}
        refProp={mainInputRef}
      ></TextBox>
      <Button text={"add tag"} click={addTag}></Button>
      <PresetTitle name={curPreset}></PresetTitle>
      <TagOutput tags={displayedTags}></TagOutput>
      <PresetList
        presetsMap={presets}
        click={changePreset}
        deleteKey={deleteKey}
      ></PresetList>
      <Button text={"save"} click={savePreset}></Button>
      <Button text={"copy to clipboard"} click={copyToClipboard}></Button>
      <Button text={"add new preset"} click={() => setIsOpen(true)}></Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Create New Preset</h2>
        <TextBox setText={setPresetName} text={presetName}></TextBox>
        <Button
          click={() => createNewPreset()}
          text={"create new preset"}
        ></Button>
        <Button click={() => setIsOpen(false)} text={"cancel"}></Button>
        <Button
          click={() => saveToNewPreset()}
          text={"save to new preset"}
        ></Button>
      </Modal>
      <TextArea text={textAreaValue} setText={setTextAreaValue}></TextArea>
      <Button
        text={"save tags to new preset"}
        click={() => setIsOpen1(true)}
      ></Button>
      <Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
        <h2>Create New Preset</h2>
        <TextBox setText={setPresetName} text={presetName}></TextBox>
        <Button
          click={() => saveTagsToNewPreset()}
          text={"create new preset"}
        ></Button>
        <Button click={() => setIsOpen1(false)} text={"cancel"}></Button>
      </Modal>
    </main>
  );
}

export default Home;
