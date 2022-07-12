import React from "react";

const Download = ({ finishedImage, fileName, title, buttonStyle, bg }) => {
  const formattedName = fileName + title ? `-${title}.png` : ".png";

  return (
    <div
      className={`sm:flex justify-center w-full gap-2 sm:gap-2 p-2 py-6 mt-4 ${bg}`}
    >
      <div className="flex flex-col max-w-md w-full">
        <img className="w-full bg-red-300 border-4" src={finishedImage} />
        <a
          className={`p-6 font-bold text-lg rounded-sm ${buttonStyle}`}
          href={finishedImage}
          download={formattedName}
        >
          Download Image
        </a>
      </div>
    </div>
  );
};

export default Download;
