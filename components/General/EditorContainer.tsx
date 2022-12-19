import React, { useEffect, useRef, createContext, useState } from "react";
import { Drawer } from "../../src/Drawer";
import { asyncBlob } from "../../src/utils";

export const CanvasRefContext =
  createContext<React.MutableRefObject<HTMLCanvasElement | null> | null>(null);
export const FinishedImageContext = createContext<string | null>(null);

type EditorContainerProps = {
  willReadFrequently?: boolean;
  drawMethod: (draw: Drawer) => Promise<void>;
  dependencies: any[];
  children: React.ReactNode;
};
const EditorContainer: React.FC<EditorContainerProps> = ({
  willReadFrequently,
  drawMethod,
  dependencies,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const DrawerInstance = useRef<Drawer | null>(null);
  const [finishedImage, setFinishedImage] = useState<string | null>(null);

  const handleDrawing = async (ignore: boolean) => {
    if (!DrawerInstance.current || !canvasRef.current) return;
    await drawMethod(DrawerInstance.current);
    if (ignore) return;
    const finishedBlob = await asyncBlob(canvasRef.current);
    if (ignore) return;
    setFinishedImage(URL.createObjectURL(finishedBlob));
  };

  useEffect(() => {
    // if (!DrawerInstance.current?.ctx.canvas) return console.log("NO CTX");
    const updateRate = 100;
    let ignore = false;
    // wait 100ms between canvas draws to prevent
    // too many redraws when text input changes
    new Promise((res) => setTimeout(res, updateRate)).then(() =>
      handleDrawing(ignore)
    );
    return () => {
      // if the draw method is called again before the previous call finishes
      // set ignore to true in order to prevent race conditions and improve
      // perf
      ignore = true;
    };
  }, dependencies);

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext("2d", {
      willReadFrequently: willReadFrequently || false,
    });
    if (!ctx) return;
    DrawerInstance.current = new Drawer(ctx);
  }, [canvasRef.current]);

  return (
    <CanvasRefContext.Provider value={canvasRef}>
      <FinishedImageContext.Provider value={finishedImage}>
        {children}
      </FinishedImageContext.Provider>
    </CanvasRefContext.Provider>
  );
};

export default EditorContainer;
