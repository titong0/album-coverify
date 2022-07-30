import React from "react";

const PixelationHandler = ({ pixelation, setPixelation }) => {
  return (
    <div className="flex flex-col mt-2">
      <label>
        Pixelation rate:{" "}
        <strong>{pixelation !== 1 ? `${33 - pixelation}` : "None"}</strong>
      </label>
      <input
        type="range"
        min="1"
        step="1"
        max="28"
        className="sm:w-2/3"
        onChange={(e) => setPixelation(parseInt(e.target.value))}
        value={pixelation}
      />
    </div>
  );
};

export default PixelationHandler;
