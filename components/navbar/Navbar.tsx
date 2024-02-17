import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex bg-white bg-opacity-30 p-2 m-2 rounded ">
      <span className="m-2"> Home</span>
      <div className="flex-1"></div>
      <Link className="m-2" href="/about">
        Aboout
      </Link>
      <Link className="m-2" href="/pricing">
        Pricing
      </Link>
      <Link className="m-2" href="/contact">
        Contact
      </Link>
    </nav>
  );
};
