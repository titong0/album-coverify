import { imgBg, loadAndCacheImage } from "../utils";

const CACHED_IMAGES = [];

export const drawBg = async (ctx) => {
  imgBg(ctx, "/assets/GKMC_BG.png", CACHED_IMAGES);
};

export const drawMainImg = async (ctx, src) => {
  const img = await loadAndCacheImage(src, CACHED_IMAGES);
  ctx.filter = "contrast(120%) saturation(50%)";
  ctx.drawImage(img, 40, 42, 920, 790);
  ctx.filter = "none";
};

export const drawRectangles = (ctx, rectangles, selectedId) => {
  rectangles.forEach((rect) => {
    if (rect.ID === selectedId) {
      ctx.fillStyle = "#aaffaa";
    }
    ctx.fillRect(rect.x, rect.y, 110, 25);
    ctx.fillStyle = "black";
  });
};
/**
 *
 * @param {CanvasRenderingContext2D} ctx
 */

export const applyGreenTint = (ctx, opacity) => {
  ctx.fillStyle = `rgba(90, 150, 90, ${opacity})`;
  ctx.fillRect(40, 42, 920, 790);
  ctx.fillStyle = "black";
};
