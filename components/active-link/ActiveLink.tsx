"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: props) => {
  const pathName = usePathname();
  return (
    <Link
      key={path}
      href={path}
      className={`mr-2 ${pathName === path ? "text-sky-400/100" : ""}`}
    >
      {text}
    </Link>
  );
};
