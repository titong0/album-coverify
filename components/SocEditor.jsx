import Canvas from "./General/Canvas";
import { fillBg } from "./utils";
import { useRef, useState } from "react";
import Download from "./General/Download";
import EditorContainer from "./General/EditorContainer";
import TextInputHandler from "./SOC/TextInputHandler";
import ImageHandler from "./SOC/ImageHandler";
import {
  drawAlbumName,
  drawBgImage,
  drawGroupName,
  drawMainImg,
} from "./SOC/SocFunctions";

const SocEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);

  const [formValues, setFormValues] = useState({
    groupName: "N.W.A",
    albumName: "STRAIGHT OUTTA COMPTON",
  });

  const { groupName, albumName } = formValues;
  const [image, setImage] = useState("/assets/SOC_DEFAULT.png");
  const [finishedImage, setFinishedImage] = useState(null);

  const handleChange = (e) => {
    const copy = { ...formValues };
    copy[e.target.name] = e.target.value;
    setFormValues(copy);
  };

  const draw = async () => {
    if (!ctx) return;
    await drawMainImg(ctx, image);
    await drawBgImage(ctx);
    drawAlbumName(ctx, albumName);
    drawGroupName(ctx, groupName);
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
        <form className="flex flex-col p-2 gap-1" onChange={handleChange}>
          <TextInputHandler
            name="groupName"
            label="Group name"
            defaultValue={"N.W.A"}
          />
          <TextInputHandler
            name="albumName"
            label="Album name (bottom text)"
            defaultValue={"STRAIGHT OUTTA COMPTON"}
          />
          <ImageHandler setImage={setImage} />
        </form>
        <div className="flex items-center justify-center w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        fileName="SOC"
        title={formValues.albumName}
        finishedImage={finishedImage}
        buttonStyle="text-white bg-gradient-to-b from-red-500 to-red-900"
        bg="bg-black"
      />
    </EditorContainer>
  );
};

export default SocEditor;
