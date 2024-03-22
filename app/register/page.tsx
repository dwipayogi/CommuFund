import { Input } from "@nextui-org/input";

export default function Register() {
  return (
    <main className="max-w-7xl flex items-center justify-center h-screen m-auto">
      <div className="bg-gray-300 p-20 rounded-xl w-1/2">
        <h1 className="text-4xl font-semibold text-center mb-8">Daftar</h1>
        <p className="text-xl text-center mb-8">Daftar akun baru</p>
        <form className="flex flex-col gap-3">
          <Input type="text" label="Masukkan Nama Lengkap" placeholder="Nama Lengkap" labelPlacement="outside"></Input>
          <Input type="password" label="Masukkan Username" placeholder="Username" labelPlacement="outside"></Input>
          <Input type="password" label="Masukkan Email" placeholder="Email" labelPlacement="outside"></Input>
          <Input type="password" label="Masukkan No. Handphone" placeholder="No. Handphone" labelPlacement="outside"></Input>
          <Input type="password" label="Masukkan Password" placeholder="Password" labelPlacement="outside"></Input>
          <Input type="password" label="Konfirmasi Password" placeholder="Password" labelPlacement="outside"></Input>
          <a href="/login" className="hover:text-sky-500">Sudah memiliki akun?</a>
          <button type="submit" className="bg-sky-500 py-4 text-white rounded-lg">Masuk</button>
        </form>
      </div>
    </main>
  );
}