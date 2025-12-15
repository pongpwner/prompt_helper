interface TagProps {
  tag: string;
  id: number;
  deleteTag: Function;
  addWeight: Function;
  subtractWeight: Function;
}

const Tag: React.FC<TagProps> = ({
  tag,
  id,
  deleteTag,
  addWeight,
  subtractWeight,
}) => {
  return (
    <li key={id} className="flex">
      <button onClick={() => subtractWeight(id)}>-</button>
      <button onClick={() => addWeight(id)}>+</button>
      <div>{tag + ","}</div>
      <button onClick={() => deleteTag(id)}>X</button>
    </li>
  );
};

export default Tag;
