type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({
  title,
}: SectionTitleProps) {
  return (
    <div className="flex items-center justify-center gap-5">

      <div className="h-px w-12 bg-[#3BFF8A]"></div>

      <h3 className="text-lg font-semibold tracking-wide text-white">
        {title}
      </h3>

      <div className="h-px w-12 bg-[#3BFF8A]"></div>

    </div>
  );
}