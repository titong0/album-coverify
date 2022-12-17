import { useRef, useState } from "react";
import Canvas from "../General/Canvas";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import { Drawer } from "../../src/Drawer";
import DetailedImageHandler from "../Inputs/DetailedImageHandler";
import { DetailedImage } from "../../src/types";
import TextInput from "../Inputs/TextInput";
import SimpleImage from "../Inputs/SimpleImage";

const BlondeEditor = () => {
  const [firstImage, setFirstImage] = useState("WOLF_DEFAULT_1.png");
  const [secondImage, setSecondImage] = useState("WOLF_DEFAULT_2.png");

  const draw = async (Ctx: Drawer) => {
    await Ctx.imgBg("/assets/WOLF_BG.png");
    await Ctx.drawFixedImage(
      firstImage,
      { x: 0, y: 1000 },
      { width: 640, height: 830 },
      { align: "bottom" }
    );
  };

  return (
    <EditorContainer drawMethod={draw} dependencies={[image, title]}>
      <div className="sm:grid grid-cols-2 mb-32">
        <div className="flex flex-col">
          <SimpleImage
            label="First (big) image"
            name="firstImage"
            aspect={640 / 830}
            srcUrl={firstImage}
            setSrcUrl={setFirstImage}
          />
          <SimpleImage
            label="Second (small) image"
            name="secondImage"
            aspect={320 / 460}
            srcUrl={firstImage}
            setSrcUrl={setFirstImage}
          />
        </div>
        <Canvas />
      </div>
      <Download
        fileName="BLONDE"
        buttonStyle="text-black rounded-sm bg-green-500"
        bg="bg-green-900"
      />
    </EditorContainer>
  );
};

const WolfEditor = () => {
  return <div>WolfEditor</div>;
};

export default WolfEditor;
