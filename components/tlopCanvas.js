import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import ImageHandler from "./TLOP/ImageHandler";
import BelowTextHandler from "./TLOP/BelowTextHandler";
import TitleTextHandler from "./TLOP/TitleTextHandler";
import ColorPicker from "./TLOP/ColorPicker";
import {
  changeBg,
  drawTitleText,
  drawBelowText,
  clearCanvas,
  drawFirstImage,
} from "./utils";

let renderCount = 0;

const TlopCanvas = ({}) => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [bgColor, setBgColor] = useState("#F78C58");
  const [titleContent, setTitleContent] = useState("THE LIFE OF PABLO");
  const [belowContent, setBelowContent] = useState("WHICH / ONE");
  const [image, setImage] = useState({
    content: "/TLOP_SAMPLE.png",
    size: 1,
    x: 10,
    y: 50,
  });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (ctx) {
      changeBg(ctx, bgColor);
      drawBelowText(ctx, belowContent);
      drawTitleText(ctx, titleContent);
      drawFirstImage(image, ctx, setImageLoaded);
      return () => {
        clearCanvas(ctx);
      };
    }
  }, [ctx, bgColor, titleContent, belowContent, image, imageLoaded]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div className="grid sm:grid-cols-2 py-2">
      {ctx !== null ? (
        <div className="flex flex-col">
          <ColorPicker bgColor={bgColor} setBgColor={setBgColor} />
          <TitleTextHandler
            titleContent={titleContent}
            setTitleContent={setTitleContent}
          />
          <BelowTextHandler
            belowContent={belowContent}
            setBelowContent={setBelowContent}
          />
          <ImageHandler
            image={image}
            setImage={setImage}
            setImageLoaded={setImageLoaded}
          />
        </div>
      ) : null}
      <div className="flex items-center justify-center py-8 sm:py-2">
        <Canvas canvasRef={canvasRef} />
      </div>
    </div>
  );
};

export default TlopCanvas;
