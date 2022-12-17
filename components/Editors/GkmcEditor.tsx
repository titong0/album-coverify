import { useRef, useState } from "react";
import Canvas from "../General/Canvas";
import Download from "../General/Download";
import RectanglesHandler from "../GKMC/RectanglesHandler";
import EditorContainer, { CanvasRefContext } from "../General/EditorContainer";
import SimpleImage from "../Inputs/SimpleImage";
import RangeInput from "../Inputs/RangeInput";
import { Drawer } from "../../src/Drawer";

type Rectangle = { x: number; y: number; ID: string };

const GkmcEditor = () => {
  const [image, setImage] = useState("/defaults/GKMC_DEFAULT.png");
  const [rectanglesData, setRectanglesData] = useState<Array<Rectangle>>([]);
  const [selectedId, setSelectedId] = useState("");
  const [greenTintOpacity, setGreenTintOpacity] = useState(0.5);

  const draw = async (Ctx: Drawer) => {
    await Ctx.imgBg("/assets/GKMC_BG.png");
    Ctx.utils.addFilter("contrast", "120%");
    Ctx.utils.addFilter("saturate", "50%");
    await Ctx.drawFixedImage(
      image,
      { x: 40, y: 42 },
      { width: 920, height: 790 }
    );
    Ctx.utils.resetFilter();
    Ctx.drawRect(
      { x: 40, y: 42 },
      { width: 920, height: 790 },
      `rgba(90, 150, 90, ${greenTintOpacity})`
    );
    rectanglesData.forEach((rect) => {
      const dimensions = { width: 110, height: 25 };
      let color = rect.ID === selectedId ? "#aaffaa" : "black";
      Ctx.drawRect({ x: rect.x, y: rect.y }, dimensions, color);
    });
  };

  return (
    <EditorContainer
      drawMethod={draw}
      dependencies={[image, rectanglesData, selectedId, greenTintOpacity]}
    >
      <div className="sm:grid grid-cols-2 mb-32">
        <div className="flex flex-col gap-4">
          <SimpleImage aspect={920 / 720} setSrcUrl={setImage} srcUrl={image} />
          <RangeInput
            name="greenTintOpacity"
            label={
              <>
                green tint intensity: <strong> {greenTintOpacity}</strong>
              </>
            }
            value={greenTintOpacity}
            setValue={setGreenTintOpacity}
            min="0"
            max="0.9"
            step="0.05"
          />

          <RectanglesHandler
            rectanglesData={rectanglesData}
            setRectanglesData={setRectanglesData}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
        <Canvas />
      </div>
      <Download
        title=""
        fileName="GKMC"
        buttonStyle="text-black rounded-sm bg-green-500"
        bg="bg-green-900"
      />
    </EditorContainer>
  );
};

export default GkmcEditor;
