import {
  GraduationCap,
  Target,
  MapPin,
  BrainCircuit,
} from "lucide-react";

import ProfileCard from "./ProfileCard";
import InfoCard from "./InfoCard";

export default function AboutContent() {
  return (
    <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:gap-16 lg:grid-cols-[440px_1fr]">

      {/* Left Side */}

      <ProfileCard />

      {/* Right Side */}

      <div className="text-center lg:text-left">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3BFF8A] lg:text-sm">
          Hello, I'm Prafful 👋
        </span>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-white lg:text-4xl">
          Transforming data into meaningful
          <br className="hidden lg:block" />
          business decisions.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 lg:mx-0 lg:mt-6 lg:text-lg lg:leading-8">
          I'm an Electrical & Electronics Engineering graduate passionate about
          Data Analytics and Machine Learning. I enjoy building SQL, Python and
          Power BI solutions that transform raw data into actionable business
          insights while continuously expanding my expertise through real-world
          projects.
        </p>

        {/* Information Cards */}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-5">

          <InfoCard
            icon={GraduationCap}
            title="Education"
            value="B.E. Electrical & Electronics Engineering"
          />

          <InfoCard
            icon={Target}
            title="Career Goal"
            value="Data Scientist"
          />

          <InfoCard
            icon={MapPin}
            title="Location"
            value="Belgaum, Karnataka"
          />

          <InfoCard
            icon={BrainCircuit}
            title="Specialization"
            value="SQL • Python • Machine Learning"
          />

        </div>

      </div>

    </div>
  );
}