import React from "react";

const TitleTextHandler = ({ titleText, setTitleText }) => {
  return (
    <div className="flex flex-col">
      <label>Title text</label>
      <input
        className="bg-slate-400   p-1"
        maxLength="24"
        type="text"
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
      />
    </div>
  );
};

export default TitleTextHandler;
