import React from "react";

const TresholdRange = ({ tresholdLimit, setTresholdLimit }) => {
  return (
    <div className="flex flex-col">
      <label>
        Treshold handler: <strong> {tresholdLimit}</strong>
      </label>
      <input
        className="text-red-400 p-1 "
        maxLength="24"
        min="10"
        max="255"
        type="range"
        value={tresholdLimit}
        onChange={(e) => setTresholdLimit(parseInt(e.target.value))}
      />
    </div>
  );
};

export default TresholdRange;
