import { cn } from "@/lib/utils";
import React from "react";

export function Safari({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-void/50 backdrop-blur-md overflow-hidden shadow-[0_0_50px_-12px_rgba(0,240,255,0.15)] flex flex-col",
        className
      )}
    >
      <div className="flex bg-white/[0.03] border-b border-white/5 px-3 py-2 sm:px-4 sm:py-2.5 items-center gap-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
      </div>
      <div className="relative w-full flex-1 bg-void overflow-hidden">
        {children}
      </div>
    </div>
  );
}
