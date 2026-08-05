type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="min-w-[120px]">
      <h3 className="text-5xl font-black tracking-tight text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
}