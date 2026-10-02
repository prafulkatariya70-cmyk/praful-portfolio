import Card from "../ui/Card";
import CTAGroup from "./CTAGroup";

export default function LeftPanel() {
  return (
    <Card className="h-full rounded-[32px] p-6 lg:p-8">

      <div className="flex h-full flex-col">

        {/* Badge */}

        <div className="inline-flex w-fit items-center rounded-full border border-[#3BFF8A]/20 bg-[#3BFF8A]/10 px-5 py-2">
          <span className="text-sm font-semibold tracking-[0.25em] text-[#3BFF8A]">
            DATA ANALYST
          </span>
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.04em] text-white lg:text-[80px]">
          Prafful
          <br />
          Katariya
        </h1>

        {/* Description */}

       <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
  Transforming raw data into actionable business insights using SQL,
  Python, Power BI and AI-powered analytics to solve real-world business
  problems and build intelligent data solutions.
</p>

        {/* Availability */}

        <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#3BFF8A]/20 bg-[#3BFF8A]/10 px-5 py-3">

          <span className="relative flex h-3 w-3">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3BFF8A] opacity-75"></span>

            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#3BFF8A]"></span>

          </span>

          <span className="font-medium text-[#3BFF8A]">
            Available for Full-Time Opportunities
          </span>

        </div>

        {/* CTA */}

        <div className="mt-10">
          <CTAGroup />
        </div>

      </div>

    </Card>
  );
}