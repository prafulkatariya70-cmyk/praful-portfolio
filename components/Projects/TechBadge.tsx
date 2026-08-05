type TechBadgeProps = {
  label: string;
  color?: "green" | "blue" | "purple" | "orange" | "emerald";
};

export default function TechBadge({
  label,
  color = "green",
}: TechBadgeProps) {
  const colors = {
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
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1.5
        text-xs
        font-semibold
        tracking-wide
        transition-all
        duration-300
        ${colors[color]}
      `}
    >
      {label}
    </span>
  );
}