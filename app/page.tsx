import NavigationBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Cards from "@/app/components/Cards";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="max-w-7xl m-[10%] xl:m-auto">
        <section className="flex min-h-screen items-center justify-center">
          <p className="text-center text-[10vw] xl:text-[170px]">
            <span className="font-thin">SMALL</span> SUPPORT{" "}
            <span className="font-extrabold">BIG</span> IMPACT
          </p>
        </section>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </section>
      </main>

      <Footer />
    </>
  );
}
