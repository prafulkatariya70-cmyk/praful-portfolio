import { CheckCircle2 } from "lucide-react";

import Card from "../ui/Card";

const responsibilities = [
  "Analyzed business datasets using SQL and Excel",
  "Built interactive Power BI dashboards",
  "Automated reporting workflows using Python",
  "Created KPI reports for stakeholders",
  "Performed data cleaning and validation",
  "Presented actionable business insights",
];

export default function ResponsibilitiesCard() {
  return (
    <Card className="h-full rounded-[32px] p-8">

      <h3 className="text-lg font-semibold text-white">
        Key Responsibilities
      </h3>

      <div className="mt-6 space-y-5">

        {responsibilities.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={18}
              className="mt-1 shrink-0 text-sky-400"
            />

            <p className="text-slate-300">
              {item}
            </p>

          </div>
        ))}

      </div>

    </Card>
  );
}