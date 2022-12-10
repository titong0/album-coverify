import { Ctx2d } from "../../src/types";
import { loadAndCacheImage } from "../../src/utils";

const CACHED_IMAGES = [];

export const drawTitleText = (content: string, ctx: Ctx2d) => {
  for (let i = 1; i < 8; i++) {
    if (i === 7) {
      drawPabloText(content, 100, 70 * (i + 1), ctx);
    } else {
      drawPabloText(content, 100, 70 * i, ctx);
    }
  }
};

const drawPabloText = (text: string, x, y, ctx: Ctx2d) => {
  const separated = text.split(" ");
  const first = separated.slice(0, 3).join(" ");
  const second = separated.splice(3).join(" ");

  ctx.font = "bold 60px Helvetica";
  let secondX = first.length * 54;

  if (text.length > 17) {
    ctx.font = `bold ${1200 / text.length}px Helvetica`;
    secondX = ((first.length * 1200) / text.length) * 0.8;
  }
  ctx.fillText(first, x, y);
  second && ctx.fillText(second, secondX, y);
};

export const drawBelowText = (content: string, ctx: Ctx2d) => {
  for (let i = 0; i < 10; i++) {
    drawWhichOneText(content, 250, 500 + i * 40, ctx);
  }
  for (let i = 0; i < 10; i++) {
    drawWhichOneText(content, 750, 500 + i * 40, ctx);
  }
};

const drawWhichOneText = (content: string, x, y, ctx: Ctx2d) => {
  ctx.save();
  ctx.font = "bold 30px Helvetica";
  ctx.textAlign = "center";
  ctx.fillText(content, x, y + 90, 1000);
  ctx.restore();
};

export const drawImage = async (image, ctx: Ctx2d) => {
  const { srcUrl, x, y, size } = image;
  const img = await loadAndCacheImage(srcUrl, CACHED_IMAGES);

  const multiplier = (300 / img.naturalWidth) * size;
  ctx.drawImage(
    img,
    x * 10,
    y * 10,
    img.naturalWidth * multiplier,
    img.naturalHeight * multiplier
  );
};
