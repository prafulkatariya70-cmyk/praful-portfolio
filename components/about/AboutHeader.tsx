import SectionTitle from "../ui/SectionTitle";

export default function AboutHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <SectionTitle title="About Me" />

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 lg:mt-8 lg:text-lg lg:leading-8">
        Passionate about transforming raw data into meaningful insights through
        analytics, visualization and machine learning.
      </p>

    </div>
  );
}