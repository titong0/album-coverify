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

export const colorText = (
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

export const loadAndCacheImage = async (url, cache) => {
  let img = cache.find((img) => img.id === url);
  if (!img) {
    img = new Image();
    img.src = url;
    img.id = url;
    try {
      await img.decode();
    } catch (error) {
      throw new Error(error);
    }
    cache.push(img);
    return img;
  }
  return img;
};

// scale the image so that it reaches height or width without altering aspect ratio
export const getScaledWidthAndHeight = (
  img: HTMLImageElement,
  intendedWidth: number,
  intendedHeight: number
) => {
  const { naturalWidth, naturalHeight } = img;
  console.log(naturalWidth, naturalHeight);

  let multiplier = 1;
  if (naturalWidth > naturalHeight) {
    multiplier = intendedWidth / naturalWidth;
  } else {
    multiplier = intendedHeight / naturalHeight;
  }
  return [naturalWidth * multiplier, naturalHeight * multiplier];
};

export const loadFont = async (fontName, fontUrl) => {
  if (typeof FontFace === "undefined") return;
  const font = new FontFace(fontName, fontUrl);
  try {
    await font.load();
  } catch (error) {
    throw new Error(error);
  }
  document.fonts.add(font);
};

export function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: Math.floor(
      ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width
    ),
    y: Math.floor(
      ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
    ),
  };
}

export const asyncBlob = async (element: HTMLCanvasElement) => {
  return new Promise((resolve) => {
    element.toBlob((blob) => resolve(blob));
  }) as Promise<Blob>;
};

export const imgFromInputEvent = (e) => {
  if (!e.target.files[0]) return;
  if (e.target.files[0].size > 2097152) return alert("Image too big!");
  const img = e.target.files[0];
  return URL.createObjectURL(img);
};

// original code is from https://github.com/DominicTobias/react-image-crop#example
const TO_RADIANS = Math.PI / 180;
export async function canvasPreview(image, canvas, crop, scale, rotate) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  const pixelRatio = window.devicePixelRatio;
  // const pixelRatio = 1

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const rotateRads = rotate * TO_RADIANS;
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();

  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY);
  // 4) Move the origin to the center of the original position
  ctx.translate(centerX, centerY);
  // 3) Rotate around the origin
  ctx.rotate(rotateRads);
  // 2) Scale the image
  ctx.scale(scale, scale);
  // 1) Move the center of the image to the origin (0,0)
  ctx.translate(-centerX, -centerY);
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  ctx.restore();
}
