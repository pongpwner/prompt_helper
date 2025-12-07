interface TextAreaProps {
  text: string;
  setText: Function;
}

const TextArea: React.FC<TextAreaProps> = ({ text, setText }) => {
  return (
    <textarea
      name="tags"
      id="1"
      rows={4}
      cols={10}
      placeholder="paste tags here"
      onChange={(e) => setText(e.target.value)}
    >
      {text}
    </textarea>
  );
};

export default TextArea;
