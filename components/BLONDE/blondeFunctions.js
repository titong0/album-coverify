import { imgBg, loadAndCacheImage, loadFont } from "../utils";
loadFont("Blonde", `url("/blonded_futura_lite.ttf")`);

const CACHED_IMAGES = [];

export const drawBg = async (ctx) =>
  imgBg(ctx, "/assets/BLONDE_BG.png", CACHED_IMAGES);

export const drawMainImg = async (ctx, src) => {
  const img = await loadAndCacheImage(src, CACHED_IMAGES);
  ctx.drawImage(img, 263, 155, 475, 710);
};

export const drawTitle = (ctx, title) => {
  ctx.textAlign = "center";
  ctx.font = `80px Blonde`;
  ctx.fillText(title, 500, 120, 800);
};
