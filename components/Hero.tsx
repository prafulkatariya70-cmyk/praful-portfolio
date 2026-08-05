import LeftPanel from "./hero/LeftPanel";
import HeroAboutSection from "./hero/HeroAboutSection";
import FadeUp from "./ui/FadeUp";

export default function Hero() {
  return (
    <FadeUp>
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-2">

          <LeftPanel />

          <HeroAboutSection />

        </div>
      </section>
    </FadeUp>
  );
}