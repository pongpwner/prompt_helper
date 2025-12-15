interface SavedPresetProps {
  name: string;
  click: Function;
  key: number;
  deleteKey: Function;
}
const SavedPreset: React.FC<SavedPresetProps> = ({
  name,
  click,
  key,
  deleteKey,
}) => {
  return (
    <li key={key} className="border flex justify-between">
      <button
        className="flex flex-1 justify-center"
        onClick={() => click(name)}
      >
        {name}
      </button>
      <button className="bg-red-500 px-2" onClick={() => deleteKey(name)}>
        X
      </button>
    </li>
  );
};

export default SavedPreset;

//this is the individual preset object in the list of saved presets
