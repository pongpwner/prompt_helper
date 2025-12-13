import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
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
        <SortableContext items={tags} strategy={verticalListSortingStrategy}>
        {tags.map((tag: string, index: number) => (
          <Tag key={index} id={index} text={tag} deleteTag={deleteTag} addWeight={addWeight} subtractWeight={subtractWeight}></Tag>
        ))}
        </SortableContext>
      </ol>
    </div>
  );
};
export default TagOutput;
// where the tags that are currently being edited are rendered
