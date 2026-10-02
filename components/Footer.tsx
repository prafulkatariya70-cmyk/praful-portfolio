export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 lg:mt-24 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">

        <p className="text-sm text-slate-400">
          © 2026 Prafful Katariya
        </p>

        <p className="mt-3 text-xs leading-6 text-slate-500 lg:text-sm">
          Built with{" "}
          <span className="text-white">Next.js</span> •{" "}
          <span className="text-white">TypeScript</span> •{" "}
          <span className="text-white">Tailwind CSS</span> •{" "}
          <span className="text-white">Passion &amp; Caffeine ☕</span>
        </p>

      </div>
    </footer>
  );
}