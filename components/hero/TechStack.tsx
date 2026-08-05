import {
  Database,
  FileCode2,
  BarChart3,
  Sheet,
  Sigma,
  Workflow,
  LineChart,
  Table2,
  Binary,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import TechCard from "../ui/TechCard";

export default function TechStack() {
  return (
    <div className="mt-14">

      <SectionTitle title="Core Technologies" />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

        <TechCard
          icon={Database}
          title="SQL"
          subtitle="Query Optimization"
        />

        <TechCard
          icon={FileCode2}
          title="Python"
          subtitle="Automation & Analysis"
        />

        <TechCard
          icon={BarChart3}
          title="Power BI"
          subtitle="Interactive Dashboards"
        />

        <TechCard
          icon={Sheet}
          title="Excel"
          subtitle="Advanced Analytics"
        />

        <TechCard
          icon={Sigma}
          title="Statistics"
          subtitle="Decision Making"
        />

        <TechCard
          icon={Workflow}
          title="ETL Pipelines"
          subtitle="Data Integration"
        />

        <TechCard
          icon={LineChart}
          title="Data Visualization"
          subtitle="Insight Storytelling"
        />

        <TechCard
          icon={Table2}
          title="Pandas"
          subtitle="Data Processing"
        />

        <TechCard
          icon={Binary}
          title="NumPy"
          subtitle="Numerical Computing"
        />

      </div>

    </div>
  );
}