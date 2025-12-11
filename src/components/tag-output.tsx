interface TagOutputProps {
  tags: Array<string>;

  deleteTag: Function;
  addWeight: Function;
  subtractWeight: Function;
}

const TagOutput: React.FC<TagOutputProps> = ({
  tags,
  deleteTag,
  addWeight,
  subtractWeight,
}) => {
  return (
    <div>
      <ol className="border border-black">
        {tags.map((tag: string, index: number) => (
          <li key={index} className="flex">
            <button onClick={() => subtractWeight(index)}>-</button>
            <button onClick={() => addWeight(index)}>+</button>
            <div>{tag + ","}</div>
            <button onClick={() => deleteTag(index)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default TagOutput;
// where the tags that are currently being edited are rendered
