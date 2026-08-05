import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        `
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-[#101827]/90
          backdrop-blur-xl

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          hover:border-[#3BFF8A]/30
          hover:shadow-[0_16px_45px_rgba(59,255,138,0.12)]

          before:absolute
          before:inset-0
          before:bg-[radial-gradient(circle_at_top,rgba(59,255,138,0.08),transparent_70%)]
          before:opacity-0
          before:transition-opacity
          before:duration-300
          hover:before:opacity-100
        `,
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}