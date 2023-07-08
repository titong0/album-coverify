import React from "react";
import CustomHead from "../../components/General/Landing/CustomHead";
import RemoveBgAlert from "../../components/General/Landing/RemoveBgAlert";
import FlowerBoyEditor from "../../components/Editors/FlowerBoyEditor";

const FlowerBoy = () => {
  return (
    <>
      <CustomHead name="Flower boy" />
      <div className="bg-zinc-300">
        <h2 className="p-12 text-4xl text-center">Flower Boy</h2>
        <RemoveBgAlert />
        <FlowerBoyEditor />
      </div>
    </>
  );
};

export default FlowerBoy;
