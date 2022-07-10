import IgorEditor from "../components/IgorEditor";
import Head from "next/head";
const IGOR = () => {
  return (
    <>
      <Head>
        <title>IGOR generator</title>
      </Head>
      <div>
        <IgorEditor />
      </div>
    </>
  );
};

export default IGOR;
