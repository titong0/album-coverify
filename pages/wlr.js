import WlrEditor from "../components/WlrEditor";
import Head from "next/head";
const Wlr = () => {
  return (
    <>
      <Head>
        <title>Whole lotta red generator</title>
        {/* <!-- HTML Meta Tags --> */}
        <meta
          name="description"
          content="Turn your photos into a cover like Whole lotta red"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/tlop/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Whole lotta red album cover generator"
        />
        <meta
          property="og:description"
          content="Turn your photos into a cover like Whole lotta red"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/WLR.png"
        />

        {/* <!-- Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="album-coverify.vercel.app" />
        <meta
          property="twitter:url"
          content="https://album-coverify.vercel.app/tlop/"
        />
        <meta
          name="twitter:title"
          content="Whole lotta red album cover generator"
        />
        <meta
          name="twitter:description"
          content="Turn your photos into a cover like Whole lotta red"
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/WLR.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content="https://album-coverify.vercel.app/WLR.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Custom WLR cover" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
      </Head>
      <div>
        <WlrEditor />
      </div>
    </>
  );
};

export default Wlr;
