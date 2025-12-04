import React from "react";
import { useState } from "react";
import "../App.css";
import TextBox from "../components/textbox";
import Button from "../components/button";
import TagOutput from "../components/tag-output";
import PresetList from "../components/preset-list";
import PresetTitle from "../components/preset-title";
import Modal from "../components/modal";

export type StringArrayMap = Record<string, string[]>;
function Home() {
  function addTag() {
    setDisplayedTags((prevItems) => [...prevItems, " " + curTag]);
    setCurTag("");
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(presets.default.toString());
  }
  function changePreset(name: string) {
    setCurPreset(name);
    setDisplayedTags(presets[name]);
  }
  function savePreset() {
    setPresets((prev) => ({
      ...prev,
      [curPreset]: [...displayedTags],
    }));
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
  }
  function saveToNewPreset() {
    setPresets((prev) => ({
      ...prev,
      [presetName]: [...displayedTags],
    }));
    setCurPreset(presetName);
    setPresetName("");

    setIsOpen(false);
  }

  const [presetName, setPresetName] = useState<string>("");
  // list of presets
  const [presets, setPresets] = useState<StringArrayMap>({
    default: ["1 girl"],
    one: ["2 girls"],
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
  return (
    <main className="home-page">
      <TextBox text={curTag} setText={setCurTag}></TextBox>
      <Button text={"add tag"} click={addTag}></Button>
      <PresetTitle name={curPreset}></PresetTitle>
      <TagOutput tags={displayedTags}></TagOutput>
      <PresetList presetsMap={presets} click={changePreset}></PresetList>
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
    </main>
  );
}

export default Home;
