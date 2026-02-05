"use client";

import Script from "next/script";
import { useEffect } from "react";

type Props = {
  title?: string;
  permalinks: string[]; // 3-4 post URLs
};

export function InstagramGrid({ permalinks }: Props) {
  useEffect(() => {
    // Re-process embeds when permalinks change
    const w = window as any;
    if (w?.instgrm?.Embeds?.process) w.instgrm.Embeds.process();
  }, [permalinks]);

  return (
    <div className="space-y-4 space-x-4 p-6">
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
        {permalinks.slice(0, 4).map((url) => (
          <blockquote
            key={url}
            className="instagram-media w-full"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
          />
        ))}
      </div>
    </div>
  );
}
