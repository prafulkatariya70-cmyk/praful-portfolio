import { ReactNode } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
  href?: string;
  target?: string;
};

export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  href,
  target,
}: ButtonProps) {
  const base = `
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-2xl
    px-8
    py-4
    font-semibold
    transition-all
    duration-300
    ease-out
    active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-[#3BFF8A]
      text-black
      shadow-[0_8px_24px_rgba(59,255,138,0.18)]
      hover:-translate-y-1
      hover:bg-[#2DE978]
      hover:shadow-[0_14px_35px_rgba(59,255,138,0.35)]
    `,

    secondary: `
      border
      border-white/15
      bg-white/[0.03]
      text-white
      hover:-translate-y-1
      hover:border-[#3BFF8A]/40
      hover:bg-[#3BFF8A]/10
      hover:text-[#3BFF8A]
      hover:shadow-[0_14px_35px_rgba(59,255,138,0.15)]
    `,
  };

  const className = `${base} ${variants[variant]}`;

  const content = (
    <>
      {Icon && (
        <Icon
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className={`group ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${className}`}>
      {content}
    </button>
  );
}