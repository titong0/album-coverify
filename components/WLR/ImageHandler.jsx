import ReactCrop from "react-image-crop/";
import React, { useState, useRef, useEffect } from "react";
import { asyncBlob, canvasPreview } from "../utils";

const ImageHandler = ({ image, setImage }) => {
  const [crop, setCrop] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const croppedRef = useRef(null);
  const srcRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("/assets/WLR_DEFAULT.png");

  const updateImg = (e) => {
    if (!e.target.files[0]) return;
    const img = URL.createObjectURL(e.target.files[0]);
    setImage(img);
    setImageSrc(img);
  };

  const cancelCrop = (e) => {
    e.preventDefault();
    setCompletedCrop(null);
    setCrop(null);
  };
  const cropImg = async (e) => {
    e.preventDefault();
    if (completedCrop.width === 0) return;
    canvasPreview(srcRef.current, croppedRef.current, completedCrop);
    const blob = await asyncBlob(croppedRef.current);
    await setImage(URL.createObjectURL(blob));
    setCompletedCrop(null);
    setCrop(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        <label htmlFor="image">Your image</label>
        <div className="bg-zinc-500 hover:bg-zinc-900 transition text-white w-fit ">
          <input
            className="w-full cursor-pointer"
            name="image"
            type="file"
            accept={"image/*"}
            onChange={updateImg}
          />
        </div>
      </div>
      <p className="bg-gray-200 p-2 w-fit rounded-md">
        Click and hold the image to crop it
      </p>
      <div className="w-fit">
        <ReactCrop
          aspect={640 / 850}
          crop={crop}
          onComplete={(c) => setCompletedCrop(c)}
          onChange={(c) => {
            setCrop(c);
          }}
        >
          <img width="200" className="hidden" ref={srcRef} src={imageSrc} />
        </ReactCrop>
        {completedCrop && (
          <div className="flex gap-4 p-2 bg-gray-100">
            <button className="border border-black p-2" onClick={cancelCrop}>
              Cancel
            </button>
            <button
              className="bg-red-700 text-white p-2 w-full"
              onClick={cropImg}
            >
              Crop
            </button>
          </div>
        )}
        <canvas className="hidden" ref={croppedRef}></canvas>
      </div>
    </div>
  );
};

export default ImageHandler;
