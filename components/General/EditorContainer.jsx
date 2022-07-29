import React, { useEffect } from "react";
import { asyncBlob } from "../utils";

const EditorContainer = ({
  drawMethod,
  dependencies,
  canvasRef,
  children,
  setFinishedImage,
  setCtx,
}) => {
  useEffect(() => {
    let ignore = false;
    // wait 200ms between canvas draws to prevent
    // too many redraws when text input changes
    new Promise((res) => setTimeout(res, 200)).then(() => {
      if (!ignore) {
        drawMethod().then(() => {
          if (!ignore) {
            asyncBlob(canvasRef.current).then((blob) =>
              setFinishedImage(URL.createObjectURL(blob))
            );
          }
        });
      }
    });
    return () => {
      // if the draw method is called again before the previous call finishes
      // set ignore to true in order to prevent race conditions and improve
      // perf
      ignore = true;
    };
  }, dependencies);

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, [canvasRef.current]);

  return <div>{children}</div>;
};

export default EditorContainer;
