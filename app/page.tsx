import NavigationBar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-[12vw] text-center"><span className="font-thin">SMALL</span> SUPPORT <span className="font-extrabold">BIG</span> IMPACT</p>
      </main>
      <Footer />
    </>
  );
}
