import Canvas from "../General/Canvas";
import { useState } from "react";
import { Drawer } from "../../src/Drawer";
import Download from "../General/Download";
import SimpleImage from "../Inputs/SimpleImage";
import EditorContainer from "../General/EditorContainer";
import DetailedImageHandler from "../Inputs/DetailedImageHandler";
import useImage from "../../hooks/useImage";

const WolfEditor = () => {
  const [firstImage, setFirstImage] = useState("/defaults/WOLF_DEFAULT_1.png");
  const [secondImage, setSecondImage] = useImage({
    srcUrl: "/defaults/WOLF_DEFAULT_2.png",
    opacity: 0.5,
  });

  const draw = async (Ctx: Drawer) => {
    await Ctx.imgBg("/assets/WOLF_BG.png");
    await Ctx.drawFixedImage(
      firstImage,
      { x: 0, y: 1000 },
      { width: 600, height: 800 },
      { align: "bottom" }
    );
    Ctx.utils.addFilter("opacity", secondImage.opacity);
    await Ctx.drawFixedImage(
      secondImage.srcUrl,
      { x: 600, y: 500 },
      { width: 320, height: 460 },
      { align: "bottom" }
    );
    Ctx.utils.resetFilters();
  };

  return (
    <EditorContainer drawMethod={draw} dependencies={[firstImage, secondImage]}>
      <div className="grid-cols-2 mb-32 sm:grid">
        <div className="flex flex-col">
          <SimpleImage
            label="First (big) image"
            name="firstImage"
            aspect={600 / 800}
            srcUrl={firstImage}
            setSrcUrl={setFirstImage}
          />
          <DetailedImageHandler
            label="Second (small) image"
            name="secondImage"
            aspect={320 / 460}
            image={secondImage}
            setImage={setSecondImage}
          >
            <DetailedImageHandler.OpacityHandler />
          </DetailedImageHandler>
        </div>
        <Canvas />
      </div>
      <Download
        fileName="WOLF"
        title=""
        buttonStyle="text-black rounded-sm bg-blue-300"
        bg="bg-blue-900"
      />
    </EditorContainer>
  );
};

export default WolfEditor;
