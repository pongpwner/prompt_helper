import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
interface TagProps{
  id:number;
  text:string
  deleteTag: Function;
  addWeight: Function;
  subtractWeight: Function;

}

const Tag:React.FC<TagProps>=({ id,text,deleteTag,addWeight,subtractWeight })=>{
const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
const style ={transition,
  transform: CSS.Transform.toString(transform)
}
return <li key={id} style={style} className="flex" ref={setNodeRef} {...attributes} {...listeners}>
            <button onClick={() => subtractWeight(id)}>-</button>
            <button onClick={() => addWeight(id)}>+</button>
            <div>{text + ","}</div>
            <button onClick={() => deleteTag(id)}>X</button>
          </li>
}
export default Tag;
