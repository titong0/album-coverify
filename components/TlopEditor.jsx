import { useEffect, useRef, useState } from "react";
import Canvas from "./General/Canvas";
import ImageHandler from "./TLOP/ImageHandler";
import BelowTextHandler from "./TLOP/BelowTextHandler";
import TitleTextHandler from "./TLOP/TitleTextHandler";
import ColorPicker from "./TLOP/ColorPicker";
import Download from "./General/Download";
import { drawTitleText, drawBelowText, drawImage } from "./TLOP/tlopFunctions";
import { fillBg } from "./utils";

const TlopEditor = ({}) => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [finishedImage, setFinishedImage] = useState(null);

  const [firstImage, setFirstImage] = useState({
    srcUrl: "/assets/TLOP_DEFAULT_1.png",
    size: 1,
    x: 10,
    y: 50,
  });

  const [secondImage, setSecondImage] = useState({
    srcUrl: "/assets/TLOP_DEFAULT_2.png",
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
    fillBg(ctx, bgColor);
    drawBelowText(belowText, ctx);
    drawTitleText(title, ctx);
    await drawImage(firstImage, ctx);
    await drawImage(secondImage, ctx);
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
        <div className="flex items-center justify-center py-8 sm:py-2 w-full ">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        fileName="PABLO"
        finishedImage={finishedImage}
        title={formValues.title}
        buttonStyle="text-white bg-gradient-to-b from-red-500 to-orange-800"
        bg="bg-orange-400"
      />
    </>
  );
};

export default TlopEditor;
