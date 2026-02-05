import { TooltipIcon } from "@/components/six/tooltip-icon";
import { socialData } from "@/lib/data";

export function SocialButtons() {
  return (
    <div className="flex items-center gap-4">
      {socialData.map(({ id, title, href, Icon }) => (
        <TooltipIcon
          key={id}
          title={title}
          href={href}
          Icon={Icon}
          className="group size-4.5 text-background transition-colors hover:text-primary xl:size-5"
        />
      ))}
    </div>
  );
}
