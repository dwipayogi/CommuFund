"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

import { Input } from "@nextui-org/input";
import { EyeFilledIcon } from "@/app/login/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/login/EyeSlashFilledIcon";

interface IFormInput {
  username: any
  password: any
}

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
  } = useForm<IFormInput>();

  function onSubmit(data: IFormInput) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    })
    router.push("/");
  }

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="m-auto flex h-screen max-w-7xl items-center justify-center">
      <div className="w-5/6 rounded-xl bg-gray-300 p-12 md:w-8/12 lg:w-1/2 lg:p-20">
        <h1 className="mb-2 text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-8 lg:text-4xl">
          Masuk
        </h1>
        <p className="mb-8 text-center text-base md:text-lg lg:text-xl">
          Masuk ke dalam akun anda
        </p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Masukkan Username"
            placeholder="Username"
            labelPlacement="outside"
            isRequired
            {...register("username")}
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
          <a href="/reset" className="text-sm hover:text-primary-600 lg:text-base">
            Lupa Password?
          </a>
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-600 hover:to-primary-600 py-2 text-base text-white lg:py-4"
          >
            Masuk
          </button>
          <a
            href="/register"
            className="text-center text-sm hover:text-primary-600 lg:text-base"
          >
            Belum Memiliki Akun?
          </a>
        </form>
      </div>
    </main>
  );
}