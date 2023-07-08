import Canvas from "../General/Canvas";
import React, { useState } from "react";
import { Drawer } from "../../src/Drawer";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import useImage from "../../hooks/useImage";
import SimpleImage from "../Inputs/SimpleImage";
import { loadAndCacheImage } from "../../src/utils";

const CmyiglEditor = () => {
  const [imageUrl, setImageUrl] = useState("/defaults/CMIYGL_DEFAULT.png");
  const draw = async (Ctx: Drawer) => {
    await Ctx.imgBg("/assets/CMIYGL_BG.png");
    await Ctx.customDraw(async (CustomCtx, cache) => {
      CustomCtx.save();
      CustomCtx.rotate(-0.01);
      await Ctx.drawFixedImage(
        imageUrl,
        { x: 240, y: 423 },
        { width: 223, height: 223 }
      );
      CustomCtx.restore();
    });
  };

  return (
    <EditorContainer drawMethod={draw} dependencies={[imageUrl]}>
      <div className="grid-cols-2 mb-32 sm:grid">
        <div className="flex flex-col">
          <SimpleImage
            setSrcUrl={setImageUrl}
            srcUrl={imageUrl}
            aspect={1 / 1}
          />
        </div>
        <Canvas />
      </div>
      <Download
        bg="bg-emerald-800"
        fileName="cmiygl"
        buttonStyle="text-white bg-gradient-to-b from-teal-600 to-green-600"
      />
    </EditorContainer>
  );
};

export default CmyiglEditor;
