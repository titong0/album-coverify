export const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, 1000, 1000);
};

export const drawTitle = (title, ctx) => {
  const fontSize = 240 - Math.log2(title.length) * 40;
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Slash`;
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
  drawText(ctx);
  treshold(tresholdLimit, false, ctx);
};

const treshold = (limit, inverse, ctx) => {
  const d = ctx.getImageData(180, 70, 640, 850);
  // prettier-ignore
  for (var i = 0; i < d.data.length; i += 4) {
    if(!inverse){
      d.data[i] = d.data[i + 1] = d.data[i + 2] = d.data[i + 1] > limit ? 255 : 0;
    } 
    d.data[i] = d.data[i + 1] = d.data[i + 2] = d.data[i + 1] > limit ? 255 : 0;
  }
  ctx.putImageData(d, 180, 70);
};

const drawText = (ctx) => {
  ctx.font = "bold 12px Arial";
  ctx.fillText("VOLUME NUMBER ONE", 250, 940);
  ctx.fillText("MAYDAY ISSUE 12 / 25", 530, 940);
  ctx.fillText("OPIUM", 780, 940);
};
