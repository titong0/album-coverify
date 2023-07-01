import React from "react";

const RemoveBgAlert = () => {
  return (
    <div className="p-3 py-6 text-gray-300 bg-black">
      <h3 className="pb-3 text-xl">
        This cover requires a{" "}
        <span className="text-amber-300">transparent background</span> to look
        properly.
      </h3>
      <p>
        You can remove your background in
        <a href="https://remove.bg" target="_blank">
          {" "}
          <span className="underline text-amber-300">remove.bg</span>{" "}
        </a>
        and then use this site.
      </p>
    </div>
  );
};

export default RemoveBgAlert;
