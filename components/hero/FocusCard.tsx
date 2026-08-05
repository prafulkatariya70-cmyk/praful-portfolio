import {
  CircleDot,
  Target,
} from "lucide-react";

import Card from "../ui/Card";

const skills = [
  "Advanced Python",
  "AI & Machine Learning Fundamentals",
  "Statistics for Data Science",
  "Cloud Analytics",
];

export default function FocusCard() {
  return (
    <Card
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#101827]/90
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#3BFF8A]/30
        hover:shadow-[0_16px_40px_rgba(59,255,138,0.12)]
      "
    >
      {/* Skills */}

      <div className="space-y-3">

        {skills.map((skill) => (
          <div
            key={skill}
            className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-transparent
              px-4
              py-3
              transition-all
              duration-300
              hover:border-[#3BFF8A]/20
              hover:bg-[#3BFF8A]/5
              hover:shadow-[0_0_18px_rgba(59,255,138,0.15)]
            "
          >
            <CircleDot
              size={18}
              className="
                shrink-0
                text-[#3BFF8A]
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:drop-shadow-[0_0_10px_rgba(59,255,138,0.9)]
              "
            />

            <span
              className="
                text-[15px]
                font-medium
                text-slate-300
                transition-all
                duration-300
                group-hover:text-white
                group-hover:drop-shadow-[0_0_10px_rgba(59,255,138,0.35)]
              "
            >
              {skill}
            </span>

          </div>
        ))}

      </div>

      {/* Divider */}

      <div className="my-8 border-t border-white/10" />

      {/* Career Aspiration */}

      <div>

        <div className="flex items-center gap-3">

          <Target
            size={22}
            className="text-[#3BFF8A]"
          />

          <h3 className="text-xl font-bold text-white">
            Career Aspiration
          </h3>

        </div>

        <p className="mt-4 leading-8 text-slate-400">
          Building intelligent solutions through
<br />
Data Analytics, Artificial Intelligence
<br />
and Machine Learning.
        </p>

      </div>

    </Card>
  );
}