import { useState } from "react";
import Canvas from "../General/Canvas";
import ColorPicker from "../Inputs/ColorPicker";
import Download from "../General/Download";
import { drawTitleText, drawBelowText } from "../TLOP/tlopFunctions";
import EditorContainer from "../General/EditorContainer";
import TextInput from "../Inputs/TextInput";
import { Drawer } from "../../src/Drawer";
import DetailedImageHandler from "../Inputs/DetailedImageHandler";
import { DetailedImage } from "../../src/types";

const TlopEditor = ({}) => {
  const [firstImage, setFirstImage] = useState({
    srcUrl: "defaults/TLOP_DEFAULT_1.png",
    size: 1,
    coordinates: {
      x: 100,
      y: 50,
    },
  });

  const [secondImage, setSecondImage] = useState({
    srcUrl: "defaults/TLOP_DEFAULT_2.png",
    size: 1,
    coordinates: {
      x: 450,
      y: 650,
    },
  });

  const [title, setTitle] = useState("THE LIFE OF PABLO");
  const [belowText, setBelowText] = useState("WHICH / ONE");
  const [bgColor, setBgColor] = useState("#F78C58");

  const draw = async (Ctx: Drawer) => {
    Ctx.colorBg(bgColor);
    Ctx.customDraw((ctx) => drawBelowText(belowText, ctx));
    Ctx.customDraw((ctx) => drawTitleText(title, ctx));
    await Ctx.drawScalableImage(firstImage, { height: 300, width: 350 });
    await Ctx.drawScalableImage(secondImage, { height: 300, width: 350 });
  };
  return (
    <EditorContainer
      dependencies={[title, belowText, bgColor, firstImage, secondImage]}
      drawMethod={draw}
    >
      <div className="grid sm:grid-cols-2 py-2">
        <div className="flex flex-col">
          <ColorPicker
            label="Background color"
            value={bgColor}
            setValue={setBgColor}
          />
          <TextInput
            name="title"
            label="Title"
            value={title}
            setValue={setTitle}
            className="bg-orange-300 focus:bg-red-500"
          />
          <TextInput
            name="belowText"
            label="Secondary Text"
            value={belowText}
            setValue={setBelowText}
            maxLength={18}
            className="bg-orange-300 focus:bg-red-500"
          />
          <DetailedImageHandler
            label="First image"
            name="firstImage"
            image={firstImage}
            setImage={setFirstImage}
            aspect={3 / 2}
          >
            <DetailedImageHandler.SizeHandler min="0.1" step="0.1" max="3" />
            <DetailedImageHandler.CoordinatesHandler
              pixelToUnitRatio={10}
              xProps={{
                min: -100,
                max: 100,
              }}
              yProps={{
                min: -100,
                max: 100,
              }}
            />
          </DetailedImageHandler>
          <DetailedImageHandler
            label="Second image"
            name="secondImage"
            image={secondImage}
            setImage={setSecondImage}
            aspect={3 / 2}
          >
            <DetailedImageHandler.SizeHandler min="0.1" step="0.1" max="3" />
            <DetailedImageHandler.CoordinatesHandler
              pixelToUnitRatio={10}
              xProps={{
                min: -100,
                max: 100,
              }}
              yProps={{
                min: -100,
                max: 100,
              }}
            />
          </DetailedImageHandler>
        </div>
        <Canvas />
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
