import Link from "next/link"

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-7xl text-center font-extrabold">Dashboard</h1>
    <Link href="/dashboard/add" className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-600 px-4 py-2 text-lg text-white hover:from-primary-600 hover:to-primary-600">Add</Link>
    </main>

  )
}