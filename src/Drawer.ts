import { loadAndCacheImage } from "./utils";

type Ctx2d = CanvasRenderingContext2D;

export const clearCanvas = (ctx: Ctx2d) => {
  ctx.clearRect(0, 0, 1000, 1000);
};

export const fillBg = (ctx: Ctx2d, color: string) => {
  let previousColor = ctx.fillStyle;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1000, 1000);
  ctx.fillStyle = previousColor;
};

export const imgBg = async (ctx, url, cache) => {
  const img = await loadAndCacheImage(url, cache);
  ctx.drawImage(img, 0, 0, 1000, 1000);
};

const colorText = (
  ctx: Ctx2d,
  color: CanvasFillStrokeStyles["fillStyle"],
  text: string,
  x: number,
  y: number,
  maxWidth?: number,
  options?: Ctx2d
) => {
  let [prevFillStyle, prevAlign] = [ctx.fillStyle, ctx.textAlign];
  ctx.textAlign = options.textAlign;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y, maxWidth);
  ctx.fillStyle = prevFillStyle;
  ctx.textAlign = prevAlign;
};
export class Drawer {
  ctx: Ctx2d;
  constructor(context: Ctx2d) {
    this.ctx = context;
  }
  colorText(...args) {
    colorText(this.ctx, ...args);
  }
}
