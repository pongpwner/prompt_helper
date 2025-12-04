import SavedPreset from "./saved-preset";
import type { StringArrayMap } from "../pages/home";
interface PresetListProps {
  presetsMap: StringArrayMap;
  click: Function;
}
const PresetList: React.FC<PresetListProps> = ({ presetsMap, click }) => {
  return (
    <ol>
      {Object.keys(presetsMap).map((preset: string, index: number) => (
        <SavedPreset name={preset} click={click} key={index}></SavedPreset>
      ))}
    </ol>
  );
};

export default PresetList;
// this renders the saved presets the user has
