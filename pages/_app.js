import NavBar from "../components/General/Landing/NavBar";
import "../index.css";
import "react-image-crop/dist/ReactCrop.css";
import { useRouter } from "next/router";
// const NO_AD_ROUTES = ["/contact", "/credits", "/"];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1954485960736219"
        crossorigin="anonymous"
      ></script>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
