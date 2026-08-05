import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ContactPage from "@/components/contact/ContactPage";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#09111D]">
      <Navbar />

      <ContactPage />

      <Footer />
    </main>
  );
}