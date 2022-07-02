const TitleTextHandler = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="titleText">Title text</label>
      <input
        name="titleText"
        className="bg-zinc-800 text-red-600 p-1"
        maxLength="24"
        type="text"
        defaultValue={"Red"}
      />
    </div>
  );
};

export default TitleTextHandler;
