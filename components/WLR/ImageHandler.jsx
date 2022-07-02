const ImageHandler = ({ image }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="image">Your image</label>
      <input
        className="p-2 border cursor-pointer bg-zinc-500 hover:bg-zinc-900 transition text-white border-black"
        name="image"
        type="file"
        accept={"image/*"}
      />
      {image !== null && <img width="200" src={image} />}
    </div>
  );
};

export default ImageHandler;
