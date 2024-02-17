import React from "react";
import Link from "next/link";

const navItems = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];
export const Navbar = () => {
  return (
    <nav className="flex bg-white bg-opacity-30 p-2 m-2 rounded ">
      <Link href={"/"}>
        <span className="m-2"> Home ✔</span>
      </Link>
      <div className="flex-1"></div>

      {navItems.map((item) => (
        <Link key={item.path} href={item.path} className="mr-2">
          {item.text}
        </Link>
      ))}
    </nav>
  );
};
