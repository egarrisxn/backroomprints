import { InstagramIcon } from "@/components/six/icons/instagram";
import { TooltipIcon } from "@/components/six/tooltip-icon";

export function InstaButton() {
  return (
    <TooltipIcon
      title="Instagram"
      href="https://www.instagram.com/backroomprints"
      Icon={InstagramIcon}
      className="size-5 text-background transition-colors hover:text-primary"
    />
  );
}
