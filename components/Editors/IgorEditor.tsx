import React, { useState, useRef } from "react";
import Canvas from "../General/Canvas";
// import { fillBg } from "./utils";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import { Drawer } from "../../src/Drawer";
import SimpleImage from "../Inputs/SimpleImage";
import TextInput from "../Inputs/TextInput";

const IgorEditor = () => {
  const [image, setImage] = useState("/defaults/IGOR_DEFAULT.png");
  const [author, setAuthor] = useState("TYLER OKONMA");

  const draw = async (Ctx: Drawer) => {
    Ctx.utils.resetFilters();
    Ctx.colorBg("#f7b4c6");
    Ctx.utils.addFilter("grayscale", 1);
    Ctx.utils.addFilter("contrast", "180%");
    await Ctx.drawFixedImage(
      image,
      { x: 75, y: 75 },
      { height: 850, width: 850 }
    );
    Ctx.utils.resetFilters();
    Ctx.drawText(
      "ALL SONGS WRITTEN, PRODUCED AND ARRANGED BY",
      { x: 500, y: 970 },
      { textAlign: "center", font: "18px monospace" }
    );
    Ctx.drawText(
      author,
      { x: 500, y: 950 },
      { textAlign: "center", font: "18px monospace" }
    );
  };

  return (
    <EditorContainer drawMethod={draw} dependencies={[image, author]}>
      <div className="sm:grid grid-cols-2 mb-32 min-h-screen">
        <div className="flex flex-col p-2 gap-1">
          <TextInput
            className="bg-pink-300"
            label="Credited author"
            name="author"
            value={author}
            setValue={setAuthor}
          />
          <SimpleImage srcUrl={image} setSrcUrl={setImage} aspect={1 / 1} />
        </div>
        <Canvas />
      </div>
      <Download
        bg={"bg-pink-300"}
        fileName="IGOR"
        title={author}
        buttonStyle="bg-pink-400"
      />
    </EditorContainer>
  );
};

export default IgorEditor;
