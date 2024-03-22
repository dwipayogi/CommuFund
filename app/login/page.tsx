import { Input } from "@nextui-org/input";

export default function Login() {
  return (
    <main className="max-w-7xl flex items-center justify-center h-screen m-auto">
      <div className="bg-gray-300 p-20 rounded-xl w-1/2">
        <h1 className="text-4xl font-semibold text-center mb-8">Masuk</h1>
        <p className="text-xl text-center mb-8">Masuk ke dalam akun anda</p>
        <form className="flex flex-col gap-3">
          <Input type="text" label="Masukkan Username" placeholder="Username" labelPlacement="outside"></Input>
          <Input type="password" label="Masukkan Password" placeholder="Password" labelPlacement="outside"></Input>
          <a href="/reset" className="hover:text-sky-500">Lupa Password?</a>
          <button type="submit" className="bg-sky-500 py-4 text-white rounded-lg">Masuk</button>
          <a href="/register" className="hover:text-sky-500 text-center">Belum Memiliki Akun?</a>
        </form>
      </div>
    </main>
  );
}
