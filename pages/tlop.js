import React, { useEffect, useState } from "react";
import Head from "next/head";
import TlopEditor from "../components/TlopEditor";
const TLOP = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>The life of pablo album cover generator</title>
        <meta
          name="description"
          content="Turn your photos into a cover like the life of pablo"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://album-coverify.vercel.app/tlop/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The life of pablo album cover generator"
        />
        <meta
          property="og:description"
          content="Turn your photos into a cover like the life of pablo"
        />
        <meta
          property="og:image"
          content="https://album-coverify.vercel.app/TLOP.png"
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
          content="The life of pablo album cover generator"
        />
        <meta
          name="twitter:description"
          content="Turn your photos into a cover like the life of pablo"
        />
        <meta
          name="twitter:image"
          content="https://album-coverify.vercel.app/TLOP.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://album-coverify.vercel.app/TLOP.png"
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Custom TLOP cover" />
        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </Head>

      <div>
        <h2 className="p-2 pb-0 text-xl">THE LIFE OF PABLO</h2>
        <TlopEditor />
      </div>
    </>
  );
};

export default TLOP;
