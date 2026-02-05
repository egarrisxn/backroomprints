import type { SVGProps, ComponentType, JSX } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
};

export type IconComponent = ComponentType<IconProps>;

export type TooltipIconProps = {
  title: string;
  href: string;
  Icon: IconComponent;
  className?: string;
};

export interface HyperLink {
  href: string;
  label: string;
  external?: boolean;
  icon?: JSX.Element;
}

export interface TargetId {
  targetId: string;
}
