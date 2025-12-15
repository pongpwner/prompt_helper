import SavedPreset from "./saved-preset";
import type { StringArrayMap } from "../pages/home";
interface PresetListProps {
  presetsMap: StringArrayMap;
  click: Function;
  deleteKey: Function;
}
const PresetList: React.FC<PresetListProps> = ({
  presetsMap,
  click,
  deleteKey,
}) => {
  return (
    <ol className="h-[50vh] w-[25vw] overflow-y-auto list-inside space-y-2 border p-4 rounded gap">
      {Object.keys(presetsMap).map((preset: string, index: number) => (
        <SavedPreset
          name={preset}
          click={click}
          key={index}
          deleteKey={deleteKey}
        ></SavedPreset>
      ))}
    </ol>
  );
};

export default PresetList;
// this renders the saved presets the user has
