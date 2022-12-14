import CustomHead from "../components/General/Landing/CustomHead";
import SocEditor from "../components/Editors/SocEditor";

const SOC = () => {
  return (
    <>
      <CustomHead name="Straight Outta Compton" url="SOC" />
      <div className="bg-zinc-300">
        <h1 className="p-12 text-4xl text-center">Straight Outta Compton</h1>
        <SocEditor />
      </div>
    </>
  );
};

export default SOC;
