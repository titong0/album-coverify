import { useState } from "react";
import Canvas from "./General/Canvas";
import ImageHandler from "./TLOP/ImageHandler";
import ColorPicker from "./TLOP/ColorPicker";
import Download from "./General/Download";
import { drawTitleText, drawBelowText, drawImage } from "./TLOP/tlopFunctions";
import { fillBg } from "../src/utils";
import EditorContainer from "./General/EditorContainer";
import TextInput from "./General/TextInput";

const TlopEditor = ({}) => {
  const [Drawer, setDrawer] = useState(null);
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

  const [title, setTitle] = useState("THE LIFE OF PABLO");
  const [belowText, setBelowText] = useState("WHICH / ONE");
  const [bgColor, setBgColor] = useState("#F78C58");
  const draw = async () => {
    if (!ctx) return;
    fillBg(ctx, bgColor);
    drawBelowText(belowText, ctx);
    drawTitleText(title, ctx);
    await drawImage(firstImage, ctx);
    await drawImage(secondImage, ctx);
  };

  return (
    <EditorContainer
      setFinishedImage={setFinishedImage}
      dependencies={[ctx, title, belowText, bgColor, firstImage, secondImage]}
      drawMethod={draw}
      setCtx={setCtx}
    >
      <div className="grid sm:grid-cols-2 py-2">
        {ctx !== null ? (
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
            <ImageHandler
              second={false}
              image={firstImage}
              setImage={setFirstImage}
            />
            <ImageHandler
              image={secondImage}
              setImage={setSecondImage}
              second
            />
          </div>
        ) : null}
        <div className="flex items-center justify-center py-8 sm:py-2 w-full ">
          <Canvas />
        </div>
      </div>
      <Download
        fileName="PABLO"
        finishedImage={finishedImage}
        title={title}
        buttonStyle="text-white bg-gradient-to-b from-red-500 to-orange-800"
        bg="bg-orange-400"
      />
    </EditorContainer>
  );
};

export default TlopEditor;
