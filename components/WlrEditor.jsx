import TitleTextHandler from "./WLR/TitleTextHandler";
import ImageHandler from "./WLR/ImageHandler";
import TresholdRange from "./WLR/TresholdRange";
import Canvas from "./Canvas";
import {
  drawImage,
  clearCanvas,
  drawTitle,
  drawText,
  bg,
} from "./WLR/wlrFunctions";
import { useRef, useEffect, useState } from "react";

const WlrEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);

  const [titleText, setTitleText] = useState("Red");
  const [image, setImage] = useState("/WLR_SAMPLE.png");
  const [imageLoaded, setImageLoaded] = useState(null);
  const [tresholdLimit, setTresholdLimit] = useState(140);
  const [finishedImage, setFinishedImage] = useState(null);

  useEffect(() => {
    const draw = async () => {
      bg(ctx);
      await drawImage(image, ctx, tresholdLimit);
      await drawText(ctx);
      drawTitle(titleText, ctx);
      setFinishedImage(canvasRef.current.toDataURL("image/png"));
    };
    if (ctx) {
      draw();
      return () => {
        clearCanvas(ctx);
      };
    }
  }, [ctx, titleText, image, imageLoaded, tresholdLimit]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div>
      <div className="sm:grid grid-cols-2 min-h-screen">
        <div className="flex flex-col p-2">
          <TitleTextHandler titleText={titleText} setTitleText={setTitleText} />
          <ImageHandler
            image={image}
            setImage={setImage}
            setImageLoaded={setImageLoaded}
          />
          <TresholdRange
            tresholdLimit={tresholdLimit}
            setTresholdLimit={setTresholdLimit}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <div className="sm:flex items-start gap-2 sm:gap-2 p-2 mt-4 min-h-screen bg-black">
        <img className="w-full sm:w-1/3 bg-red-300" src={finishedImage} />
        <a
          className="block p-3 text-white border rounded-sm bg-gradient-to-b from-red-500 to-red-900"
          href={finishedImage}
          download={`Slatt-${titleText}.png`}
        >
          Download Image
        </a>
      </div>
    </div>
  );
};

export default WlrEditor;
