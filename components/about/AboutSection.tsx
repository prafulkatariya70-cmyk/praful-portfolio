import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";

export default function AboutSection() {
  return (
    <section className="mx-auto mt-40 max-w-7xl px-8">
      <AboutHeader />

      <AboutContent />
    </section>
  );
}