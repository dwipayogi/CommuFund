"use client";

import Link from "next/link";

import { useState } from "react";
import Swal from "sweetalert2";

import { Input } from "@nextui-org/input";
import { EyeFilledIcon } from "@/app/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/components/EyeSlashFilledIcon";

export default function EditForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    if (password !== retypePassword) {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: "Password tidak sama!",
      });
      return;
    }
    const response = await fetch("https://commu-fundv2.vercel.app/postRegis");
    if (!response.ok) {
      setIsLoading(false);
      Toast.fire({
        icon: "error",
        title: "Gagal mendaftar",
      });
      return;
    }
    setIsLoading(false);
    Toast.fire({
      icon: "success",
      title: "Berhasil mendaftar",
    });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleRegister}>
      <Input
        type="text"
        label="Masukkan Nama Lengkap"
        placeholder="Nama Lengkap"
        labelPlacement="outside"
        isRequired
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        type="text"
        label="Masukkan Username"
        placeholder="Username"
        labelPlacement="outside"
        isRequired
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <Input
        type="email"
        label="Masukkan Email"
        placeholder="Email"
        labelPlacement="outside"
        isRequired
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        type="number"
        label="Masukkan No. Handphone"
        placeholder="No. Handphone"
        labelPlacement="outside"
        isRequired
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></Input>
      <Input
        type={isVisible ? "text" : "password"}
        label="Masukkan Password"
        placeholder="Password"
        labelPlacement="outside"
        isRequired
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
            ) : (
              <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
            )}
          </button>
        }
      ></Input>
      <Input
        type={isVisible ? "text" : "password"}
        label="Konfirmasi Password"
        placeholder="Password"
        labelPlacement="outside"
        isRequired
        value={retypePassword}
        onChange={(e) => setRetypePassword(e.target.value)}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
            ) : (
              <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
            )}
          </button>
        }
      ></Input>
      <Link
        href="/login"
        className="text-sm hover:text-primary-600 lg:text-base"
      >
        Sudah memiliki akun?
      </Link>
      <button
        type="submit"
        className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 py-2 text-base text-white hover:from-primary-600 hover:to-primary-600 lg:py-4"
        //
      >
        {isLoading ? "Loading..." : "Daftar"}
      </button>
    </form>
  );
}
