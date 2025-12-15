interface TextAreaProps {
  text: string;
  setText: Function;
}

const TextArea: React.FC<TextAreaProps> = ({ text, setText }) => {
  return (
    <textarea
      className="bg-blue-100 text-black"
      name="tags"
      id="1"
      rows={4}
      cols={75}
      placeholder="paste tags here"
      onChange={(e) => setText(e.target.value)}
    >
      {text}
    </textarea>
  );
};

export default TextArea;
