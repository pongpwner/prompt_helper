interface SavedPresetProps {
  name: string;
  click: Function;
  key: number;
}
const SavedPreset: React.FC<SavedPresetProps> = ({ name, click, key }) => {
  return (
    <li key={key}>
      <button onClick={() => click(name)}>{name}</button>
    </li>
  );
};

export default SavedPreset;
