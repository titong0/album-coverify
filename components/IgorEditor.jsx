import React, { useState, useRef, useEffect } from "react";
import ImageHandler from "./IGOR/ImageHandler";
import Canvas from "./Canvas";
import { fillBg } from "./utils";
const IgorEditor = () => {
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState("/WLR.png");
  const canvasRef = useRef(null);

  const draw = () => {
    fillBg(ctx, "#f7b4c6");
  };

  useEffect(() => {
    ctx && draw();
  }, [ctx, image]);

  useEffect(() => {
    canvasRef.current && setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <>
      <div className="sm:grid grid-cols-2 mb-32 min-h-screen">
        <form>
          <ImageHandler image={image} setImage={setImage} />
        </form>
        <div className="flex w-full justify-center items-center">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
    </>
  );
};

export default IgorEditor;
