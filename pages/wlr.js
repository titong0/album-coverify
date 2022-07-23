import WlrEditor from "../components/WlrEditor";
import CustomHead from "../components/General/CustomHead";

const Wlr = () => {
  return (
    <>
      <CustomHead name="Whole lotta red" url="wlr" />
      <div className="bg-zinc-200">
        <h2 className="p-12 text-4xl text-center">Whole Lotta Red</h2>
        <WlrEditor />
      </div>
    </>
  );
};

export default Wlr;
