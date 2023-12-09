import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="Turn your photos into famous album covers with no photo editing knowledge"
        />
        <meta name="google-adsense-account" content="ca-pub-1954485960736219" />
        <link rel="canonical" href="https://album-coverify.vercel.app" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Album coverify" />
        <meta
          property="og:description"
          content="Turn your photos into famous album covers with no photo editing knowledge"
        />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:url" content="https://album-coverify.vercel.app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1954485960736219"
          crossorigin="anonymous"
        />
      </body>
    </Html>
  );
}
