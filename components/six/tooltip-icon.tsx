import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TooltipIconProps } from "@/lib/types";

// export function TooltipIcon({ title, href, Icon, className }: TooltipIconProps) {
//   return (
//     <Tooltip>
//       <TooltipTrigger asChild>
//         <a href={href} aria-label={title}>
//           <Icon className={`${className} `} />
//         </a>
//       </TooltipTrigger>
//       <TooltipContent>
//         <p>{title}</p>
//       </TooltipContent>
//     </Tooltip>
//   );
// }

export function TooltipIcon({
  title,
  href,
  Icon,
  className,
}: TooltipIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          aria-label={title}
          target="_blank"
          rel="noreferrer"
          className={cn("inline-flex items-center", className)}
        >
          <Icon className="size-full" />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
