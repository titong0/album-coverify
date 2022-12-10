import { useState } from "react";
import Canvas from "./General/Canvas";
import ImageHandler from "./TLOP/ImageHandler";
import ColorPicker from "./TLOP/ColorPicker";
import Download from "./General/Download";
import { drawTitleText, drawBelowText, drawImage } from "./TLOP/tlopFunctions";
import EditorContainer from "./General/EditorContainer";
import TextInput from "./General/TextInput";
import { Drawer } from "../src/Drawer";
import DetailedImageHandler from "./Inputs/DetailedImageHandler";
import { DetailedImage } from "../src/types";

const TlopEditor = ({}) => {
  const [firstImage, setFirstImage] = useState<DetailedImage>({
    srcUrl: "/assets/TLOP_DEFAULT_1.png",
    size: 1,
    coordinates: {
      x: 10,
      y: 50,
    },
  });

  const [secondImage, setSecondImage] = useState<DetailedImage>({
    srcUrl: "/assets/TLOP_DEFAULT_2.png",
    size: 1,
    coordinates: {
      x: 40,
      y: 20,
    },
  });

  const [title, setTitle] = useState("THE LIFE OF PABLO");
  const [belowText, setBelowText] = useState("WHICH / ONE");
  const [bgColor, setBgColor] = useState("#F78C58");

  const draw = async (Ctx: Drawer) => {
    Ctx.colorBg(bgColor);
    Ctx.customDraw((ctx) => drawBelowText(belowText, ctx));
    Ctx.customDraw((ctx) => drawTitleText(title, ctx));
    await Ctx.drawScalableImage(
      firstImage,
      { height: 300, width: 350 },
      firstImage.size
    );
    await Ctx.drawScalableImage(
      secondImage,
      { height: 300, width: 350 },

      secondImage.size
    );
  };

  return (
    <EditorContainer
      dependencies={[title, belowText, bgColor, firstImage, secondImage]}
      drawMethod={draw}
    >
      <div className="grid sm:grid-cols-2 py-2">
        <div className="flex flex-col">
          <ColorPicker />
          <TextInput
            value={title}
            setValue={setTitle}
            name="title"
            label="Title"
            className="bg-orange-300 focus:bg-red-500"
          />
          <TextInput
            value={belowText}
            setValue={setBelowText}
            name="belowText"
            label="Secondary Text"
            maxLength={18}
            className="bg-orange-300 focus:bg-red-500"
          />
          <DetailedImageHandler
            label="First image"
            name="firstImage"
            image={firstImage}
            setImage={setFirstImage}
          >
            <DetailedImageHandler.SizeHandler />
            <DetailedImageHandler.CoordinatesHandler />
          </DetailedImageHandler>
          <ImageHandler
            second={false}
            image={firstImage}
            setImage={setFirstImage}
          />
          <ImageHandler image={secondImage} setImage={setSecondImage} second />
        </div>
        <div className="flex items-center justify-center py-8 sm:py-2 w-full ">
          <Canvas />
        </div>
      </div>
      <Download
        fileName="PABLO"
        title={title}
        buttonStyle="text-white bg-gradient-to-b from-red-500 to-orange-800"
        bg="bg-orange-400"
      />
    </EditorContainer>
  );
};

export default TlopEditor;
