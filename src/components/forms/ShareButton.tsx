"use client";

import { Share2 } from "lucide-react";

export function ShareButton({ title, url }: { title: string; url: string }) {
  return (
    <button
      onClick={() => navigator.share?.({ title, url })}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <Share2 className="h-4 w-4" /> Share
    </button>
  );
}
