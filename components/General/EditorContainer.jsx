import React, { useEffect } from "react";
import { asyncBlob } from "../utils";

export const EditorContainer = ({
  drawMethod,
  dependencies,
  canvasRef,
  children,
  setFinishedImage,
  setCtx,
}) => {
  useEffect(() => {
    let ignore = false;
    drawMethod().then(() => {
      if (!ignore) {
        asyncBlob(canvasRef.current).then((blob) =>
          setFinishedImage(URL.createObjectURL(blob))
        );
      }
    });
    return () => {
      ignore = true;
    };
  }, dependencies);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return <div>{children}</div>;
};
