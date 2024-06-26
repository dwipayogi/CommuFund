import RegisterForm from "@/app/components/ui/register/registerForm";

export default function Register() {
  return (
    <main className="m-auto flex h-screen max-w-7xl items-center justify-center">
      <div className="w-5/6 rounded-xl bg-gray-300 p-12 md:w-8/12 lg:w-1/2 lg:p-20">
        <h1 className="mb-2 text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-8 lg:text-4xl">
          Daftar
        </h1>
        <p className="mb-8 text-center text-base md:text-lg lg:text-xl">
          Daftar akun baru
        </p>
        <RegisterForm />
      </div>
    </main>
  );
}
