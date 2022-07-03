import NavLinks from "../components/NavLinks";
import "../index.css";

const NAV_LINKS = [
  { display: "Home", path: "/" },
  { display: "TLOP", path: "/tlop" },
  { display: "WLR", path: "/wlr" },
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="w-full bg-white py-2 shadow-md z-10 relative">
        <NavLinks NAV_LINKS={NAV_LINKS} />
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
