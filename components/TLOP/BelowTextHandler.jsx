const BelowTextHandler = ({ belowContent, setBelowContent }) => {
  return (
    <div className="flex flex-col w-100 p-2">
      <label>"WHICH / ONE" Text</label>
      <input
        type="text"
        className="w-64 p-1 my-1"
        defaultValue={belowContent}
        maxLength={18}
        onChange={(e) => setBelowContent(e.target.value)}
      />
    </div>
  );
};

export default BelowTextHandler;
