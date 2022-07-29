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
  const fontSize = albumName.length > 12 ? 1800 / albumName.length : 100;
  const maxWidth = (albumName.length * fontSize) / 4;
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Mistral`;
  colorText(ctx, "white", `"${albumName}"`, 500, 930, maxWidth);
};
