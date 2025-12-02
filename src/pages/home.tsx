import React from "react";
import { useState } from "react";
import "../App.css";
import TextBox from "../components/textbox";
import Button from "../components/button";
import TagOutput from "../components/tag-output";
function Home() {
  interface presets {
    [key: string]: Array<string>;
  }
  const [curTag, setCurTag] = useState<string>("");
  const preset: presets = {};
  function addTag() {
    presets["default"].push(" " + curTag);
    setCurTag("");
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(presets.default.toString());
  }
  //filler
  preset["default"] = [" 1 girl", " looking at viewer", " standing"];
  const [presets, setPresets] = useState<presets>(preset);
  return (
    <main className="home-page">
      <TextBox text={curTag} setText={setCurTag}>
        {" "}
      </TextBox>
      <Button text={"add tag"} click={addTag}></Button>
      <TagOutput tags={presets["default"]}></TagOutput>
      <Button text={"save new preset"} click={addTag}></Button>
      <Button text={"save"} click={addTag}></Button>
      <Button text={"copy to clipboard"} click={copyToClipboard}></Button>
      <Button text={"add new preset"} click={addTag}></Button>
    </main>
  );
}

export default Home;
