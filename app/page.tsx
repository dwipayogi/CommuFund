import NavigationBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-center text-[12vw]">
          <span className="font-thin">SMALL</span> SUPPORT{" "}
          <span className="font-extrabold">BIG</span> IMPACT
        </p>
      </main>
      <Footer />
    </>
  );
}
