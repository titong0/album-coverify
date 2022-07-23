import React from "react";
import TlopEditor from "../components/TlopEditor";
import CustomHead from "../components/General/CustomHead";
const TLOP = () => {
  return (
    <>
      <CustomHead name="The life of pablo" url="tlop" />
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">The Life Of Pablo</h2>
        <TlopEditor />
      </div>
    </>
  );
};

export default TLOP;
