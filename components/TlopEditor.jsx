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
  drawImage,
} from "./TLOP/tlopFunctions";

const TlopEditor = ({}) => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [finishedImage, setFinishedImage] = useState(null);

  const [firstImage, setFirstImage] = useState({
    content: "/TLOP_SAMPLE_1.png",
    size: 1,
    x: 10,
    y: 50,
  });

  const [secondImage, setSecondImage] = useState({
    content: "/TLOP_SAMPLE_2.png",
    size: 1,
    x: 40,
    y: 20,
  });

  const [formValues, setFormValues] = useState({
    bgColor: "#F78C58",
    title: "THE LIFE OF PABLO",
    belowText: "WHICH / ONE",
  });
  const { bgColor, title, belowText } = formValues;

  const handleChange = (e) => {
    const copy = { ...formValues };
    if (e.target.name === "image") return;
    copy[e.target.name] = e.target.value;
    setFormValues(copy);
  };

  const draw = async () => {
    changeBg(bgColor, ctx);
    drawBelowText(belowText, ctx);
    drawTitleText(title, ctx);
    await drawImage(firstImage, ctx);
    drawImage(secondImage, ctx);
    setFinishedImage(canvasRef.current.toDataURL("image/png"));
  };
  useEffect(() => {
    if (ctx) {
      draw();
    }
  }, [ctx, formValues, firstImage, secondImage]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <>
      <div className="grid sm:grid-cols-2 py-2">
        {ctx !== null ? (
          <form className="flex flex-col" onChange={handleChange}>
            <ColorPicker />
            <TitleTextHandler />
            <BelowTextHandler />
            <ImageHandler image={firstImage} setImage={setFirstImage} />
            <ImageHandler
              image={secondImage}
              setImage={setSecondImage}
              second
            />
          </form>
        ) : null}
        <div className="flex items-center justify-center py-8 sm:py-2 w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <div className="sm:flex items-start gap-2 sm:gap-2 p-2 mt-4 min-h-screen bg-orange-400">
        <img
          className="w-full sm:w-1/3 bg-red-300 border-4"
          src={finishedImage}
        />
        <a
          className="block p-3 border-black border rounded-sm text-white bg-gradient-to-b from-red-500 to-orange-800"
          href={finishedImage}
          download={`PABLO-${formValues.titleText}.png`}
        >
          Download Image
        </a>
      </div>
    </>
  );
};

export default TlopEditor;
