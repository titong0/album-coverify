import { useState } from "react";

const ImageHandler = ({ image, setImageLoaded }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="image">Your image</label>
      <input
        name="image"
        type="file"
        accept={"image/*"}
        onChange={() => setImageLoaded(false)}
      />
      {image !== null && <img width="200" src={image} />}
    </div>
  );
};

export default ImageHandler;
