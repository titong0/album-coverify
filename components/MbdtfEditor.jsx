import { useRef, useEffect, useState } from "react";
import ImageHandler from "./MBDTF/ImageHandler";
import Canvas from "./General/Canvas";
import Download from "./General/Download";
import { drawBg, drawMainImg } from "./MBDTF/mbdtfFunctions";
import EditorContainer from "./General/EditorContainer";
import PixelationHandler from "./MBDTF/PixelationHandler";

const MbdtfEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState("/assets/MBDTF_DEFAULT.png");
  const [border, setBorder] = useState(true);
  const [pixelation, setPixelation] = useState(23);
  const [finishedImage, setFinishedImage] = useState(null);

  const draw = async () => {
    if (!ctx) return;
    await drawBg(ctx);
    await drawMainImg(ctx, image, border, pixelation);
  };

  return (
    <EditorContainer
      canvasRef={canvasRef}
      drawMethod={draw}
      setFinishedImage={setFinishedImage}
      dependencies={[ctx, image, border, pixelation]}
      setCtx={setCtx}
    >
      <div className="sm:grid grid-cols-2 mb-32">
        <form className="flex flex-col p-2">
          <ImageHandler setImage={setImage} />
          <label className="flex items-center p-4 bg-amber-400 w-fit">
            Golden border
            <input
              className="ml-2"
              type="checkbox"
              defaultChecked
              onChange={(e) => setBorder(e.target.checked)}
            />
          </label>
          <PixelationHandler
            pixelation={pixelation}
            setPixelation={setPixelation}
          />
        </form>
        <Canvas canvasRef={canvasRef} />
      </div>
      <Download
        fileName="MBDTF"
        finishedImage={finishedImage}
        buttonStyle="text-white rounded-sm bg-gradient-to-b from-red-500 to-red-700"
        bg="bg-red-900"
      />
    </EditorContainer>
  );
};

export default MbdtfEditor;
