import Canvas from "../General/Canvas";
import { applyTreshold } from "../WLR/wlrFunctions";
import { useState } from "react";
import Download from "../General/Download";
import EditorContainer from "../General/EditorContainer";
import TextInput from "../Inputs/TextInput";
import RangeInput from "../Inputs/RangeInput";
import SimpleImage from "../Inputs/SimpleImage";
import { Drawer } from "../../src/Drawer";
import CheckBoxInput from "../Inputs/CheckboxInput";

const WlrEditor = () => {
  const [tresholdLimit, setTresholdLimit] = useState(140);
  const [image, setImage] = useState("/defaults/WLR_DEFAULT.png");
  const [titleText, setTitleText] = useState("Red");
  const [usingCustomText, setUsingCustomText] = useState(false);

  const draw = async (Ctx: Drawer) => {
    await Ctx.utils.loadFont("Slash", "Slash-Signature.ttf");
    await Ctx.imgBg("/assets/WLR_BG.png");
    await Ctx.drawFixedImage(
      image,
      { x: 200, y: 70 },
      { width: 600, height: 830 }
    );
    Ctx.customDraw((ctx) => applyTreshold(tresholdLimit, ctx));
    if (!usingCustomText) {
      await Ctx.drawFixedImage(
        "/assets/WLR_TEXT.png",
        { x: 502, y: 32 },
        { width: 502, height: 315 },
        { justify: "center" }
      );
    } else {
      const titleFontSize = 240 - Math.log2(titleText.length) * 40;
      Ctx.drawText(
        titleText,
        { x: 502, y: 202 },
        {
          font: `bold ${Math.round(titleFontSize)}px Slash`,
          textAlign: "center",
          fillStyle: "#ffffff",
          maxWidth: 600,
        }
      );
      Ctx.drawText(
        titleText,
        { x: 500, y: 200 },
        {
          font: `bold ${titleFontSize}px Slash`,
          textAlign: "center",
          fillStyle: "#ff2222",
          maxWidth: 600,
        }
      );
    }
  };

  return (
    <EditorContainer
      dependencies={[tresholdLimit, image, titleText, usingCustomText]}
      drawMethod={draw}
      willReadFrequently={true}
    >
      <div className="grid-cols-2 mb-32 sm:grid">
        <div className="flex flex-col p-2">
          <CheckBoxInput
            label="Use custom text"
            checked={usingCustomText}
            setValue={setUsingCustomText}
          />
          <div className={usingCustomText ? "" : "opacity-30"}>
            <TextInput
              label="Title text"
              name="titleText"
              value={titleText}
              setValue={setTitleText}
              maxLength={24}
              className="bg-red-500"
              noLeftMargin
            />
          </div>
          <RangeInput
            name="treshold"
            label={
              <>
                How bright is too bright: <strong>{tresholdLimit}</strong>
              </>
            }
            value={tresholdLimit}
            setValue={setTresholdLimit}
            maxLength={24}
            min="10"
            max="255"
          />
          <SimpleImage aspect={600 / 830} setSrcUrl={setImage} srcUrl={image} />
        </div>
        <Canvas />
      </div>
      <Download
        fileName="Slatt"
        title={"WLR"}
        buttonStyle="text-white bg-gradient-to-b from-red-500 to-red-900"
        bg="bg-black"
      />
    </EditorContainer>
  );
};

export default WlrEditor;
