import React from "react";

const TresholdRange = ({ tresholdLimit }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="tresholdLimit">
        Treshold handler: <strong> {tresholdLimit}</strong>
      </label>
      <input
        className="text-red-400 p-1 "
        name="tresholdLimit"
        maxLength="24"
        min="10"
        max="255"
        type="range"
        defaultValue={140}
      />
    </div>
  );
};

export default TresholdRange;
