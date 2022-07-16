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
    <nav className="w-full bg-white py-2 shadow-md z-10 relative">
      <ul className="flex justify-around ">
        {NAV_LINKS.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <span
                className={`${
                  link.path === Router.pathname ? "underline " : ""
                }cursor-pointer hover:underline`}
              >
                {link.display}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
