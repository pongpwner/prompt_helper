import { useState } from "react";

interface ButtonProps {
  text: string;
  click: Function;
}
const Button: React.FC<ButtonProps> = ({ text, click }) => {
  return (
    <button
      className="bg-sky-300 border rounded text-black px-2 py-1"
      onClick={() => click()}
    >
      {text}
    </button>
  );
};

export default Button;
