import {
  GraduationCap,
  Target,
  MapPin,
  BrainCircuit,
} from "lucide-react";

import Card from "../ui/Card";
import HeroProfileCard from "./HeroProfileCard";
import InfoCard from "../about/InfoCard";

export default function HeroAboutSection() {
  return (
    <Card className="h-full rounded-[32px] p-6 lg:p-8">

      <div className="flex h-full flex-col justify-between">

        {/* Top */}

        <div className="grid items-center gap-8 lg:grid-cols-[170px_1fr]">

          <div className="mx-auto w-full max-w-[160px] lg:mx-0 lg:max-w-[175px]">
            <HeroProfileCard />
          </div>

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3BFF8A]">
              About Me
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
              Hello, I'm Praful 👋
            </h2>

   <p className="mt-5 leading-7 text-slate-400">
  I'm an Electrical & Electronics Engineering graduate passionate
  about Data Analytics, AI and Machine Learning.
  I enjoy building SQL, Python and Power BI solutions that transform
  raw data into actionable business insights while exploring
  AI-powered analytics through real-world projects.
</p>

          </div>

        </div>

        {/* Cards */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

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
            value="Belagavi, Karnataka"
          />

          <InfoCard
            icon={BrainCircuit}
            title="Specialization"
            value="SQL • Python • Machine Learning"
          />

        </div>

      </div>

    </Card>
  );
}