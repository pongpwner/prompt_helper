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
    <div>
      <ol className="border border-black">
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
    </div>
  );
};
export default TagOutput;
// where the tags that are currently being edited are rendered
