import SectionTitle from "../ui/SectionTitle";

export default function SectionHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <SectionTitle title="Core Technologies" />

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        Leveraging modern analytics tools to clean, analyze and transform raw
        data into actionable business insights.
      </p>

    </div>
  );
}