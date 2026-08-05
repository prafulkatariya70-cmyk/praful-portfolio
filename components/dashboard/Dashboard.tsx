import Card from "../ui/Card";
import KpiRow from "./KpiRow";
import PortfolioChart from "./PortfolioChart";

export default function Dashboard() {
  return (
    <div
      
      className="relative"
    >
      {/* Background Glow */}

      <div className="absolute -inset-4 rounded-[36px] bg-[#3BFF8A]/8 blur-3xl opacity-60"></div>

      <Card className="relative overflow-hidden bg-[#101827]/90 p-6 lg:p-8">

        {/* KPI Cards */}

        <KpiRow />

        {/* Portfolio Growth */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111B2D] via-[#0E1625] to-[#0A111D] p-5 lg:p-6">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <p className="text-sm font-medium text-slate-400">
                Portfolio Progress
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                Project Growth
              </h3>

            </div>

            <span className="rounded-full border border-[#3BFF8A]/20 bg-[#3BFF8A]/10 px-4 py-2 text-sm font-semibold text-[#3BFF8A]">
              Growing
            </span>

          </div>

          <div className="h-[220px]">
            <PortfolioChart />
          </div>

        </div>

      </Card>

    </div>
  );
}