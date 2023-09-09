import NavBar from "../components/General/Landing/NavBar";
import "../index.css";
import "react-image-crop/dist/ReactCrop.css";
import { useRouter } from "next/router";
import Script from "next/script";

const NO_AD_ROUTES = ["/contact", "/credits", "/"];

function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  const shouldIncludeAds = !NO_AD_ROUTES.includes(Router.asPath);
  return (
    <>
      {shouldIncludeAds && (
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1954485960736219"
          crossOrigin="anonymous"
        ></Script>
      )}
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
