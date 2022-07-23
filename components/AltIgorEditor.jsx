import { useState, useRef, useEffect } from "react";
import { fillBg, asyncBlob } from "./utils";
import Canvas from "./General/Canvas";
import Download from "./General/Download";
import ImageHandler from "./IGOR/ImageHandler";
import CreditsTextHandler from "./ALT-IGOR/CreditsTextHandler";
import TitleHandler from "./ALT-IGOR/TitleHandler";
import {
  drawCredits,
  drawMainImg,
  drawTitle,
} from "./ALT-IGOR/altIgorFunctions";

const creditsDefault =
  "ALL SONGS WRITTEN, PRODUCED AND ARRANGED BY TYLER OKONMA";

const AltIgorEditor = () => {
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState("/assets/IGOR_DEFAULT.png");
  const [creditsText, setCreditsText] = useState(creditsDefault);
  const [title, setTitle] = useState("IGOR");
  const [finishedImage, setFinishedImage] = useState(null);
  const canvasRef = useRef(null);

  const draw = async () => {
    fillBg(ctx, "#f7b4c6");
    await drawMainImg(ctx, image);
    drawTitle(ctx, title);
    drawCredits(ctx, creditsText);
    const img = await asyncBlob(canvasRef.current);
    setFinishedImage(URL.createObjectURL(img));
  };

  useEffect(() => {
    ctx && draw();
  }, [ctx, image, creditsText, title]);

  useEffect(() => {
    canvasRef.current && setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <>
      <div className="sm:grid grid-cols-2 mb-32 min-h-screen">
        <form>
          <CreditsTextHandler
            creditsText={creditsText}
            setCreditsText={setCreditsText}
          />
          <TitleHandler title={title} setTitle={setTitle} />
          <ImageHandler image={image} setImage={setImage} />
        </form>
        <div className="flex w-full justify-center items-center">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        bg={"bg-pink-300"}
        fileName="IGOR"
        title={title}
        finishedImage={finishedImage}
        buttonStyle="bg-pink-400"
      />
    </>
  );
};

export default AltIgorEditor;
