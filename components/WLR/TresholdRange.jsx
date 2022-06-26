import React from "react";

const TresholdRange = ({ tresholdLimit, setTresholdLimit }) => {
  return (
    <div className="flex flex-col">
      <label>Treshold handler</label>
      <input
        className="bg-slate-400 w-2/3 p-1"
        maxLength="24"
        min="10"
        max="255"
        type="range"
        value={tresholdLimit}
        onChange={(e) => setTresholdLimit(parseInt(e.target.value))}
      />
      {tresholdLimit}
    </div>
  );
};

export default TresholdRange;
