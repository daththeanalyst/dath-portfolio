"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { skills } from "@/data/skills";

function SkillBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-accent-cyan/20 hover:bg-accent-cyan/5 transition-all duration-300">
      <span className="text-sm font-medium text-text-muted group-hover:text-text-primary transition-colors">
        {name}
      </span>
    </div>
  );
}

export function TechMarquee() {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        {/* Row 1 */}
        <Marquee pauseOnHover speed={30}>
          {firstRow.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </Marquee>

        {/* Row 2 - reverse direction */}
        <Marquee pauseOnHover reverse speed={30}>
          {secondRow.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
