interface PresetTitleProps {
  name: string;
}
const PresetTitle: React.FC<PresetTitleProps> = ({ name }) => {
  return <div>{name}</div>;
};
export default PresetTitle;
// this is for displaying the title of the preset the user is editing
