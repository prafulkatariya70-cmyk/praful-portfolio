import FadeUp from "./ui/FadeUp";
import FocusCard from "./hero/FocusCard";

export default function Learning() {
  return (
    <FadeUp>
      <section
        id="learning"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-white">
            Currently Exploring
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Continuously expanding my expertise in modern data analytics,
            machine learning and cloud technologies.
          </p>

        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <FocusCard />
        </div>

      </section>
    </FadeUp>
  );
}