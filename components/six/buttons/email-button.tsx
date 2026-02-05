import { EmailIcon } from "@/components/six/icons/email";
import { TooltipIcon } from "@/components/six/tooltip-icon";

export function EmailButton() {
  return (
    <TooltipIcon
      title="Email"
      href="mailto:BackroomPrintsOKC@gmail.com"
      Icon={EmailIcon}
      className="size-5 text-background transition-colors hover:text-primary"
    />
  );
}
