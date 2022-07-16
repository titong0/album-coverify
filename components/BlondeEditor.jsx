import { useRef, useEffect, useState } from "react";
import ImageHandler from "./BLONDE/ImageHandler";
import Canvas from "./General/Canvas";
import Download from "./General/Download";
import { asyncBlob } from "./utils";
import { drawBg, drawMainImg, drawTitle } from "./BLONDE/blondeFunctions";

const BlondeEditor = () => {
  const canvasRef = useRef();
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState("/assets/BLONDE_DEFAULT.png");
  const [title, setTitle] = useState("blond");
  const [finishedImage, setFinishedImage] = useState(null);

  const draw = async () => {
    await drawBg(ctx);
    await drawMainImg(ctx, image);
    await drawTitle(ctx, title);
    const img = await asyncBlob(canvasRef.current);
    setFinishedImage(URL.createObjectURL(img));
  };

  useEffect(() => {
    ctx && draw();
  }, [ctx, image, title]);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <div>
      <div className="sm:grid grid-cols-2 mb-32">
        <form className="flex flex-col p-2">
          <label className="flex items-center w-fit">Cover title</label>
          <input
            className="mt-2 p-2 border-b-2 border-black bg-yellow-900 text-gray-200 w-96"
            type="text"
            maxLength="20"
            onChange={(e) => setTitle(e.target.value)}
          />
          <ImageHandler setImage={setImage} />
        </form>
        <div className="flex items-center justify-center w-full">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        fileName="BLONDE"
        finishedImage={finishedImage}
        title={title}
        buttonStyle="text-black rounded-sm bg-green-500"
        bg="bg-green-900"
      />
    </div>
  );
};

export default BlondeEditor;
