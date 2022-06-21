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

const TlopCanvas = ({}) => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [inputvalues, setInputvalues] = useState({
    bgColor: "#F78C58",
    titleContent: "THE LIFE OF PABLO",
    belowContent: "WHICH / ONE",
    firstImg: { content: null, x: 100, y: 500 },
  });

  const generateStateChanger = (key) => {
    const copy = { ...inputvalues };
    return (value) => {
      copy[key] = value;
      setInputvalues(copy);
    };
  };

  useEffect(() => {
    if (ctx) {
      const { bgColor, belowContent, titleContent, firstImg } = inputvalues;
      changeBg(ctx, bgColor);
      drawBelowText(ctx, belowContent);
      drawTitleText(ctx, titleContent);
      drawFirstImage(firstImg.content, ctx, firstImg.x, firstImg.y);
      return () => {
        clearCanvas(ctx);
      };
    }
  }, [ctx, inputvalues]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div className="grid sm:grid-cols-2">
      {ctx !== null ? (
        <>
          <div className="m-2 flex flex-col">
            <ColorPicker
              bgColor={inputvalues.bgColor}
              setBgColor={generateStateChanger("bgColor")}
            />
            <TitleTextHandler
              titleContent={inputvalues.titleContent}
              setTitleContent={generateStateChanger("titleContent")}
            />
            <BelowTextHandler
              belowContent={inputvalues.belowContent}
              setBelowContent={generateStateChanger("belowContent")}
            />
            <ImageHandler
              firstImage={inputvalues.firstImg}
              setFirstImage={generateStateChanger("firstImg")}
            />
          </div>
        </>
      ) : null}
      <div className="flex justify-center py-8 sm:py-2">
        <Canvas canvasRef={canvasRef} />
      </div>
    </div>
  );
};

export default TlopCanvas;
