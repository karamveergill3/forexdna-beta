import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import RoadmapSection from "@/components/RoadmapSection";
import TrustSection from "@/components/TrustSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <RoadmapSection />
        <TrustSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
