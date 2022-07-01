const BelowTextHandler = () => {
  return (
    <div className="flex flex-col w-100 p-2">
      <label>Secondary Text</label>
      <input
        name="belowText"
        type="text"
        className="my-1 p-2 bg-orange-300 border-b-2 border-black outline-offset-4 focus:bg-red-500 transition"
        defaultValue="WHICH / ONE"
        maxLength={18}
      />
    </div>
  );
};

export default BelowTextHandler;
