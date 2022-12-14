import { useRef, useEffect, useState } from "react";
import Canvas from "../General/Canvas";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import SimpleImage from "../Inputs/SimpleImage";
import { Drawer } from "../../src/Drawer";
import { applyPixelation } from "../MBDTF/mbdtfFunctions";
import RangeInput from "../Inputs/RangeInput";
import CheckBoxInput from "../Inputs/CheckboxInput";

const MbdtfEditor = () => {
  const [image, setImage] = useState("/assets/MBDTF_DEFAULT.png");
  const [border, setBorder] = useState(true);
  const [pixelation, setPixelation] = useState(23);
  const draw = async (Ctx: Drawer) => {
    await Ctx.imgBg("/assets/MBDTF_BG.png");
    const coordinates = border ? { x: 310, y: 310 } : { x: 299, y: 299 };
    const dimensions = border
      ? { height: 380, width: 380 }
      : { height: 402, width: 402 };

    await Ctx.drawFixedImage(image, coordinates, dimensions);
    await Ctx.customDraw((ctx) =>
      applyPixelation(
        ctx,
        image,
        pixelation,
        coordinates,
        dimensions,
        Ctx.IMAGE_CACHE
      )
    );
  };

  return (
    <EditorContainer
      drawMethod={draw}
      dependencies={[image, border, pixelation]}
    >
      <div className="sm:grid grid-cols-2 mb-32 my-2">
        <form className="flex flex-col">
          <SimpleImage srcUrl={image} setSrcUrl={setImage} aspect={1 / 1} />
          <RangeInput
            label={
              <>
                Pixelation rate:{" "}
                <strong>
                  {pixelation !== 1 ? `${33 - pixelation}` : "None"}
                </strong>
              </>
            }
            min="1"
            step="1"
            max="28"
            value={pixelation}
            setValue={setPixelation}
          />
          <div className="flex items-center bg-amber-300 m-2 w-fit p-3">
            <CheckBoxInput
              label="Golden border"
              checked={border}
              setValue={setBorder}
            />
          </div>
        </form>
        <Canvas />
      </div>
      <Download
        fileName="MBDTF"
        title="MBDTF"
        buttonStyle="text-white rounded-sm bg-gradient-to-b from-red-500 to-red-700"
        bg="bg-red-900"
      />
    </EditorContainer>
  );
};

export default MbdtfEditor;
