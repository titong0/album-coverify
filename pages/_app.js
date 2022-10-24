import NavBar from "../components/General/NavBar";
import "../index.css";
import "react-image-crop/dist/ReactCrop.css";
import { useRouter } from "next/router";
import Head from "next/head";
const NO_AD_ROUTES = ["/contact", "/credits", "/"];

function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  return (
    <>
      <Head>
        {NO_AD_ROUTES.includes(Router.asPath) ? (
          console.log("NO ADS HERE")
        ) : (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
            crossOrigin="anonymous"
          />
        )}
      </Head>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
