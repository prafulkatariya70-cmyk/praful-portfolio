import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type GhostButtonProps = {
  children: ReactNode;
  href: string;
  target?: string;
};

export default function GhostButton({
  children,
  href,
  target,
}: GhostButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="
        group
        inline-flex
        h-[56px]
        min-w-[190px]
        items-center
        justify-center
        gap-2.5
        rounded-2xl
        border
        border-[#3BFF8A]/20
        bg-[#3BFF8A]/10
        px-6
        font-semibold
        text-[#3BFF8A]
        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-[#3BFF8A]/40
        hover:bg-[#3BFF8A]/15
        hover:shadow-[0_14px_35px_rgba(59,255,138,0.18)]
      "
    >
      <span className="flex items-center gap-2">
        {children}
      </span>

      <ArrowUpRight
        size={18}
        className="
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      />
    </a>
  );
}