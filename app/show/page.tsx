"use client";
import Swal from "sweetalert2";
import axios from "axios";

export default function ShowUsers() {
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    const response = await axios.get("https://commo-fund-db.vercel.app/api/users")
    if (response.status === 200) {
      Toast.fire({
        icon: "success",
        title: "Data berhasil diambil",
        });
    }
    else {
      Toast.fire({
        icon: "error",
        title: "Data gagal diambil",
      });
    }
  };
  return (
    <button
      onClick={handleLogin}
      className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 text-center text-base text-white hover:from-primary-600 hover:to-primary-600"
    >
      Ambil Data
    </button>
  );
}
