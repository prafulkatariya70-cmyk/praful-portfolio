import {
  Briefcase,
  Database,
  LayoutDashboard,
  BarChart3,
} from "lucide-react";

import MiniStatCard from "./MiniStatCard";

export default function KpiRow() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">

      <MiniStatCard
        icon={Briefcase}
        title="Projects"
        value="07+"
      />

      <MiniStatCard
        icon={Database}
        title="SQL Queries"
        value="150+"
      />

      <MiniStatCard
        icon={LayoutDashboard}
        title="Dashboards"
        value="30+"
      />

      <MiniStatCard
        icon={BarChart3}
        title="Data Analyzed"
        value="100K+"
      />

    </div>
  );
}