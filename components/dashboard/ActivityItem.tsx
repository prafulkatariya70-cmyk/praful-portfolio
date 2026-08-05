import { CheckCircle2 } from "lucide-react";

type ActivityItemProps = {
  title: string;
  subtitle: string;
};

export default function ActivityItem({
  title,
  subtitle,
}: ActivityItemProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-4
        transition-all
        duration-300
        hover:border-[#3BFF8A]/40
        hover:bg-[#3BFF8A]/5
      "
    >
      <div className="mt-1 text-[#3BFF8A]">
        <CheckCircle2 size={20} />
      </div>

      <div>

        <h4 className="font-medium text-white">
          {title}
        </h4>

        <p className="mt-1 text-sm text-slate-400">
          {subtitle}
        </p>

      </div>
    </div>
  );
}