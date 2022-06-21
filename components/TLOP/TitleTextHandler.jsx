const TitleTextHandler = ({ titleContent, setTitleContent }) => {
  return (
    <div className="flex flex-col w-100 ">
      <label>"THE LIFE OF PABLO" Text</label>
      <input
        type="text"
        className="w-64 my-1 p-1"
        defaultValue={titleContent}
        maxLength={30}
        onChange={(e) => setTitleContent(e.target.value)}
      />
    </div>
  );
};

export default TitleTextHandler;
