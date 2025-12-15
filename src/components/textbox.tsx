import type { PropsWithChildren } from "react";

interface TextBoxProps extends PropsWithChildren {
  text: string;
  setText: Function;
  keyDown?: Function;
  auto?: boolean;
  refProp?: React.RefObject<HTMLInputElement | null>;
}
const TextBox: React.FC<TextBoxProps> = ({
  text,
  setText,
  keyDown,
  auto = true,
  refProp,
}) => {
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (keyDown) {
        keyDown();
      }
    }
  };
  return (
    <input
      type="text"
      className=" border border-black bg-blue-100 text-black"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleEnterPress}
      autoFocus={auto ? true : false}
      ref={refProp ?? undefined}
    />
  );
};
export default TextBox;
// where the user types tags to be displayed
