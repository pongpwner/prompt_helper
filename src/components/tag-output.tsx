interface TagOutputProps {
  tags: Array<string>;

  deleteTag: Function;
}

const TagOutput: React.FC<TagOutputProps> = ({ tags, deleteTag }) => {
  return (
    <div>
      <ol className="border border-black">
        {tags.map((tag: string, index: number) => (
          <li key={index} className="flex">
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
