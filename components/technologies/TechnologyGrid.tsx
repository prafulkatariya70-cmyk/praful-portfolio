import {
  Database,
  FileCode2,
  BarChart3,
  Sheet,
  Sigma,
  Workflow,
  LineChart,
  GitBranch,
} from "lucide-react";

import TechCard from "../ui/TechCard";

export default function TechnologyGrid() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">

      <TechCard
        icon={Database}
        title="SQL"
        subtitle="Advanced Querying"
      />

      <TechCard
        icon={FileCode2}
        title="Python"
        subtitle="Data Analysis & Automation"
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
        subtitle="Data-Driven Decisions"
      />

      <TechCard
        icon={Workflow}
        title="ETL Pipelines"
        subtitle="Data Integration"
      />

      <TechCard
        icon={LineChart}
        title="Data Visualization"
        subtitle="Business Storytelling"
      />

      <TechCard
  icon={Sigma}
  title="Artificial Intelligence"
  subtitle="AI-Powered Analytics"
/>

    </div>
  );
}