import Head from "next/head";
type CustomHeadProps = { name: string; url: string };
const CustomHead: React.FC<CustomHeadProps> = ({
  name,
  url = name.toLowerCase(),
}) => {
  return (
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{`${name} album cover generator`}</title>
      <meta
        name="description"
        content={`Turn your photos into a cover like ${name}`}
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content={`https://album-coverify.vercel.app/${url}/`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${name} album cover generator`} />
      <meta
        property="og:description"
        content={`Turn your photos into a cover like ${name}`}
      />
      <meta
        property="og:image"
        content={`https://album-coverify.vercel.app/${url}.png`}
      />

      {/* <!-- Twitter Meta Tags --> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="album-coverify.vercel.app" />
      <meta
        property="twitter:url"
        content={`https://album-coverify.vercel.app/${url}/`}
      />
      <meta name="twitter:title" content={`${name} album cover generator`} />
      <meta
        name="twitter:description"
        content={`Turn your photos into a cover like ${name}`}
      />
      <meta
        name="twitter:image"
        content={`https://album-coverify.vercel.app/${url}.png`}
      />

      {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      <meta
        property="og:image:secure_url"
        content={`https://album-coverify.vercel.app/${url}.png`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={`Custom ${name} cover`} />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
    </Head>
  );
};

export default CustomHead;
