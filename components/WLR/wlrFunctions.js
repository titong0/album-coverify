export const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, 1000, 1000);
};

export const bg = (ctx) => {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 1000, 1000);
  ctx.fillStyle = "black";
};

export const drawTitle = (title, ctx) => {
  const fontSize = 240 - Math.log2(title.length) * 40;
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Slash`;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(title, 502, 202, 600);
  ctx.fillStyle = "#ff4444";
  ctx.fillText(title, 500, 200, 600);
  ctx.fillStyle = "black";
};

/**
 * @param {string} image
 * @param {CanvasRenderingContext2D} ctx
 */
export const drawImage = async (image, ctx, tresholdLimit) => {
  const img = new Image();
  img.src = image;
  await img.decode();
  ctx.drawImage(img, 180, 70, 640, 850);
  treshold(tresholdLimit, ctx);
};

const treshold = (limit, ctx) => {
  const d = ctx.getImageData(180, 70, 640, 850);
  // prettier-ignore
  for (var i = 0; i < d.data.length; i += 4) {
    d.data[i] = d.data[i + 1] = d.data[i + 2] = d.data[i + 1] > limit ? 255 : 0;
  }
  ctx.putImageData(d, 180, 70);
};

export const drawText = async (ctx) => {
  ctx.font = "bold 12px Arial";
  ctx.fillText("VOLUME NUMBER ONE", 250, 940);
  ctx.fillText("MAYDAY ISSUE 12 / 25", 530, 940);
  ctx.fillText("OPIUM", 780, 940);

  const parentAdvSticker = new Image();
  parentAdvSticker.src = "/parental_advisory.png";
  await parentAdvSticker
    .decode()
    .then(() => ctx.drawImage(parentAdvSticker, 10, 940, 100, 50));
};
