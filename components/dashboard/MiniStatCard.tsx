import { LucideIcon } from "lucide-react";

type MiniStatCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function MiniStatCard({
  icon: Icon,
  title,
  value,
}: MiniStatCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-4
        lg:p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#3BFF8A]/40
        hover:bg-[#3BFF8A]/5
      "
    >
      {/* Icon */}

      <div
        className="
          mb-4
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-[#3BFF8A]/12
          text-[#3BFF8A]
          shadow-[0_0_20px_rgba(59,255,138,0.08)]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:bg-[#3BFF8A]/20
          group-hover:shadow-[0_0_28px_rgba(59,255,138,0.18)]
          lg:h-12
          lg:w-12
        "
      >
        <Icon
          size={18}
          strokeWidth={2.2}
          className="lg:h-[22px] lg:w-[22px]"
        />
      </div>

      {/* Title */}

      <p
        className="
          min-h-[32px]
          text-xs
          font-medium
          uppercase
          tracking-[0.18em]
          text-slate-400
          lg:min-h-[40px]
        "
      >
        {title}
      </p>

      {/* Value */}

      <h3 className="mt-3 text-[28px] font-bold leading-none text-white lg:text-[34px]">
        {value}
      </h3>
    </div>
  );
}