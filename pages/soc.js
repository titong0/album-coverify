import CustomHead from "../components/General/CustomHead";
import SocEditor from "../components/SocEditor";

const SOC = () => {
  return (
    <>
      <CustomHead name="Straight Outta Compton" url="SOC" />
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">Straight Outta Compton</h2>
        <SocEditor />
      </div>
    </>
  );
};

export default SOC;
