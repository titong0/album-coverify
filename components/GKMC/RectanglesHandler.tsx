import React, { useState, useEffect, useContext } from "react";
import { stateSetter } from "../../src/types";
import { getMousePos } from "../../src/utils";
import { CanvasRefContext } from "../General/EditorContainer";
import RectangleControl from "./RectangleControl";

type Rectangle = { x: number; y: number; ID: string };
type RectanglesHandlerProps = {
  rectanglesData: Rectangle[];
  setRectanglesData: stateSetter<Rectangle[]>;
  selectedId: string;
  setSelectedId: stateSetter<string>;
};
const RectanglesHandler: React.FC<RectanglesHandlerProps> = ({
  rectanglesData,
  setRectanglesData,
  selectedId,
  setSelectedId,
}) => {
  const canvas = useContext(CanvasRefContext).current;

  const newRect = () => {
    const newRect = { x: 200, y: 200, ID: null };
    newRect.ID = Date.now();
    const newArr: Array<Rectangle> = [...rectanglesData, newRect];
    setRectanglesData(newArr);
  };

  const delRect = (rectId: string) => {
    const filtered = rectanglesData.filter((i) => i.ID !== rectId);
    setRectanglesData(filtered);
  };

  const changeRectPos = ({ x, y }: { x: number; y: number }) => {
    if (!rectanglesData.find((i) => i.ID === selectedId)) return;
    const copy = [...rectanglesData];
    const rectIdx = copy.findIndex((i) => i.ID === selectedId);
    // align horizontally and vertically
    copy[rectIdx].x = x - 65;
    copy[rectIdx].y = y - 12;
    setRectanglesData(copy);
  };

  useEffect(() => {
    if (!canvas) return console.log("no canvas");
    canvas.onclick = (e) => changeRectPos(getMousePos(canvas, e));
  }, [canvas, rectanglesData, selectedId]);

  return (
    <div className="flex flex-col bg-slate-300   p-2">
      <label className="font-bold text-lg mb-2">Eye rectangles</label>
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
      <button
        type="button"
        onClick={newRect}
        className="border p-2 bg-green-500 w-fit hover:bg-green-400"
      >
        ➕
      </button>
    </div>
  );
};

export default RectanglesHandler;
