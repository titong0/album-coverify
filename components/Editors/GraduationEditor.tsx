import Canvas from "../General/Canvas";
import React, { useState } from "react";
import { Drawer } from "../../src/Drawer";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import DetailedImageHandler from "../Inputs/DetailedImageHandler";
import useImage from "../../hooks/useImage";

const GraduationEditor = () => {
  const [image, setImage] = useImage({
    srcUrl: "/defaults/GRADUATION_DEFAULT.png",
    coordinates: { x: 175, y: 300 },
    size: 0.8,
  });

  const draw = async (Ctx: Drawer) => {
    await Ctx.imgBg("/assets/GRADUATION_BG.png");
    await Ctx.drawScalableImage(
      image,
      { width: 600, height: 500 },
      { justify: "center", align: "center" }
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
        fileName="graduation"
        bg="bg-fuchsia-700"
        buttonStyle="text-gray-200 rounded-sm bg-gradient-to-b from-purple-600 to-rose-400"
      />
    </EditorContainer>
  );
};

export default GraduationEditor;
