import TitleTextHandler from "./WLR/TitleTextHandler";
import ImageHandler from "./WLR/ImageHandler";
import TresholdRange from "./WLR/TresholdRange";
import Canvas from "./Canvas";
import { drawImage, drawTitle, drawText } from "./WLR/wlrFunctions";
import { fillBg } from "./utils";
import { useRef, useEffect, useState } from "react";

const WlrEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);

  const [formValues, setFormValues] = useState({
    titleText: "Red",
    image: "/assets/WLR_DEFAULT.png",
    tresholdLimit: 140,
  });
  const { image, titleText, tresholdLimit } = formValues;

  const [finishedImage, setFinishedImage] = useState(null);

  const handleChange = (e) => {
    const copy = { ...formValues };
    if (e.target.name === "image") {
      if (!e.target.fils[0]) return;
      const url = URL.createObjectURL(e.target.files[0]);
      copy.image = url;
    } else {
      copy[e.target.name] = e.target.value;
    }
    setFormValues(copy);
  };

  const draw = async () => {
    fillBg(ctx);
    await drawImage(image, ctx, tresholdLimit);
    await drawText(ctx);
    drawTitle(titleText, ctx);
    setFinishedImage(canvasRef.current.toDataURL("image/png"));
  };

  useEffect(() => {
    if (ctx) {
      draw();
    }
  }, [ctx, formValues]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div>
      <div className="sm:grid grid-cols-2 mb-32">
        <form className="flex flex-col p-2" onChange={handleChange}>
          <TitleTextHandler />
          <ImageHandler image={image} />
          <TresholdRange tresholdLimit={formValues.tresholdLimit} />
        </form>
        <div className="flex items-center justify-center w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>

      <div className="sm:flex items-start gap-2 sm:gap-2 p-2 mt-4 min-h-screen bg-black">
        <img className="w-full sm:w-1/3 bg-red-300" src={finishedImage} />
        <a
          className="block p-3 text-white border rounded-sm bg-gradient-to-b from-red-500 to-red-900"
          href={finishedImage}
          download={`Slatt-${formValues.titleText}.png`}
        >
          Download Image
        </a>
      </div>
    </div>
  );
};

export default WlrEditor;
