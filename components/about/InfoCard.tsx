import Card from "../ui/Card";
import { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function InfoCard({
  icon: Icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <Card
      className="
        group
        h-full
        p-4
        lg:p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#3BFF8A]/30
        hover:shadow-[0_10px_30px_rgba(59,255,138,0.08)]
      "
    >
      <div className="flex items-start gap-3 lg:gap-4">

        {/* Icon */}

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#3BFF8A]/10
            text-[#3BFF8A]
            transition-all
            duration-300
            group-hover:scale-105
            lg:h-12
            lg:w-12
            lg:rounded-2xl
          "
        >
          <Icon
            size={18}
            className="lg:h-[22px] lg:w-[22px]"
          />
        </div>

        {/* Text */}

        <div className="min-w-0">

          <p className="text-xs text-slate-400 lg:text-sm">
            {title}
          </p>

          <h3 className="mt-1 text-base font-semibold leading-6 text-white lg:text-lg">
            {value}
          </h3>

        </div>

      </div>
    </Card>
  );
}