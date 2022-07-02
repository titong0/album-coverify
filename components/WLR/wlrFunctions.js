import * as utils from "../utils";
utils.loadFont("Slash", `url("/Slash-Signature.ttf")`);

const CACHED_IMAGES = [];

export const drawTitle = (title, ctx) => {
  const fontSize = 240 - Math.log2(title.length) * 40;
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Slash`;
  utils.colorText(ctx, "#ffffff", title, 502, 202, 600);
  utils.colorText(ctx, "#ff4444", title, 500, 200, 600);
};

/**
 * @param {string} imageUrl
 * @param {CanvasRenderingContext2D} ctx
 */
export const drawImage = async (imageUrl, ctx, tresholdLimit) => {
  const mainImg = await utils.loadAndCacheImage(imageUrl, CACHED_IMAGES);
  ctx.drawImage(mainImg, 180, 70, 640, 850);
  applyTreshold(tresholdLimit, ctx);
};

const applyTreshold = (limit, ctx) => {
  const imageData = ctx.getImageData(180, 70, 640, 850);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= limit ? 255 : 0;
    pixels[i] = pixels[i + 1] = pixels[i + 2] = v;
  }
  // console.log(d);
  ctx.putImageData(imageData, 180, 70);
};

export const drawText = async (ctx) => {
  ctx.font = "bold 12px Arial";
  ctx.fillText("VOLUME NUMBER ONE", 250, 940);
  ctx.fillText("MAYDAY ISSUE 12 / 25", 530, 940);
  ctx.fillText("OPIUM", 780, 940);

  const parentAdvSticker = await utils.loadAndCacheImage(
    "/assets/parental_advisory.png",
    CACHED_IMAGES
  );
  ctx.drawImage(parentAdvSticker, 10, 940, 100, 50);
};
