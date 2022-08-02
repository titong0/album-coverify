import Head from "next/head";
import AlbumCardsDisplay from "../components/General/AlbumCardsDisplay";
const Index = () => {
  return (
    <>
      <Head>
        <title>Album coverify</title>
        <meta
          name="description"
          content="Automatically turn your photos into popular album covers. "
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://album-coverify.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="album cover generator" />
        <meta
          property="og:description"
          content="Automatically turn your photos into popular album covers. "
        />{" "}
        <meta
          property="og:image"
          content="Photo of the landing page showcasing the different album covers"
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="album-coverify.vercel.app" />
        <meta
          property="twitter:url"
          content="https://album-coverify.vercel.app/"
        />
        <meta name="twitter:title" content="Album coverify" />
        <meta
          name="twitter:description"
          content="Automatically turn your photos into popular album covers. "
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/LANDING.png"
        />
        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content={`https://album-coverify.vercel.app/LANDING.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Different album covers" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
      </Head>
      <div className="py-2 min-h-screen w-full landing-bg">
        <header className="p-3 py-4 sm:pl-12">
          <h1 className="text-3xl">
            Easily turn your images into album covers
          </h1>
          <h3>No photo editing knowledge required</h3>
        </header>
        <AlbumCardsDisplay />
      </div>
    </>
  );
};

export default Index;
