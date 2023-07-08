import CmyiglEditor from "../../components/Editors/CmyiglEditor";
import CustomHead from "../../components/General/Landing/CustomHead";
import RemoveBgAlert from "../../components/General/Landing/RemoveBgAlert";

const IGOR = () => {
  return (
    <>
      <CustomHead name="Call Me If You Get Lost" url="cmyigl" />
      <div className="bg-zinc-300">
        <h2 className="p-12 text-4xl text-center">CALL ME IF YOU GET LOST</h2>
        <RemoveBgAlert />
        <CmyiglEditor />
      </div>
    </>
  );
};

export default IGOR;
