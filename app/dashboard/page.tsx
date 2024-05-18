import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center rounded-xl bg-gray-300 p-4 lg:p-20">
        <Image alt="images" src={logo} className="aspect-square rounded-xl" />
        <h1 className="mb-2 text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-8 lg:text-4xl">
          Nama Pengguna
        </h1>
        <h2 className="mb-8 text-center text-base md:text-lg lg:text-xl">
          Rincian akun pengguna
        </h2>
        <div className="grid grid-cols-2">
          <p className="mb-2 text-lg">Nama Lengkap :
          </p>
          <p className="mb-2 text-lg">CommuFund</p>
          <p className="mb-2 text-lg">Nomor Telepon :
          </p>
          <p className="mb-2 text-lg">08123456789
          </p>
          <p className="mb-2 text-lg">Email :
          </p>
          <p className="mb-2 text-lg">commufund@gmail.com
          </p>
          <p className="mb-2 text-lg">Username :
          </p>
          <p className="mb-2 text-lg">commufund
          </p>
          <p className="mb-2 text-lg">Password :
          </p>
          <p className="mb-2 text-lg">teet
          </p>
        </div>
        <div className="flex gap-2 pt-8">
          <Link
            href="/dashboard/edit"
            className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-lg text-white hover:from-primary-600 hover:to-primary-600"
          >
            Edit data akun
          </Link>
          <button className="rounded-lg bg-gradient-to-r from-secondary-50 to-secondary-100 px-4 py-2 text-lg text-white hover:from-secondary-100 hover:to-secondary-100">
            Hapus Akun
          </button>
        </div>
      </div>
    </main>
  );
}
