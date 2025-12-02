import React from "react";
import { useState } from "react";
import "../App.css";
import TextBox from "../components/textbox";
import Button from "../components/button";
import TagOutput from "../components/tag-output";
import PresetList from "../components/preset-list";
import PresetTitle from "../components/preset-title";

export type StringArrayMap = Record<string, string[]>;
function Home() {
  function addTag() {
    presets["default"].push(" " + curTag);
    setCurTag("");
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(presets.default.toString());
  }
  function changePreset(name: string) {
    setCurPreset(name);
  }
  // list of presets
  const [presets, setPresets] = useState<StringArrayMap>({
    default: ["1 girl"],
    one: ["2 girls"],
  });
  //the tag the user is typing into the text box
  const [curTag, setCurTag] = useState<string>("");

  //the preset that is displayed on the tag output
  const [curPreset, setCurPreset] = useState<string>("default");
  return (
    <main className="home-page">
      <TextBox text={curTag} setText={setCurTag}></TextBox>
      <Button text={"add tag"} click={addTag}></Button>
      <PresetTitle name={curPreset}></PresetTitle>
      <TagOutput tags={presets[curPreset]}></TagOutput>
      <PresetList presetsMap={presets} click={changePreset}></PresetList>
      <Button text={"save new preset"} click={addTag}></Button>
      <Button text={"save"} click={addTag}></Button>
      <Button text={"copy to clipboard"} click={copyToClipboard}></Button>
      <Button text={"add new preset"} click={addTag}></Button>
    </main>
  );
}

export default Home;
