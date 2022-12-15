import { useRef, useState } from "react";
import Canvas from "../General/Canvas";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import { Drawer } from "../../src/Drawer";
import DetailedImageHandler from "../Inputs/DetailedImageHandler";
import { DetailedImage } from "../../src/types";
import TextInput from "../Inputs/TextInput";

const BlondeEditor = () => {
  const [image, setImage] = useState<DetailedImage>({
    srcUrl: "/assets/BLONDE_DEFAULT.png",
    coordinates: { x: 500, y: 863 },
    size: 0.7,
  });
  const [title, setTitle] = useState("blond");

  const draw = async (Ctx: Drawer) => {
    Ctx.utils.loadFont("Blonde", `blonded_futura_lite.ttf`);
    await Ctx.imgBg("/assets/BLONDE_BG.png");
    await Ctx.drawScalableImage(
      image,
      { width: 430, height: 660 },
      {
        justify: "center",
        align: "bottom",
      }
    );
    Ctx.drawText(
      title,
      { x: 500, y: 120 },
      {
        textAlign: "center",
        font: `80px Blonde`,
      }
    );
  };

  return (
    <EditorContainer drawMethod={draw} dependencies={[image, title]}>
      <div className="sm:grid grid-cols-2 mb-32">
        <div className="flex flex-col">
          <TextInput
            name="Title"
            className="bg-amber-700"
            label="Cover title"
            value={title}
            setValue={setTitle}
          />
          <DetailedImageHandler
            image={image}
            setImage={setImage}
            aspect={475 / 660}
          >
            <DetailedImageHandler.SizeHandler min="0" step="0.1" max="1" />
          </DetailedImageHandler>
        </div>
        <Canvas />
      </div>
      <Download
        fileName="BLONDE"
        title={title}
        buttonStyle="text-black rounded-sm bg-green-500"
        bg="bg-green-900"
      />
    </EditorContainer>
  );
};

export default BlondeEditor;
