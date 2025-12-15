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
    <li key={id} className="flex h-[30px] border  justify-between items-center">
      <span className="flex h-[30px] items-center justify-center">
        <button
          className="h-[28px] flex items-center justify-center bg-blue-900 px-2"
          onClick={() => subtractWeight(id)}
        >
          -
        </button>
        <button
          className="h-[28px] flex items-center justify-center bg-blue-900 px-2"
          onClick={() => addWeight(id)}
        >
          +
        </button>
      </span>
      <div>{tag + ","}</div>
      <button
        className="h-[28px] flex items-center justify-center bg-red-500 px-2"
        onClick={() => deleteTag(id)}
      >
        X
      </button>
    </li>
  );
};

export default Tag;
