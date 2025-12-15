import Tag from "./tag";
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
    <ol className="h-[50vh] w-[25vw] overflow-y-auto list-decimal list-inside space-y-2 border p-4 rounded gap">
      {tags.map((tag: string, index: number) => (
        <Tag
          tag={tag}
          id={index}
          deleteTag={deleteTag}
          addWeight={addWeight}
          subtractWeight={subtractWeight}
        ></Tag>
      ))}
    </ol>
  );
};
export default TagOutput;
// where the tags that are currently being edited are rendered
