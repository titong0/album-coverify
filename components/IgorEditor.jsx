import React, { useState, useRef, useEffect } from "react";
import ImageHandler from "./IGOR/ImageHandler";
import Canvas from "./General/Canvas";
import { fillBg, asyncBlob } from "./utils";
import Download from "./General/Download";
import AuthorHandler from "./IGOR/AuthorHandler";
import { drawCredits, drawMainImg } from "./IGOR/igorFunctions";

const IgorEditor = () => {
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState("/assets/IGOR_DEFAULT.png");
  const [author, setAuthor] = useState("TYLER OKONMA");
  const [finishedImage, setFinishedImage] = useState(null);
  const canvasRef = useRef(null);

  const draw = async () => {
    fillBg(ctx, "#f7b4c6");
    await drawMainImg(ctx, image);
    drawCredits(ctx, author);
    const img = await asyncBlob(canvasRef.current);
    setFinishedImage(URL.createObjectURL(img));
  };

  useEffect(() => {
    ctx && draw();
  }, [ctx, image, author]);

  useEffect(() => {
    canvasRef.current && setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return (
    <>
      <div className="sm:grid grid-cols-2 mb-32 min-h-screen">
        <form>
          <AuthorHandler author={author} setAuthor={setAuthor} />
          <ImageHandler image={image} setImage={setImage} />
        </form>
        <div className="flex w-full justify-center items-center">
          <Canvas canvasRef={canvasRef} />
        </div>
      </div>
      <Download
        bg={"bg-pink-300"}
        fileName="IGOR"
        title={author}
        finishedImage={finishedImage}
        buttonStyle="bg-pink-400"
      />
    </>
  );
};

export default IgorEditor;
