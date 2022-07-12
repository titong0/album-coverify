import Head from "next/head";
import AlbumCardsDisplay from "../components/General/AlbumCardsDisplay";
const Index = () => {
  return (
    <>
      <Head>
        <title>Album coverify</title>
      </Head>
      <div className=" py-2 min-h-screen w-full landing-bg">
        <header className="p-3">
          <h1 className="text-3xl">Easily turn your image into album covers</h1>
          <h3>No photo editing knowledge required</h3>
        </header>
        <AlbumCardsDisplay />
      </div>
    </>
  );
};

export default Index;
