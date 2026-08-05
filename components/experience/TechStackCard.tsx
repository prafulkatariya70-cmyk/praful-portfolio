import {
  Database,
  FileCode2,
  BarChart3,
  Sheet,
  Calculator,
} from "lucide-react";

import Card from "../ui/Card";

const technologies = [
  {
    icon: Database,
    name: "SQL",
    level: "Advanced",
  },
  {
    icon: FileCode2,
    name: "Python",
    level: "Intermediate",
  },
  {
    icon: BarChart3,
    name: "Power BI",
    level: "Advanced",
  },
  {
    icon: Sheet,
    name: "Excel",
    level: "Advanced",
  },
  {
    icon: Calculator,
    name: "DAX",
    level: "Intermediate",
  },
];

export default function TechStackCard() {
  return (
    <Card className="h-full rounded-[32px] p-8">

      <h3 className="text-lg font-semibold text-white">
        Technologies Used
      </h3>

      <div className="mt-6 space-y-4">

        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                px-5
                py-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-400/30
                hover:bg-sky-400/5
              "
            >
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10">
                  <Icon
                    size={20}
                    className="text-sky-300"
                  />
                </div>

                <span className="font-medium text-slate-200">
                  {tech.name}
                </span>

              </div>

              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                {tech.level}
              </span>

            </div>
          );
        })}

      </div>

    </Card>
  );
}