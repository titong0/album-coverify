export type Ctx2d = CanvasRenderingContext2D;
export type CanvColor = CanvasFillStrokeStyles["fillStyle"];
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type stateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
export type Coordinates = { x?: number; y?: number };
export type Dimensions = { width: number; height: number };
export type DetailedImage = {
  srcUrl: string;
  coordinates?: Coordinates;
  opacity?: number;
  size?: number;
};
export type TextOptions = {
  color: CanvColor;
  font: `${string} ${number}px `;
};
export type ChangeOneProp<ObjType> = <
  T extends keyof ObjType, // <- T points to a key
  R extends ObjType[T] // <- R points to the type of that key
>(
  key: T,
  value: R
) => any;
