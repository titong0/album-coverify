import React from "react";
import TlopEditor from "../../components/Editors/TlopEditor";
import CustomHead from "../../components/General/Landing/CustomHead";
const TLOP = () => {
  return (
    <>
      <CustomHead name="The life of pablo" url="tlop" />
      <div className="bg-zinc-300">
        <h1 className="p-12 text-4xl text-center">The Life Of Pablo</h1>
        <TlopEditor />
      </div>
    </>
  );
};

export default TLOP;
