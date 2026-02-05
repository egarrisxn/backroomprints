import type { IconProps } from "@/lib/types";

const ArrowDownIcon = ({
  className = "",
  width = "24",
  height = "24",
  strokeWidth = "2",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      width={width}
      height={height}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export { ArrowDownIcon };
