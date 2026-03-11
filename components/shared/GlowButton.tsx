"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlowButton({ children, className, onClick }: GlowButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wider uppercase",
        "rounded-full border border-accent-cyan/30 bg-accent-cyan/5",
        "text-accent-cyan transition-all duration-300",
        "hover:bg-accent-cyan/10 hover:border-accent-cyan/60",
        "hover:shadow-[0_0_30px_rgba(0,240,255,0.2),0_0_60px_rgba(0,240,255,0.1)]",
        "focus:outline-none focus:ring-2 focus:ring-accent-cyan/50",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Inner glow pulse */}
      <span className="absolute inset-0 rounded-full bg-accent-cyan/5 animate-pulse" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
