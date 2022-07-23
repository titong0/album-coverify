import React from "react";
import MbdtfEditor from "../components/MbdtfEditor";
import CustomHead from "../components/General/CustomHead";
const MBDTF = () => {
  return (
    <>
      <CustomHead name="My Beautiful Dark Twisted Fantasy" url="mbdtf" />
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">
          My Beautiful Dark Twisted Fantasy
        </h2>
        <MbdtfEditor />
      </div>
    </>
  );
};

export default MBDTF;
