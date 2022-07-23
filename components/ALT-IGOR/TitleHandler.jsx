const TitleHandler = ({ title, setTitle }) => {
  return (
    <div className="flex flex-col m-2">
      <label htmlFor="titleText">Title</label>
      <input
        className="bg-gray-400 text-gray-800 p-1"
        maxLength="24"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default TitleHandler;
