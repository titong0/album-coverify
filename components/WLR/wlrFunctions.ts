import { Ctx2d } from "../../src/types";

export const applyTreshold = (limit: number, ctx: Ctx2d) => {
  const imageData = ctx.getImageData(180, 70, 640, 850);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= limit ? 255 : 0;
    pixels[i] = pixels[i + 1] = pixels[i + 2] = v;
  }
  ctx.putImageData(imageData, 180, 70);
};
