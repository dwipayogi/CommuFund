import CardProject from "../components/ui/projects/Card";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <>
      <main className="m-8 flex max-w-7xl flex-col gap-12 xl:m-auto xl:my-24">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </main>
      <Footer />
    </>
  );
}
