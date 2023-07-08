import { useState, useRef } from "react";
import Canvas from "../General/Canvas";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import { Drawer } from "../../src/Drawer";
import TextInput from "../Inputs/TextInput";
import SimpleImage from "../Inputs/SimpleImage";

const creditsDefault =
  "ALL SONGS WRITTEN, PRODUCED AND ARRANGED BY TYLER OKONMA";

const AltIgorEditor = () => {
  const [imageSrc, setImageSrc] = useState("/defaults/IGOR_DEFAULT.png");
  const [creditsText, setCreditsText] = useState(creditsDefault);
  const [title, setTitle] = useState("IGOR");

  const draw = async (Ctx: Drawer) => {
    await Ctx.utils.loadFont("IGOR", `IGOR-BoldItalic.ttf`);
    Ctx.utils.resetFilters();
    Ctx.colorBg("#f7b4c6");
    Ctx.utils.addFilter("grayscale", 1);
    Ctx.utils.addFilter("contrast", "180%");
    await Ctx.drawFixedImage(
      imageSrc,
      { x: 260, y: 194 },
      { height: 510, width: 510 }
    );
    Ctx.utils.resetFilters();
    Ctx.drawText(
      title,
      { x: 500, y: 800 },
      { fillStyle: "#222", font: "80px IGOR", textAlign: "center" }
    );
    Ctx.drawText(
      creditsText,
      { x: 500, y: 850 },
      {
        fillStyle: "#222",
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
      <div className="min-h-screen grid-cols-2 mb-32 sm:grid">
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
        buttonStyle="text-black rounded-sm bg-gradient-to-b from-pink-300 to-fuchsia-300"
      />
    </EditorContainer>
  );
};

export default AltIgorEditor;
