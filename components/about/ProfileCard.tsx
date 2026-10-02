import Card from "../ui/Card";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <Card className="group relative mx-auto max-w-sm overflow-hidden rounded-[32px] border border-[#3BFF8A]/15 p-4 transition-all duration-300 hover:border-[#3BFF8A]/30 hover:shadow-[0_0_35px_rgba(59,255,138,0.12)] lg:max-w-none lg:p-5">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3BFF8A15,transparent_65%)]" />

      <div className="relative overflow-hidden rounded-[28px]">

        <Image
          src="/profile.jpg"
          alt="Prafful Katariya"
          width={500}
          height={600}
          priority
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

    </Card>
  );
}