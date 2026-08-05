"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#09111D]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}

        <Link
  href="/"
  className="group flex items-center gap-3"
>
  <div
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      border-[#3BFF8A]/20
      bg-[#101827]
      font-bold
      text-[#3BFF8A]
      shadow-[0_0_20px_rgba(59,255,138,0.08)]
      transition-all
      duration-300
      group-hover:-translate-y-0.5
      group-hover:border-[#3BFF8A]/50
      group-hover:shadow-[0_0_25px_rgba(59,255,138,0.18)]
    "
  >
    PK
  </div>

  <div className="hidden sm:block">
    <h1
      className="
        text-lg
        font-bold
        tracking-wide
        text-white
        transition-colors
        duration-300
        group-hover:text-[#3BFF8A]
      "
    >
      Praful Katariya
    </h1>

    <p className="text-xs text-slate-400">
      AI Data Analyst
    </p>
  </div>
</Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border border-[#3BFF8A]/20 bg-[#3BFF8A]/10 text-[#3BFF8A] shadow-[0_0_20px_rgba(59,255,138,0.12)]"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Resume */}

          <Link
            href="/resume.pdf"
            target="_blank"
            className="
              hidden
              md:inline-flex
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#3BFF8A]/40
              hover:bg-[#3BFF8A]/10
              hover:text-[#3BFF8A]
            "
          >
            Resume ↗
          </Link>

          {/* Hamburger */}

          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:border-[#3BFF8A]/40
              hover:bg-[#3BFF8A]/10
              md:hidden
            "
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`
          overflow-hidden
          border-t
          border-white/5
          bg-[#09111D]/95
          backdrop-blur-xl
          transition-all
          duration-300
          md:hidden
          ${open ? "max-h-96 py-4" : "max-h-0"}
        `}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#3BFF8A]/10 text-[#3BFF8A]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
            className="
              mt-2
              rounded-xl
              bg-[#3BFF8A]
              px-4
              py-3
              text-center
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-[#2DE978]
            "
          >
            Download Resume
          </Link>

        </div>
      </div>
    </header>
  );
}