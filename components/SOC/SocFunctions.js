import { imgBg, loadFont, loadAndCacheImage, colorText } from "../utils";

const CACHE = [];
loadFont("Mistral", `url("/Mistral.ttf")`);

export const drawMainImg = async (ctx, src) => {
  const img = await loadAndCacheImage(src, CACHE);
  ctx.drawImage(img, 0, 150, 1000, 700);
};

export const drawBgImage = async (ctx) => {
  return imgBg(ctx, "/assets/SOC_BG.png", CACHE);
};

export const drawGroupName = (ctx, groupName) => {
  const fontSize = groupName.length > 12 ? 2000 / groupName.length : 190;
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Mistral`;
  colorText(ctx, "black", groupName, 505, 205, 800);
  colorText(ctx, "#f1373d", groupName, 500, 200, 800);
};

export const drawAlbumName = (ctx, albumName) => {
  const { length } = albumName;
  const fontSize = length > 12 ? 1300 / length : 95;

  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Mistral`;
  const maxWidth =
    length > 5
      ? ctx.measureText(albumName).width / 1.3
      : ctx.measureText(albumName).width / 1.1;

  colorText(ctx, "white", `"${albumName}"`, 500, 930, maxWidth);
};
