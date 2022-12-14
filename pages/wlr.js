import WlrEditor from "../components/Editors/WlrEditor";
import CustomHead from "../components/General/Landing/CustomHead";
import RemoveBgAlert from "../components/General/Landing/RemoveBgAlert";

const Wlr = () => {
  return (
    <>
      <CustomHead name="Whole lotta red" url="wlr" />
      <div className="bg-zinc-300">
        <h2 className="p-12 text-4xl text-center">Whole Lotta Red</h2>
        <RemoveBgAlert />
        <WlrEditor />
      </div>
    </>
  );
};

export default Wlr;
