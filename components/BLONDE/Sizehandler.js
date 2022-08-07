import React from "react";

const Sizehandler = ({ size, setSize }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="tresholdLimit">
        Subject size: <strong> {size}</strong>
      </label>
      <input
        className="text-red-400 p-1 "
        name="tresholdLimit"
        min="0"
        step="0.1"
        max="1"
        type="range"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
    </div>
  );
};

export default Sizehandler;
