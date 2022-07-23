const CreditsTextHandler = ({ creditsText, setCreditsText }) => {
  return (
    <div className="flex flex-col m-2">
      <label htmlFor="titleText">Credited author</label>
      <input
        className="bg-gray-400 text-gray-800 p-1"
        type="text"
        value={creditsText}
        onChange={(e) => setCreditsText(e.target.value)}
      />
    </div>
  );
};

export default CreditsTextHandler;
