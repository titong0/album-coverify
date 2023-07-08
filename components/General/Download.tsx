import React, { useContext } from "react";
import { FinishedImageContext } from "./EditorContainer";

type DownloadProps = {
  fileName: string;
  title?: string;
  buttonStyle: string;
  bg: string;
};
const Download: React.FC<DownloadProps> = ({
  fileName,
  title,
  buttonStyle,
  bg,
}) => {
  const finishedImage = useContext(FinishedImageContext);
  const formattedName = fileName + (title ? `-${title}.png` : ".png");
  return (
    <div
      className={`sm:flex justify-center w-full gap-2 sm:gap-2 p-2 py-6 mt-4 ${bg}`}
    >
      <div className="flex flex-col w-full max-w-md border-4 rounded-sm">
        <img
          className="w-full bg-red-300 border-b-2"
          alt="Your custom cover"
          src={finishedImage || ""}
        />
        <a
          className={`p-6 font-bold text-lg rounded-sm ${buttonStyle} filter transition hover:brightness-75 text-center`}
          href={finishedImage || ""}
          download={formattedName}
        >
          Download Image
        </a>
      </div>
    </div>
  );
};

export default Download;
