import React, { useEffect } from "react";
import { asyncBlob } from "../utils";
export const CtxSetter = ({ children, canvasRef, setCtx }) => {
  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return <>{children}</>;
};

export const EditorContainer = ({
  drawMethod,
  dependencies,
  canvasRef,
  children,
  setFinishedImage,
}) => {
  useEffect(() => {
    let ignore = false;
    drawMethod().then(() => {
      if (!ignore) {
        asyncBlob(canvasRef.current).then((blob) =>
          setFinishedImage(URL.createObjectURL(blob))
        );
      } else {
        console.log("ignored");
      }
    });
    return () => {
      ignore = true;
    };
  }, dependencies);
  return <div>{children}</div>;
};
