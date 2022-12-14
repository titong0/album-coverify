import React from "react";
import MbdtfEditor from "../components/Editors/MbdtfEditor";
import CustomHead from "../components/General/Landing/CustomHead";
const MBDTF = () => {
  return (
    <>
      <CustomHead name="My Beautiful Dark Twisted Fantasy" url="mbdtf" />
      <div className="bg-zinc-300">
        <h1 className="p-12 text-4xl text-center">
          My Beautiful Dark Twisted Fantasy
        </h1>
        <MbdtfEditor />
      </div>
    </>
  );
};

export default MBDTF;
