import { useRef, useEffect, useState } from "react";
import Canvas from "./General/Canvas";
import Download from "./General/Download";
import { asyncBlob } from "./utils";
import ImageHandler from "./GKMC/ImageHandler";
import {
  drawBg,
  drawRectangles,
  drawMainImg,
  applyGreenTint,
} from "./GKMC/gkmcFunctions";
import RectanglesHandler from "./GKMC/RectanglesHandler";
import GreenTintHandler from "./GKMC/GreenTintHandler";

const GkmcEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState("/assets/GKMC_DEFAULT.png");
  const [rectanglesData, setRectanglesData] = useState([]);
  const [finishedImage, setFinishedImage] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [greenTintOpacity, setGreenTintOpacity] = useState(0.5);

  const draw = async () => {
    await drawBg(ctx);
    await drawMainImg(ctx, image);
    applyGreenTint(ctx, greenTintOpacity);
    drawRectangles(ctx, rectanglesData, selectedId);
    const img = await asyncBlob(canvasRef.current);
    setFinishedImage(URL.createObjectURL(img));
  };

  useEffect(() => {
    ctx && draw();
  }, [ctx, image, rectanglesData, selectedId, greenTintOpacity]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div>
      <div className="sm:grid grid-cols-2 mb-32">
        <div className="flex flex-col gap-4 p-2">
          <ImageHandler setImage={setImage} />
          <GreenTintHandler
            greenTintOpacity={greenTintOpacity}
            setGreenTintOpacity={setGreenTintOpacity}
          />
          <RectanglesHandler
            canvas={canvasRef.current}
            rectanglesData={rectanglesData}
            setRectanglesData={setRectanglesData}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        fileName="GKMC"
        finishedImage={finishedImage}
        buttonStyle="text-black rounded-sm bg-green-500"
        bg="bg-green-900"
      />
    </div>
  );
};

export default GkmcEditor;
