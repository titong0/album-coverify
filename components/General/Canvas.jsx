import { memo } from "react";

const Canvas = memo(({ canvasRef }) => {
  return (
    <canvas
      ref={canvasRef}
      width="1000"
      height="1000"
      className="aspect-square w-11/12 border border-black md:w-4/6 "
    ></canvas>
  );
});

export default Canvas;
