import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Card from "../ui/Card";
import TechBadge from "./TechBadge";

type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
};

export default function ProjectCard({
  category,
  title,
  description,
  technologies,
  features,
  github,
}: ProjectCardProps) {

  const badgeColor =
    category === "Machine Learning"
      ? "blue"
      : category === "SQL"
      ? "purple"
      : category === "Ecommerce Analytics"
      ? "orange"
      : category === "Financial Analytics"
      ? "emerald"
      : "green";

  const categoryStyles = {
    green:
      "border-[#3BFF8A]/20 bg-[#3BFF8A]/10 text-[#3BFF8A]",

    blue:
      "border-sky-400/20 bg-sky-400/10 text-sky-300",

    purple:
      "border-violet-400/20 bg-violet-400/10 text-violet-300",

    orange:
      "border-orange-400/20 bg-orange-400/10 text-orange-300",

    emerald:
      "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  };

  return (
    <Card
      className="
        group
        flex
        h-full
        flex-col
        rounded-[32px]
        p-5
        lg:p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#3BFF8A]/30
        hover:shadow-[0_16px_45px_rgba(59,255,138,0.10)]
      "
    >
      {/* Category & Title */}

      <div>

        <span
          className={`
            inline-flex
            rounded-full
            border
            px-3
            py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            lg:px-4
            lg:py-1.5
            lg:text-xs
            ${categoryStyles[badgeColor]}
          `}
        >
          {category}
        </span>

        <h2 className="mt-5 text-2xl font-bold tracking-tight text-white lg:mt-6 lg:text-3xl">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-400 lg:mt-5 lg:text-base lg:leading-8">
          {description}
        </p>

      </div>

      {/* Technologies */}

      <div className="mt-6 border-t border-white/10 pt-5 lg:mt-8 lg:pt-6">

        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
          Technologies
        </h3>

        <div className="mt-4 flex flex-wrap gap-2 lg:gap-3">

          {technologies.map((tech) => (
            <TechBadge
              key={tech}
              label={tech}
              color={badgeColor}
            />
          ))}

        </div>

      </div>

      {/* Features */}

      <div className="mt-6 flex-1 border-t border-white/10 pt-5 lg:mt-8 lg:pt-6">

        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
          Key Features
        </h3>

        <div className="mt-4 space-y-3 lg:mt-5 lg:space-y-4">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={16}
                className="shrink-0 text-[#3BFF8A] lg:h-[18px] lg:w-[18px]"
              />

              <span className="text-sm text-slate-300 lg:text-base">
                {feature}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* GitHub */}

      <div className="mt-6 border-t border-white/10 pt-5 lg:mt-8 lg:pt-6">

        <p className="mb-4 text-sm text-slate-400 lg:mb-5">
          Explore more on GitHub
        </p>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-[#3BFF8A]/20
            bg-[#3BFF8A]/10
            px-5
            py-3
            font-medium
            text-[#3BFF8A]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#3BFF8A]/40
            hover:bg-[#3BFF8A]/15
            hover:shadow-[0_0_24px_rgba(59,255,138,0.15)]
          "
        >
          <FaGithub className="text-lg" />

          View Repository

          <ArrowUpRight size={18} />
        </a>

      </div>

    </Card>
  );
}