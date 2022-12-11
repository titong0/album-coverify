import { memo, useContext } from "react";
import { CanvasRefContext } from "./EditorContainer";

const Canvas = () => {
  const canvasRef = useContext(CanvasRefContext);
  return (
    <canvas
      ref={canvasRef}
      width="1000"
      height="1000"
      className="aspect-square  w-3/4 border border-black md:w-7/12 sticky bottom-5"
    ></canvas>
  );
};

export default memo(Canvas);
