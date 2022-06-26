import TitleTextHandler from "./WLR/TitleTextHandler";
import ImageHandler from "./WLR/ImageHandler";
import TresholdRange from "./WLR/TresholdRange";
import Canvas from "./Canvas";
import { drawImage, clearCanvas, drawTitle } from "./WLR/wlrFunctions";
import { useRef, useEffect, useState } from "react";

const WlrEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [titleText, setTitleText] = useState("Red");
  const [image, setImage] = useState("/WLR_SAMPLE.png");
  const [imageLoaded, setImageLoaded] = useState(null);
  const [tresholdLimit, setTresholdLimit] = useState(140);

  useEffect(() => {
    const draw = async () => {
      await drawImage(image, ctx, tresholdLimit);
      drawTitle(titleText, ctx);
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
      <div className="grid grid-cols-2">
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
    </div>
  );
};

export default WlrEditor;
