import React, { useState, useEffect } from "react";
import { getMousePos } from "../utils";
import RectangleControl from "./RectangleControl";

const RectanglesHandler = ({
  rectanglesData,
  setRectanglesData,
  canvas,
  selectedId,
  setSelectedId,
}) => {
  const newRect = (e) => {
    e.preventDefault;
    const newRect = { x: 200, y: 200 };
    newRect.ID = Date.now();
    const newArr = [...rectanglesData, newRect];
    setRectanglesData(newArr);
  };

  const delRect = (rectId) => {
    const filtered = rectanglesData.filter((i) => i.ID !== rectId);
    setRectanglesData(filtered);
  };
  const changeRectPos = ({ x, y }) => {
    if (!rectanglesData.find((i) => i.ID === selectedId)) return;
    const copy = [...rectanglesData];
    const rectIdx = copy.findIndex((i) => i.ID === selectedId);
    copy[rectIdx].x = x - 65;
    copy[rectIdx].y = y - 12;
    setRectanglesData(copy);
  };

  useEffect(() => {
    if (!canvas) return;
    canvas.onclick = (e) => changeRectPos(getMousePos(canvas, e));
  }, [canvas, rectanglesData, selectedId]);

  return (
    <div className="flex flex-col bg-gray-500 p-2">
      <label className="text-lg mb-2">Eye rectangles</label>
      {rectanglesData.length ? (
        <p className="mb-1">Select a rectangle below and click on the image</p>
      ) : (
        <div>No rectangles added yet.</div>
      )}
      <div className="flex flex-col gap-2 mb-3">
        {rectanglesData.map((rect, index) => (
          <RectangleControl
            key={rect.ID}
            selected={rect.ID === selectedId}
            setSelected={() => setSelectedId(rect.ID)}
            cancelSelected={() => setSelectedId("")}
            deleteSelf={() => delRect(rect.ID)}
            number={index}
          />
        ))}
      </div>
      <button onClick={newRect} className="border p-2 bg-green-400 w-fit">
        ➕
      </button>
    </div>
  );
};

export default RectanglesHandler;
