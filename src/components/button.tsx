import { useState } from "react";

interface ButtonProps {
  text: string;
  click: Function;
}
const Button: React.FC<ButtonProps> = ({ text, click }) => {
  return (
    <button className="w-3xs" onClick={() => click()}>
      {text}
    </button>
  );
};

export default Button;
