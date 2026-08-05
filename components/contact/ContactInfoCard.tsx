import {
  Mail,
  MapPin,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Card from "../ui/Card";

const contacts = [
  {
    icon: Mail,
    value: "prafulkatariya70@gmail.com",
    href: "mailto:prafulkatariya70@gmail.com",
  },
  {
    icon: FaLinkedin,
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/praful-katariya-2734a8376/",
  },
  {
    icon: FaGithub,
    value: "GitHub",
    href: "https://github.com/prafulkatariya70-cmyk",
  },
  {
    icon: FileText,
    value: "Download Resume",
    href: "/resume.pdf",
  },
];

export default function ContactInfoCard() {
  return (
    <Card className="h-full rounded-[32px] p-5 lg:p-8">

      <h2 className="text-xl font-bold text-white lg:text-2xl">
        Contact Information
      </h2>

      <p className="mt-2 text-sm leading-7 text-slate-400 lg:mt-3 lg:text-base">
        Let's connect! Whether it's a job opportunity, collaboration, or just a
        conversation about data analytics, I'd love to hear from you.
      </p>

      <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-5">

        {contacts.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                px-4
                py-3.5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#3BFF8A]/30
                hover:bg-[#3BFF8A]/5
                lg:px-5
                lg:py-5
              "
            >
              <div className="flex items-center gap-4 lg:gap-5">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3BFF8A]/10 lg:h-12 lg:w-12">
                  <Icon className="text-lg text-[#3BFF8A] lg:text-xl" />
                </div>

                <p className="text-sm font-medium text-white lg:text-lg">
                  {item.value}
                </p>

              </div>

              <ArrowUpRight
                size={16}
                className="text-slate-500 transition-all duration-300 group-hover:text-[#3BFF8A] lg:h-[18px] lg:w-[18px]"
              />

            </a>
          );
        })}

      </div>

      {/* Location */}

      <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3.5 lg:mt-8 lg:gap-5 lg:px-5 lg:py-5">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3BFF8A]/10 lg:h-12 lg:w-12">
          <MapPin className="text-lg text-[#3BFF8A] lg:text-xl" />
        </div>

        <div>

          <p className="text-xs text-slate-400 lg:text-sm">
            Location
          </p>

          <p className="text-sm font-medium text-white lg:text-lg">
            Belagavi, Karnataka, India
          </p>

        </div>

      </div>

    </Card>
  );
}