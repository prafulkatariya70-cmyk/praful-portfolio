type SkillBadgeProps = {
  name: string;
};

export default function SkillBadge({
  name,
}: SkillBadgeProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-[#3BFF8A]/40 hover:bg-[#3BFF8A]/10">
      <span className="text-sm font-medium text-gray-200">
        {name}
      </span>
    </div>
  );
}