import NavBar from "../components/General/NavBar";
import "../index.css";
import "react-image-crop/dist/ReactCrop.css";
import { useRouter } from "next/router";

const NO_AD_ROUTES = ["/contact", "/credits"];

function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      {NO_AD_ROUTES.includes(Router.asPath) ? null : (
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1954485960736219"
          crossOrigin="anonymous"
        ></script>
      )}
    </>
  );
}

export default MyApp;
