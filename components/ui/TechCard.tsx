import { LucideIcon } from "lucide-react";
import Card from "./Card";

type TechCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export default function TechCard({
  icon: Icon,
  title,
  subtitle,
}: TechCardProps) {
  return (
    <Card
      className="
        group
        flex
        h-full
        flex-col
        rounded-3xl
        p-4
        lg:p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#3BFF8A]/30
        hover:shadow-[0_12px_40px_rgba(59,255,138,0.10)]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-11
          w-11
          lg:h-14
          lg:w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#3BFF8A]/10
          text-[#3BFF8A]
          shadow-[0_0_24px_rgba(59,255,138,0.12)]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-3
          group-hover:bg-[#3BFF8A]/20
          group-hover:shadow-[0_0_32px_rgba(59,255,138,0.18)]
        "
      >
        <Icon
          size={20}
          strokeWidth={2.2}
          className="lg:h-[26px] lg:w-[26px]"
        />
      </div>

      {/* Title */}

      <h3 className="mt-4 text-base font-bold tracking-tight text-white lg:mt-6 lg:text-xl">
        {title}
      </h3>

      {/* Subtitle */}

      <p className="mt-2 flex-1 text-xs leading-5 text-slate-400 lg:mt-3 lg:text-sm lg:leading-6">
        {subtitle}
      </p>
    </Card>
  );
}