import Card from "./ui/Card";
import { LucideIcon } from "lucide-react";

type KpiCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
};

export default function KpiCard({
  icon: Icon,
  title,
  value,
  subtitle,
}: KpiCardProps) {
  return (
    <Card className="group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3BFF8A]/30 hover:shadow-[0_0_30px_rgba(59,255,138,0.08)]">

      <div className="flex flex-col h-full">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#3BFF8A]/15 bg-[#3BFF8A]/10 shadow-[0_0_20px_rgba(59,255,138,0.12)]">

          <Icon
            size={24}
            className="text-[#3BFF8A]"
          />

        </div>

        {/* Title */}
        <p className="mt-5 text-sm font-medium text-gray-400">
          {title}
        </p>

        {/* Value */}
        <h3 className="mt-3 text-4xl font-bold tracking-tight text-white">
          {value}
        </h3>

        {/* Subtitle */}
        <p className="mt-2 text-sm font-medium text-[#3BFF8A]">
          {subtitle}
        </p>

      </div>

    </Card>
  );
}