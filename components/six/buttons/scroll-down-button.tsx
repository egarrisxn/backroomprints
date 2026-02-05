"use client";

import { ArrowDownIcon } from "@/components/six/icons/arrow-down";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import type { TargetId } from "@/lib/types";

export function ScrollDownButton({ targetId }: TargetId) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type="button"
      onClick={() => scrollTo(targetId)}
      className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 cursor-pointer rounded-full p-3 transition-transform hover:scale-110"
      aria-label="Scroll down"
    >
      <ArrowDownIcon className="size-8 text-white" />
    </button>
  );
}
