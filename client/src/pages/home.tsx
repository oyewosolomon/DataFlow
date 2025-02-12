import Nav from "@/components/nav";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Industries from "@/components/sections/industries";
import Stats from "@/components/sections/stats";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Industries />
        <Contact />
      </main>
    </div>
  );
}
