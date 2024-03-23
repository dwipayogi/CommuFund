import { sql } from "@vercel/postgres";

import NavigationBar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";

export default async function AdminPage() {
  const { rows } = await sql`SELECT * from users`;

  return (
    <>
      <NavigationBar />
      <main className="mt-24 px-20">
        <table className="w-full">
          <thead >
            <tr className="bg-primary-500 text-white text-xl"> 
              <th className="py-2 border-2 border-primary-800">id</th>
              <th className="py-2 border-2 border-primary-800">username</th>
              <th className="py-2 border-2 border-primary-800">name</th>
              <th className="py-2 border-2 border-primary-800">number phone</th>
              <th className="py-2 border-2 border-primary-800">email</th>
              <th className="py-2 border-2 border-primary-800">password</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="border-2 text-center py-1 border-primary-500">{row.id}</td>
                <td className="border-2 text-center py-1 border-primary-500">{row.username}</td>
                <td className="border-2 text-center py-1 border-primary-500">{row.name}</td>
                <td className="border-2 text-center py-1 border-primary-500">{row.number}</td>
                <td className="border-2 text-center py-1 border-primary-500">{row.email}</td>
                <td className="border-2 text-center py-1 border-primary-500">{row.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
            className="px-4 my-2 rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500  py-2 text-base hover:text-white"
          >
            Tambah Data
          </button>
      </main>
      <Footer />
    </>
  );
}
