const AuthorHandler = ({ author, setAuthor }) => {
  return (
    <div className="flex flex-col m-2">
      <label htmlFor="titleText">Credited author</label>
      <input
        className="bg-gray-400 text-gray-800 p-1"
        maxLength="24"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
    </div>
  );
};

export default AuthorHandler;
