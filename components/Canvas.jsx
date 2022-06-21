import { useEffect, memo, forwardRef } from "react";

const Canvas = memo(({ canvasRef }) => {
  return (
    <canvas
      ref={canvasRef}
      width="1000"
      height="1000"
      className="w-2/3 border border-black sm:w-3/4 h-auto"
    ></canvas>
  );
});

export default Canvas;
