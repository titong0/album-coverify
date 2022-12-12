import TitleTextHandler from "./WLR/TitleTextHandler";
import ImageHandler from "./WLR/ImageHandler";
import TresholdRange from "./WLR/TresholdRange";
import Canvas from "./General/Canvas";
import { drawImage, drawTitle, drawText } from "./WLR/wlrFunctions";
import { fillBg } from "./utils";
import { useRef, useState } from "react";
import Download from "./General/Download";
import EditorContainer from "./General/EditorContainer";

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
    if (!ctx) return;
    fillBg(ctx);
    await drawImage(image, ctx, tresholdLimit);
    await drawText(ctx);
    drawTitle(titleText, ctx);
  };

  return (
    <EditorContainer
      canvasRef={canvasRef}
      dependencies={[ctx, formValues, image]}
      drawMethod={draw}
      setFinishedImage={setFinishedImage}
      setCtx={setCtx}
    >
      <div className="sm:grid grid-cols-2 mb-32">
        <form className="flex flex-col p-2" onChange={handleChange}>
          <TitleTextHandler />
          <ImageHandler setImage={setImage} />
          <TresholdRange tresholdLimit={formValues.tresholdLimit} />
        </form>
        <Canvas canvasRef={canvasRef} />
      </div>
      <Download
        fileName="Slatt"
        title={formValues.titleText}
        finishedImage={finishedImage}
        buttonStyle="text-white bg-gradient-to-b from-red-500 to-red-900"
        bg="bg-black"
      />
    </EditorContainer>
  );
};

export default WlrEditor;
