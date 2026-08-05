import ExperienceCard from "./ExperienceCard";
import ExperienceHeader from "./ExperienceHeader";
import ImpactCard from "./ImpactCard";
import ResponsibilitiesCard from "./ResponsibilitiesCard";
import TechStackCard from "./TechStackCard";

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">

      <ExperienceHeader />

      {/* Main Experience Card */}

      <div className="mt-10 lg:mt-16">
        <ExperienceCard />
      </div>

      {/* Responsibilities + Tech Stack */}

      <div className="mt-6 grid gap-6 lg:mt-8 lg:gap-8 lg:grid-cols-2">
        <ResponsibilitiesCard />
        <TechStackCard />
      </div>

      {/* Impact Highlights */}

      <div className="mt-6 lg:mt-8">
        <ImpactCard />
      </div>

    </section>
  );
}