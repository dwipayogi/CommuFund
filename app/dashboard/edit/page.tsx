export default function EditPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
    <div className="flex flex-col items-center rounded-xl bg-gray-300 p-4 lg:p-20">
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
    </div>
  </main>
  )
}
