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
  function click() {
    presets["default"].push(curTag);
    setCurTag("");
  }
  //filler
  preset["default"] = ["1 girl", "looking at viewer", "standing"];
  const [presets, setPresets] = useState<presets>(preset);
  return (
    <main className="home-page">
      <TextBox text={curTag} setText={setCurTag}>
        {" "}
      </TextBox>
      <Button text={"add tag"} click={click}></Button>
      <TagOutput tags={presets["default"]}></TagOutput>
      <Button text={"save new preset"} click={click}></Button>
      <Button text={"save"} click={click}></Button>
      <Button text={"copy to clipboard"} click={click}></Button>
      <Button text={"add new preset"} click={click}></Button>
    </main>
  );
}

export default Home;
