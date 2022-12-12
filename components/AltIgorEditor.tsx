import { useState, useRef } from "react";
import Canvas from "./General/Canvas";
import Download from "./General/Download";
import EditorContainer from "./General/EditorContainer";
import { Drawer } from "../src/Drawer";
import TextInput from "./Inputs/TextInput";
import SimpleImage from "./Inputs/SimpleImage";

const creditsDefault =
  "ALL SONGS WRITTEN, PRODUCED AND ARRANGED BY TYLER OKONMA";

const AltIgorEditor = () => {
  const [imageSrc, setImageSrc] = useState("/assets/IGOR_DEFAULT.png");
  const [creditsText, setCreditsText] = useState(creditsDefault);
  const [title, setTitle] = useState("IGOR");

  const draw = async (Ctx: Drawer) => {
    await Ctx.loadFont("IGOR", `url("/IGOR-BoldItalic.ttf")`);
    Ctx.colorBg("#f7b4c6");
    Ctx.addFilter("grayscale", 1);
    Ctx.addFilter("contrast", "180%");
    await Ctx.drawFixedImage(
      imageSrc,
      { x: 260, y: 194 },
      { height: 510, width: 510 }
    );
    Ctx.resetFilter();
    Ctx.drawText(
      title,
      { x: 500, y: 800 },
      { color: "#222", font: "80px IGOR", textAlign: "center" }
    );
    Ctx.drawText(
      creditsText,
      { x: 500, y: 850 },
      {
        color: "#222",
        font: "23px monospace",
        textAlign: "center",
        maxCharsPerLine: 41,
      }
    );
  };

  return (
    <EditorContainer
      drawMethod={draw}
      dependencies={[imageSrc, creditsText, title]}
    >
      <div className="sm:grid grid-cols-2 mb-32 min-h-screen">
        <form>
          <TextInput
            name="titleText"
            label="Title text"
            maxLength={24}
            className="bg-pink-300"
            value={title}
            setValue={setTitle}
          />
          <TextInput
            name="creditsText"
            label="Credits text"
            maxLength={24}
            className="bg-pink-300"
            value={creditsText}
            setValue={setCreditsText}
          />
          <SimpleImage
            setSrcUrl={setImageSrc}
            srcUrl={imageSrc}
            aspect={1 / 1}
          />
        </form>
        <Canvas />
      </div>
      <Download
        bg={"bg-pink-300"}
        fileName="IGOR"
        title={title}
        buttonStyle="bg-pink-400"
      />
    </EditorContainer>
  );
};

export default AltIgorEditor;
