"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 z-[60] h-0.5 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
