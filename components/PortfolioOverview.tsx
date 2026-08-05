import FadeUp from "./ui/FadeUp";
import Dashboard from "./dashboard/Dashboard";
import SectionTitle from "./ui/SectionTitle";

export default function PortfolioOverview() {
  return (
    <FadeUp>
      <section
        id="portfolio-overview"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-3xl text-center">

          <SectionTitle title="Portfolio Overview" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A quick snapshot of my analytics portfolio, highlighting
            projects, dashboards and technical expertise.
          </p>

        </div>

        <div className="mt-14">
          <Dashboard />
        </div>

      </section>
    </FadeUp>
  );
}