import FadeUp from "./ui/FadeUp";
import SectionTitle from "./ui/SectionTitle";
import TechnologyGrid from "./technologies/TechnologyGrid";

export default function CoreTechnologies() {
  return (
    <FadeUp>
      <section
        id="technologies"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">

          <SectionTitle title="Core Technologies" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Modern tools and technologies I use to build data-driven solutions.
          </p>

        </div>

        <TechnologyGrid />

      </section>
    </FadeUp>
  );
}