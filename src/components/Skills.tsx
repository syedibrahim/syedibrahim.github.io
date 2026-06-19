"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Shield, Cloud, Code2, Cpu } from "lucide-react";
import { skillCategories } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  database: <Database size={22} />,
  shield: <Shield size={22} />,
  cloud: <Cloud size={22} />,
  code: <Code2 size={22} />,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Cpu size={20} className="text-primary-400" />
            <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
              Technical Skills
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Technologies I{" "}
            <span className="gradient-text">work with</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/40 transition-all duration-300 card-glow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary-950/80 text-primary-400 group-hover:bg-primary-900/60 transition-colors">
                  {iconMap[category.icon] || <Code2 size={22} />}
                </div>
                <h3 className="font-semibold text-lg text-slate-200">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40 hover:border-primary-700/40 hover:text-primary-300 hover:bg-primary-950/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
