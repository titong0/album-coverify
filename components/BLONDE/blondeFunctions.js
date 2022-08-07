import {
  getScaledWidthAndHeight,
  imgBg,
  loadAndCacheImage,
  loadFont,
} from "../utils";
loadFont("Blonde", `url("/blonded_futura_lite.ttf")`);

const CACHED_IMAGES = [];

export const drawBg = async (ctx) =>
  imgBg(ctx, "/assets/BLONDE_BG.png", CACHED_IMAGES);

export const drawMainImg = async (ctx, src, size) => {
  const img = await loadAndCacheImage(src, CACHED_IMAGES);
  let [width, height] = getScaledWidthAndHeight(img, 470, 660);
  width *= size;
  height *= size;
  // center of the image
  const xPos = 500 - width / 2;
  const YPos = 863 - height;

  ctx.drawImage(img, xPos, YPos, width, height);
};

export const drawTitle = (ctx, title) => {
  ctx.textAlign = "center";
  ctx.font = `80px Blonde`;
  ctx.fillText(title, 500, 120, 800);
};
