import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ExperiencePage from "@/components/experience/ExperiencePage";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#09111D]">
      <Navbar />

      <ExperiencePage />

      <Footer />
    </main>
  );
}