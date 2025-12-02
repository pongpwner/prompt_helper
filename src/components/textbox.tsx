import { useState } from "react";
import type { PropsWithChildren } from "react";

interface TextBoxProps extends PropsWithChildren {
  text: string;
  setText: Function;
}
const TextBox: React.FC<TextBoxProps> = ({ text, setText }) => {
  return (
    <input
      type="text"
      className=" border border-black"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
export default TextBox;
