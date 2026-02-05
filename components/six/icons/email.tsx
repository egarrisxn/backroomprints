import type { IconProps } from "@/lib/types";

const EmailIcon = ({
  className = "",
  width = "24",
  height = "24",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      width={width}
      height={height}
      className={className}
    >
      <title>Email</title>
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x={2} y={4} width={20} height={16} rx={2} />
    </svg>
  );
};

export { EmailIcon };
