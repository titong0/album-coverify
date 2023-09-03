import NavBar from "../components/General/Landing/NavBar";
import "../index.css";
import "react-image-crop/dist/ReactCrop.css";
import { useRouter } from "next/router";
// const NO_AD_ROUTES = ["/contact", "/credits", "/"];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
