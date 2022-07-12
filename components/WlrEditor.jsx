import TitleTextHandler from "./WLR/TitleTextHandler";
import ImageHandler from "./WLR/ImageHandler";
import TresholdRange from "./WLR/TresholdRange";
import Canvas from "./Canvas";
import { drawImage, drawTitle, drawText } from "./WLR/wlrFunctions";
import { asyncBlob, fillBg } from "./utils";
import { useRef, useEffect, useState } from "react";
import Download from "./Download";

const WlrEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);

  const [formValues, setFormValues] = useState({
    titleText: "Red",
    tresholdLimit: 140,
  });
  const { titleText, tresholdLimit } = formValues;
  const [image, setImage] = useState("/assets/WLR_DEFAULT.png");
  const [finishedImage, setFinishedImage] = useState(null);

  const handleChange = (e) => {
    const copy = { ...formValues };
    copy[e.target.name] = e.target.value;
    setFormValues(copy);
  };

  const draw = async () => {
    fillBg(ctx);
    await drawImage(image, ctx, tresholdLimit);
    await drawText(ctx);
    drawTitle(titleText, ctx);
    const img = await asyncBlob(canvasRef.current);
    setFinishedImage(URL.createObjectURL(img));
  };

  useEffect(() => {
    ctx && draw();
  }, [ctx, formValues, image]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div>
      <div className="sm:grid grid-cols-2 mb-32">
        <form className="flex flex-col p-2" onChange={handleChange}>
          <TitleTextHandler />
          <ImageHandler setImage={setImage} />
          <TresholdRange tresholdLimit={formValues.tresholdLimit} />
        </form>
        <div className="flex items-center justify-center w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        fileName="Slatt"
        title={formValues.titleText}
        finishedImage={finishedImage}
        buttonStyle="text-white border rounded-sm bg-gradient-to-b from-red-500 to-red-900"
        bg="bg-black"
      />
    </div>
  );
};

export default WlrEditor;
