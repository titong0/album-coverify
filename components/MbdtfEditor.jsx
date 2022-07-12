import { useRef, useEffect, useState } from "react";
import ImageHandler from "./MBDTF/ImageHandler";
import Canvas from "./General/Canvas";
import Download from "./General/Download";
import { asyncBlob, fillBg } from "./utils";
import { drawBg, drawMainImg } from "./MBDTF/mbdtfFunctions";

const WlrEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState("/assets/MBDTF_DEFAULT.png");
  const [finishedImage, setFinishedImage] = useState(null);
  const [border, setBorder] = useState(true);

  const draw = async () => {
    await drawBg(ctx);
    await drawMainImg(ctx, image, border);
    const img = await asyncBlob(canvasRef.current);
    setFinishedImage(URL.createObjectURL(img));
  };

  useEffect(() => {
    ctx && draw();
  }, [ctx, image, border]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div>
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
        </form>
        <div className="flex items-center justify-center w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        fileName="MBDTF"
        finishedImage={finishedImage}
        buttonStyle="text-white rounded-sm bg-gradient-to-b from-red-500 to-red-700"
        bg="bg-red-900"
      />
    </div>
  );
};

export default WlrEditor;
