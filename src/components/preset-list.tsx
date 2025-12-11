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
    <ol>
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
