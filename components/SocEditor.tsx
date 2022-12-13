import Canvas from "./General/Canvas";
import { useRef, useState } from "react";
import Download from "./General/Download";
import EditorContainer from "./General/EditorContainer";
import { Drawer } from "../src/Drawer";
import TextInput from "./Inputs/TextInput";
import SimpleImage from "./Inputs/SimpleImage";

const SocEditor = () => {
  const [groupName, setGroupName] = useState("N.W.A");
  const [albumName, setAlbumName] = useState("STRAIGHT OUTTA COMPTON");
  const [image, setImage] = useState("/assets/SOC_DEFAULT.png");

  const draw = async (Ctx: Drawer) => {
    await Ctx.loadFont("Mistral", `url("/Mistral.ttf")`);
    await Ctx.drawFixedImage(
      image,
      { x: 0, y: 150 },
      { width: 1000, height: 700 }
    );
    await Ctx.imgBg("/assets/SOC_BG.png");
    const length = albumName.length;
    const albumNameFontSize = length > 12 ? 1300 / length : 95;
    Ctx.drawText(
      albumName,
      { x: 500, y: 930 },
      {
        font: `${albumNameFontSize}px Mistral`,
        color: "white",
        textAlign: "center",
      }
    );
    const groupNameFontSize =
      groupName.length > 12 ? 2000 / groupName.length : 190;
    Ctx.drawText(
      groupName,
      { x: 505, y: 205 },
      {
        font: `${groupNameFontSize}px Mistral`,
        color: "black",
        textAlign: "center",
        maxWidth: 800,
      }
    );
    Ctx.drawText(
      groupName,
      { x: 500, y: 200 },
      {
        font: `${groupNameFontSize}px Mistral`,
        color: "#f1373d",
        textAlign: "center",
        maxWidth: 800,
      }
    );
  };

  return (
    <EditorContainer
      dependencies={[image, groupName, albumName]}
      drawMethod={draw}
    >
      <div className="sm:grid grid-cols-2 mb-32">
        <form className="flex flex-col p-2 gap-1">
          <TextInput
            name="groupName"
            label="Group name"
            className="bg-white"
            setValue={setGroupName}
            value={groupName}
          />
          <TextInput
            name="albumName"
            label="Album name (bottom text)"
            className="bg-white"
            setValue={setAlbumName}
            value={albumName}
          />
          <SimpleImage
            aspect={1000 / 700}
            setSrcUrl={setImage}
            srcUrl={image}
          />
          {/* <ImageHandler setImage={setImage} /> */}
        </form>
        <Canvas />
      </div>
      <Download
        fileName="SOC"
        title={albumName}
        buttonStyle="text-white bg-gradient-to-b from-red-500 to-red-900"
        bg="bg-black"
      />
    </EditorContainer>
  );
};

export default SocEditor;
