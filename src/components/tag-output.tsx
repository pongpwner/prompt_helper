function TagOutput({ tags }: { tags: Array<string> }) {
  return (
    <div>
      <ol className="border border-black">
        {tags.map((tag: string, index) => (
          <li key={index}>{tag + ","}</li>
        ))}
      </ol>
    </div>
  );
}
export default TagOutput;
