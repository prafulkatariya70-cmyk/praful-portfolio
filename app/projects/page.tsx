import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsPage from "@/components/Projects/ProjectsPage";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#09111D]">
      <Navbar />

      <ProjectsPage />

      <Footer />
    </main>
  );
}