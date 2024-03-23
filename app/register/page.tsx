"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

import { Input } from "@nextui-org/input";
import { EyeFilledIcon } from "@/app/login/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/login/EyeSlashFilledIcon";

interface IFormInput {
  name: string;
  username: any;
  email: any;
  phone: number;
  password: any;
  confirmPassword: any;
}

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  function onSubmit(data: IFormInput) {
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        title: "Terjadi Kesalahan!",
        icon: "error",
        text: "Password tidak sama!",
        showCloseButton: true,
        cancelButtonText: "Tutup",
      });
      return;
    } else {
      Swal.fire({
        title: "Berhasil!",
        text: "Akun berhasil dibuat!",
        icon: "success",
      }).then(() => {
        router.push("/login");
      });
    }
  }
  console.log(errors);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="m-auto flex h-screen max-w-7xl items-center justify-center">
      <div className="w-5/6 rounded-xl bg-gray-300 p-12 md:w-8/12 lg:w-1/2 lg:p-20">
        <h1 className="mb-2 text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-8 lg:text-4xl">
          Daftar
        </h1>
        <p className="mb-8 text-center text-base md:text-lg lg:text-xl">
          Daftar akun baru
        </p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Masukkan Nama Lengkap"
            placeholder="Nama Lengkap"
            labelPlacement="outside"
            isRequired
            {...register("name")}
          ></Input>
          <Input
            type="text"
            label="Masukkan Username"
            placeholder="Username"
            labelPlacement="outside"
            isRequired
            {...register("username")}
          ></Input>
          <Input
            type="email"
            label="Masukkan Email"
            placeholder="Email"
            labelPlacement="outside"
            isRequired
            {...register("email")}
          ></Input>
          <Input
            type="number"
            label="Masukkan No. Handphone"
            placeholder="No. Handphone"
            labelPlacement="outside"
            isRequired
            {...register("phone")}
          ></Input>
          <Input
            type={isVisible ? "text" : "password"}
            label="Masukkan Password"
            placeholder="Password"
            labelPlacement="outside"
            isRequired
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
            {...register("password")}
          ></Input>
          <Input
            type={isVisible ? "text" : "password"}
            label="Konfirmasi Password"
            placeholder="Password"
            labelPlacement="outside"
            isRequired
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
            {...register("confirmPassword")}
          ></Input>
          <a
            href="/login"
            className="text-sm hover:text-primary-600 lg:text-base"
          >
            Sudah memiliki akun?
          </a>
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 py-2 text-base text-white hover:from-primary-600 hover:to-primary-600 lg:py-4"
          >
            Daftar
          </button>
        </form>
      </div>
    </main>
  );
}
