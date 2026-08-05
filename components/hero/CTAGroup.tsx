import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "../ui/Button";
import GhostButton from "../ui/GhostButton";

export default function CTAGroup() {
  return (
    <div className="mt-10">

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">

        <Button
          href="/projects"
          icon={ArrowUpRight}
        >
          Explore Projects
        </Button>

        <Button
          href="/resume.pdf"
          target="_blank"
          variant="secondary"
          icon={Download}
        >
          Download Resume
        </Button>

        <GhostButton
          href="https://github.com/prafulkatariya70-cmyk"
          target="_blank"
        >
          <FaGithub className="text-lg" />
          GitHub
        </GhostButton>

      </div>

    </div>
  );
}