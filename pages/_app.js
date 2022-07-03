import NavBar from "../components/NavBar";
import "../index.css";

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
