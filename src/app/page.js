import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StrategySection from "@/components/StrategySection";
import ProofSection from "@/components/ProofSection";
import InnovationSection from "@/components/InnovationSection";
import CalculatorSection from "@/components/CalculatorSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { DepositProvider } from "@/components/DepositContext";

export default function Home() {
  return (
    <DepositProvider>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StrategySection />
        <ProofSection />
        <InnovationSection />
        <CalculatorSection />
        <FinalCta />
      </main>
      <Footer />
    </DepositProvider>
  );
}
