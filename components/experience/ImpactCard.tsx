import {
  BarChart3,
  Database,
  LineChart,
  Workflow,
} from "lucide-react";

import Card from "../ui/Card";

const highlights = [
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    description: "Built business dashboards in Power BI for KPI monitoring.",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Analyzed business datasets using SQL and Excel.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Automated data preparation and reporting workflows using Python.",
  },
  {
    icon: LineChart,
    title: "Business Insights",
    description: "Delivered actionable insights to support business decisions.",
  },
];

export default function ImpactCard() {
  return (
    <Card className="rounded-[32px] p-5 lg:p-8">

      <h3 className="text-lg font-semibold text-white">
        Impact Highlights
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:mt-8 lg:gap-6">

        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-4
                lg:p-5
                transition-all
                duration-300
                hover:border-sky-400/30
                hover:bg-sky-400/5
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 lg:h-12 lg:w-12">
                <Icon
                  size={18}
                  className="text-sky-300 lg:h-[22px] lg:w-[22px]"
                />
              </div>

              <h4 className="mt-4 text-sm font-semibold text-white lg:mt-5 lg:text-lg">
                {item.title}
              </h4>

              <p className="mt-2 text-xs leading-5 text-slate-400 lg:text-sm lg:leading-7">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

    </Card>
  );
}