import React from "react";
import { stateSetter } from "../../src/types";

type RectangleControlProps = {
  setSelected: () => void;
  selected: boolean;
  cancelSelected: () => void;
  deleteSelf: () => void;
  number: number;
};
const RectangleControl: React.FC<RectangleControlProps> = ({
  setSelected,
  selected,
  cancelSelected,
  deleteSelf,
  number,
}) => {
  const selectedStyle = selected
    ? "bg-green-600 text-white"
    : "bg-gray-300 hover:bg-green-200";
  return (
    <div>
      <button
        className={`border border-black p-1 transition ${selectedStyle} text-left w-2/3`}
        onClick={setSelected}
      >
        Rectangle number {number + 1}
      </button>
      <button
        onClick={deleteSelf}
        className="w-8 p-1 ml-1 border border-black bg-red-400 hover:bg-red-500"
      >
        ✖
      </button>
      {selected && (
        <button
          onClick={cancelSelected}
          className="w-8 p-1 ml-1 border text-red-400 border-black bg-green-300 hover:bg-green-400"
        >
          ✔
        </button>
      )}
    </div>
  );
};

export default RectangleControl;
