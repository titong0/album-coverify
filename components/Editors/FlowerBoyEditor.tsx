import Canvas from "../General/Canvas";
import React, { useState } from "react";
import { Drawer } from "../../src/Drawer";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import DetailedImageHandler from "../Inputs/DetailedImageHandler";
import useImage from "../../hooks/useImage";

const FlowerBoyEditor = () => {
  const [image, setImage] = useImage({
    srcUrl: "/defaults/FB_DEFAULT.png",
    coordinates: { x: 500, y: 1000 },
    size: 0.8,
  });

  const draw = async (Ctx: Drawer) => {
    await Ctx.imgBg("/assets/FB_BG.png");
    await Ctx.drawScalableImage(
      image,
      { width: 800 / 1.2, height: 1100 / 1.2 },
      { justify: "center", align: "bottom" }
    );
  };

  return (
    <EditorContainer drawMethod={draw} dependencies={[image]}>
      <div className="grid-cols-2 mb-32 sm:grid">
        <div className="flex flex-col bg-oran">
          <DetailedImageHandler
            image={image}
            setImage={setImage}
            aspect={800 / 1100}
          >
            <DetailedImageHandler.SizeHandler min="0" step="0.1" max="1" />
          </DetailedImageHandler>
        </div>
        <Canvas />
      </div>
      <Download
        title=""
        fileName="flower-boy"
        bg="bg-green-700"
        buttonStyle="text-black rounded-sm bg-gradient-to-b from-amber-500 to-orange-600"
      />
    </EditorContainer>
  );
};

export default FlowerBoyEditor;
