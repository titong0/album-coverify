import {
  CanvasFilters,
  CanvColor,
  Coordinates,
  Ctx2d,
  DetailedImage,
  Dimensions,
  ImageOptions,
  TextOptions,
} from "./types";
import {
  adjustCoordinates,
  drawTextWithMaxChars,
  getScaledWidthAndHeight,
  loadAndCacheImage,
} from "./utils";

export class Drawer {
  ctx: Ctx2d;
  IMAGE_CACHE = [];

  constructor(context: Ctx2d) {
    this.ctx = context;
  }

  colorText(text: string, x: number, y: number, color: CanvColor) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, x, y);
    this.ctx.restore();
  }
  colorBg(color: string) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, 1000, 1000);
    this.ctx.restore();
  }

  drawText(text: string, coordinates: Coordinates, options?: TextOptions) {
    this.ctx.save();
    this.ctx.font = options.font;
    this.ctx.fillStyle = options.color;
    this.ctx.textAlign = options.textAlign;
    if (options.maxCharsPerLine > text.length) {
      drawTextWithMaxChars(
        this.ctx,
        text,
        options.maxCharsPerLine,
        coordinates
      );
    }
    this.ctx.fillText(text, coordinates.x, coordinates.y);
    this.ctx.restore();
  }

  async drawFixedImage(
    srcUrl: string,
    coordinates: Coordinates,
    dimensions: Dimensions,
    options?: ImageOptions
  ) {
    const img = await loadAndCacheImage(srcUrl, this.IMAGE_CACHE);
    this.ctx.drawImage(
      img,
      coordinates.x,
      coordinates.y,
      dimensions.width,
      dimensions.height
    );
  }

  async drawScalableImage(
    image: DetailedImage,
    defaultDimensions: Dimensions,
    options?: ImageOptions
  ) {
    const { srcUrl, size } = image;

    const img = await loadAndCacheImage(srcUrl, this.IMAGE_CACHE);

    const adjustedDimensions = getScaledWidthAndHeight(
      img,
      defaultDimensions.width * size,
      defaultDimensions.height * size
    );

    const { x, y } = adjustCoordinates(
      image,
      { width: adjustedDimensions.width, height: adjustedDimensions.height },
      options
    );
    this.ctx.drawImage(
      img,
      x,
      y,
      adjustedDimensions.width,
      adjustedDimensions.height
    );
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, 1000, 1000);
  }
  addFilter(filter: CanvasFilters, intensity: number | string) {
    const filterStr = `${filter}(${intensity})`;
    if (this.ctx.filter === "none") {
      this.ctx.filter = filterStr;
    } else {
      this.ctx.filter += filterStr;
    }
  }

  resetFilter() {
    this.ctx.filter = "none";
  }

  async imgBg(url: string) {
    const img = await loadAndCacheImage(url, this.IMAGE_CACHE);
    this.ctx.drawImage(img, 0, 0, 1000, 1000);
  }

  async customDraw(customFn: (ctx: Ctx2d) => Promise<any> | void) {
    await customFn(this.ctx);
  }

  async loadFont(fontName: string, fontUrl: `url(${string})`) {
    if (typeof FontFace === "undefined") return;
    const font = new FontFace(fontName, fontUrl);
    try {
      await font.load();
    } catch (error) {
      throw new Error(error);
    }
    document.fonts.add(font);
  }
}
