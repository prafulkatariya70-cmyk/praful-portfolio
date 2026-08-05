import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
} from "lucide-react";

import Card from "../ui/Card";

export default function ExperienceCard() {
  return (
    <Card className="rounded-[32px] p-5 lg:p-10">

      {/* Top */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        <div>

          <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300 lg:px-4 lg:py-1.5 lg:text-xs">
            Internship
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white lg:mt-6 lg:text-4xl">
            Data Analyst Intern
          </h2>

          <p className="mt-3 flex items-center gap-2 text-lg font-medium text-slate-300 lg:text-xl">
            <Building2
              size={18}
              className="lg:h-5 lg:w-5"
            />
            EduTainer
          </p>

        </div>

        <div className="space-y-3 lg:space-y-4">

          <div className="flex items-center gap-3 text-sm text-slate-400 lg:text-base">
            <MapPin
              size={16}
              className="lg:h-[18px] lg:w-[18px]"
            />
            Bangalore, India
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400 lg:text-base">
            <Calendar
              size={16}
              className="lg:h-[18px] lg:w-[18px]"
            />
            6 Months
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400 lg:text-base">
            <Briefcase
              size={16}
              className="lg:h-[18px] lg:w-[18px]"
            />
            Full-Time Internship
          </div>

        </div>

      </div>

      {/* Professional Summary */}

      <div className="mt-8 border-t border-white/10 pt-6 lg:mt-10 lg:pt-8">

        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
          Professional Summary
        </h3>

        <p className="mt-5 max-w-4xl leading-8 text-slate-400">
  Worked with business and operational datasets to clean, analyse
  and visualize information using SQL, Python, Excel, Power BI and
  AI-assisted analytics techniques. Built interactive dashboards,
  generated KPI reports and delivered actionable insights that
  supported business decision-making.
</p>

      </div>

    </Card>
  );
}