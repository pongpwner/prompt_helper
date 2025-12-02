interface PresetTitleProps {
  name: string;
}
const PresetTitle: React.FC<PresetTitleProps> = ({ name }) => {
  return <div>{name}</div>;
};
export default PresetTitle;
