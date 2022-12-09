import React, { useEffect, useRef, createContext } from "react";
import { asyncBlob } from "../utils";

export const CanvasRefContext = createContext(null);

const EditorContainer = ({
  drawMethod,
  dependencies,
  children,
  setFinishedImage,
  setCtx,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>();

  const handleDrawing = async (ignore: boolean) => {
    if (ignore) return;
    await drawMethod();
    if (ignore) return;
    const finishedBlob = await asyncBlob(canvasRef.current);
    setFinishedImage(URL.createObjectURL(finishedBlob));
  };

  useEffect(() => {
    let ignore = false;
    // wait 100ms between canvas draws to prevent
    // too many redraws when text input changes
    new Promise((res) => setTimeout(res, 100)).then(handleDrawing);
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

  return (
    <CanvasRefContext.Provider value={canvasRef}>
      {children}
    </CanvasRefContext.Provider>
  );
};

export default EditorContainer;
