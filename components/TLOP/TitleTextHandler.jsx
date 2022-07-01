const TitleTextHandler = ({ titleContent, setTitleContent }) => {
  return (
    <div className="flex flex-col w-100 p-2 ">
      <label htmlFor="title">Cover title</label>
      <input
        name="title"
        type="text"
        className="my-1 p-2 bg-orange-300 border-b-2 border-black outline-offset-4 focus:bg-red-500 transition"
        defaultValue="THE LIFE OF PABLO"
        maxLength={30}
      />
    </div>
  );
};

export default TitleTextHandler;
