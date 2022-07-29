import React from "react";

const TextInputHandler = ({ name, label, defaultValue }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="p-2 bg-black text-white"
        type="text"
        name={name}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default TextInputHandler;
