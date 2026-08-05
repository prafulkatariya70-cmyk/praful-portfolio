import AboutHeader from "./about/AboutHeader";
import AboutContent from "./about/AboutContent";

export default function About() {
  return (
    <section
      id="about"
     
      className="mx-auto max-w-7xl px-5 pt-10 pb-16 lg:px-8 lg:pt-12 lg:pb-28"
    >
      <AboutHeader />

      <AboutContent />
    </section>
  );
}