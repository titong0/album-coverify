import React from "react";

const RectangleControl = ({
  data,
  setSelected,
  selected,
  cancelSelected,
  deleteSelf,
}) => {
  const selectedStyle = selected
    ? "bg-green-800 hover:bg-green-800 text-white"
    : "";
  return (
    <div>
      <button
        className={`border border-black p-1 bg-gray-300 hover:bg-gray-600 transition ${selectedStyle} text-left w-2/3`}
        onClick={setSelected}
      >
        Move rectangle
      </button>
      <button
        onClick={deleteSelf}
        className="w-8 p-1 ml-1 border border-black bg-gray-400"
      >
        ✖
      </button>
      {selected && (
        <button
          onClick={cancelSelected}
          className="w-8 p-1 ml-1 border text-red-400 border-black bg-gray-400"
        >
          ✔
        </button>
      )}
    </div>
  );
};

export default RectangleControl;
