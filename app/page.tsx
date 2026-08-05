import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioOverview from "@/components/PortfolioOverview";
import CoreTechnologies from "@/components/CoreTechnologies";
import Learning from "@/components/Learning";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09111D]">
      <Navbar />

      <Hero />

      <PortfolioOverview />

      <CoreTechnologies />

      <Learning />

      <Footer />
    </main>
  );
}