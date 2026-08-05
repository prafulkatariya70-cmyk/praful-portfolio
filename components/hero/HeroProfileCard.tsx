import Card from "../ui/Card";
import Image from "next/image";

export default function HeroProfileCard() {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#101827]/90
        p-2
        transition-all
        duration-300
        hover:border-[#3BFF8A]/30
        hover:shadow-[0_0_30px_rgba(59,255,138,0.15)]
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3BFF8A12,transparent_70%)]" />

      {/* Image */}

      <div className="relative overflow-hidden rounded-[22px] border border-white/5">

        <Image
          src="/profile.jpg"
          alt="Praful Katariya"
          width={250}
          height={250}
          priority
          className="
            aspect-square
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