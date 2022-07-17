import React from "react";

const GreenTintHandler = ({ greenTintOpacity, setGreenTintOpacity }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="tresholdLimit">
        green tint intensity: <strong> {greenTintOpacity}</strong>
      </label>
      <input
        className="text-red-400 p-1 "
        name="greenTintOpacity"
        min="0"
        max="0.9"
        step="0.05"
        type="range"
        value={greenTintOpacity}
        onChange={(e) => setGreenTintOpacity(e.target.value)}
      />
    </div>
  );
};

export default GreenTintHandler;
