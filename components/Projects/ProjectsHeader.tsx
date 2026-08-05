import SectionTitle from "../ui/SectionTitle";

export default function ProjectsHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <SectionTitle title="Featured Projects" />

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        A collection of real-world analytics and machine learning projects
        demonstrating problem-solving, data visualization, SQL, Python and
        business intelligence skills.
      </p>

    </div>
  );
}