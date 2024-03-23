"use client";

import Image from "next/image";

import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";

import { useState } from "react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Beranda", "Donasi", "Volunteer", "Tentang Kami"];

  return (
    <nav className={`fixed top-0 w-full bg-primary-300 bg-opacity-20 backdrop-blur-lg`}>
      <div className="flex items-center justify-between px-8 md:px-12 lg:px-20 py-4">
        <div>
          <Image src="/logo.png" alt="Logo" width={120} height={120} />
        </div>
        <div className="hidden items-center md:flex md:gap-4 lg:gap-8">
          {menuItems.map((menuItem, index) => (
            <a
              key={index}
              href={`#${menuItem}`}
              className="text-base hover:text-primary-500 md:text-sm lg:text-base"
            >
              {menuItem}
            </a>
          ))}
          <a
            href="/login"
            className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-base text-white hover:from-primary-600 hover:to-primary-600"
          >
            Masuk
          </a>
        </div>
        <button
          className={`md:hidden ${isMenuOpen ? "border" : ""} rounded-lg border-primary-500`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IconContext.Provider
              value={{ color: "black", className: "w-8 h-8" }}
            >
              <BiX />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ color: "black", className: "w-8 h-8" }}
            >
              <BiMenu />
            </IconContext.Provider>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col gap-12 md:hidden items-center p-4 h-screen">
          {menuItems.map((menuItem, index) => (
            <a key={index} href={`#${menuItem}`} className="text-2xl">
              {menuItem}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
