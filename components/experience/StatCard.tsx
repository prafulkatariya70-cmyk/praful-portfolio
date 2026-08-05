import { LucideIcon } from "lucide-react";

import Card from "../ui/Card";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  title: string;
};

export default function StatCard({
  icon: Icon,
  value,
  title,
}: StatCardProps) {
  return (
    <Card className="rounded-[28px] p-8">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10">
        <Icon
          size={26}
          className="text-sky-300"
        />
      </div>

      <h3 className="mt-8 text-5xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>

    </Card>
  );
}