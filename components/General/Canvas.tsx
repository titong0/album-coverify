import { CanvasHTMLAttributes, memo, useContext } from "react";
import { CanvasRefContext } from "./EditorContainer";

const Canvas = ({ ...props }: CanvasHTMLAttributes<HTMLCanvasElement>) => {
  if (props.width || props.height || props.className) {
    console.log(
      "You shouldnt try to set height or width of the canvas element."
    );
    return null;
  }
  const canvasRef = useContext(CanvasRefContext);
  if (!canvasRef) return null;
  return (
    <div className="flex items-end justify-center py-8 sm:py-2 h-full ">
      <canvas
        {...props}
        ref={canvasRef}
        width="1000"
        height="1000"
        className="aspect-square  w-3/4 border border-black md:w-7/12 sticky bottom-5"
      ></canvas>
    </div>
  );
};

export default memo(Canvas);
