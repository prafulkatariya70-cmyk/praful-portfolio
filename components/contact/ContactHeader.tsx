import SectionTitle from "../ui/SectionTitle";

export default function ContactHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <SectionTitle title="Contact" />

      <h1 className="mt-8 text-5xl font-bold tracking-tight text-white">
        Let's Connect
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
        Interested in collaborating, discussing opportunities,
        or just saying hello? I'd be happy to connect and explore new
        possibilities.
      </p>

    </div>
  );
}