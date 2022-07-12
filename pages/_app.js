import NavBar from "../components/General/NavBar";
import "../index.css";
import "react-image-crop/dist/ReactCrop.css";

const NAV_LINKS = [
  { display: "Home", path: "/" },
  { display: "Contact", path: "/contact" },
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar NAV_LINKS={NAV_LINKS} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
