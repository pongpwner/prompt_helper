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
    <li key={key}>
      <button onClick={() => click(name)}>{name}</button>
      <button onClick={() => deleteKey(name)}>delete</button>
    </li>
  );
};

export default SavedPreset;

//this is the individual preset object in the list of saved presets
