import NavigationBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Cards from "@/app/components/Cards";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="m-[10%] max-w-7xl xl:m-auto">
        <section className="flex min-h-screen items-center justify-center -mt-20 pt-20" id="Beranda">
          <p className="text-center text-[10vw] xl:text-[170px]">
            <span className="font-thin">SMALL</span> SUPPORT{" "}
            <span className="font-extrabold">BIG</span> IMPACT
          </p>
        </section>
        <section id="Donasi" className="pt-20">
          <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
            Donasi
          </h2>
          <div className="flex w-full justify-end">
            <select
              id="cars"
              name="cars"
              className="mb-2 flex cursor-pointer rounded-lg border-4 border-primary-500 bg-primary-50 p-2 text-lg font-semibold text-primary-500 outline-none"
            >
              <option value="kategori" className="hidden">
                Kategori
              </option>
              <option value="bencana">Bencana</option>
              <option value="infrastruktur">Infrastruktur</option>
              <option value="kesehatan">Kesehatan</option>
            </select>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Cards status="donasi" />
            <Cards status="donasi" />
            <Cards status="donasi" />
            <Cards status="donasi" />
            <Cards status="donasi" />
            <Cards status="donasi" />
            <Cards status="donasi" />
            <Cards status="donasi" />
          </div>
        </section>
        <section className="pt-20" id="Volunteer">
          <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
            Volunteer
          </h2>
          <div className="flex w-full justify-end">
            <select
              id="cars"
              name="cars"
              className="mb-2 cursor-pointer rounded-lg border-4 border-primary-500 bg-primary-50 p-2 text-lg font-semibold text-primary-500 outline-none"
            >
              <option value="kategori" className="hidden">
                Kategori
              </option>
              <option value="bencana">Bencana</option>
              <option value="infrastruktur">Infrastruktur</option>
              <option value="kesehatan">Kesehatan</option>
            </select>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Cards status="volunteer" />
            <Cards status="volunteer" />
            <Cards status="volunteer" />
            <Cards status="volunteer" />
            <Cards status="volunteer" />
            <Cards status="volunteer" />
            <Cards status="volunteer" />
            <Cards status="volunteer" />
          </div>
        </section>
        <section className="pt-20" id="Donasi & Volunteer">
          <h2 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
            Donasi & Volunteer
          </h2>
          <div className="flex w-full justify-end">
            <select
              id="cars"
              name="cars"
              className="mb-2 cursor-pointer rounded-lg border-4 border-primary-500 bg-primary-50 p-2 text-lg font-semibold text-primary-500 outline-none"
            >
              <option value="kategori" className="hidden">
                Kategori
              </option>
              <option value="bencana">Bencana</option>
              <option value="infrastruktur">Infrastruktur</option>
              <option value="kesehatan">Kesehatan</option>
            </select>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Cards status="two" />
            <Cards status="two" />
            <Cards status="two" />
            <Cards status="two" />
            <Cards status="two" />
            <Cards status="two" />
            <Cards status="two" />
            <Cards status="two" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
