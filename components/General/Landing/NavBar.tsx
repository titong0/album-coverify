import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NAV_LINKS = [
  { display: "Home", path: "/" },
  { display: "Contact", path: "/contact" },
  { display: "Credits", path: "/credits" },
];

const NavBar = () => {
  const Router = useRouter();

  return (
    <nav className="relative z-10 w-full bg-white shadow-md">
      <ul className="flex justify-around p-5">
        {NAV_LINKS.map((link, index) => (
          <li key={link.path}>
            <Link href={link.path} passHref>
              <a
                tabIndex={index + 1}
                className={`${
                  link.path === Router.pathname ? "underline" : ""
                } cursor-pointer hover:underline text-lg p-5`}
              >
                {link.display}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
