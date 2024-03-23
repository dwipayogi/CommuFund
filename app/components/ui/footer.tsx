"use client";

import Image from "next/image";

import { IconContext } from "react-icons";
import { BiPhone, BiMailSend } from "react-icons/bi";

export default function Footer() {
  const menuItems = ["Beranda", "Donasi", "Volunteer", "Tentang Kami"];

  return (
    <footer className="bg-primary-100 flex flex-col lg:flex-row gap-8 lg:justify-evenly p-8">
      <div className="basis-1/4">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
        <p>
          CommuFund adalah sebuah platform untuk penggalangan dana dan pencarian
          relawan bagi organisasi nirlaba
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Menu</h2>
        {menuItems.map((menuItem, index) => (
          <a key={index} href={`#${menuItem}`}>
            {menuItem}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">Kontak</h2>
        <p>Hubungi kami melalui:</p>
        <div className="flex items-center gap-2">
          <IconContext.Provider value={{ className: "w-8 h-8" }}>
            <BiMailSend />commu.fund@commufund.com
          </IconContext.Provider>
        </div>
        <div className="flex items-center gap-2">
        <IconContext.Provider value={{ className: "w-8 h-8" }}>
            <BiPhone />0812 1094 3940
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
}
