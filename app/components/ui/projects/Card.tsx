import Image from "next/image";
import logo from "@/public/logo.png";
import { Progress } from "@nextui-org/progress";

export default function CardProject() {
  return (
    <div className="flex w-full items-center bg-gray-100 p-12 gap-8">
      <Image src={logo} alt="image" className="aspect-square" />
      <div className="w-full">
        <h1 className="font-bold text-2xl">Nama Proyek</h1>
        <p className="text-xl">Deskripsi Proyek</p>
        <p className="font-bold text-lg mt-2">Dana Terkumpul</p>
        <p className="font-bold text-base">Dari Total Dana</p>
        <Progress aria-label="Loading..." value={70}/>
        <p className="font-bold text-lg mt-2">Volunteer Terkumpul</p>
        <p className="font-bold text-base">Dari Total Volunteer</p>
        <Progress aria-label="Loading..." value={70}/>
        <p className="font-bold text-base">Sisa hari</p>
        <button
          type="submit"
          className="flex w-full  items-center justify-center rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 p-2 text-center text-base text-white hover:from-primary-600 hover:to-primary-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
