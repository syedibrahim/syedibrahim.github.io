"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, BarChart3, Target, TrendingUp, Sparkles } from "lucide-react";
import { philosophyPoints } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={24} />,
  "bar-chart-3": <BarChart3 size={24} />,
  target: <Target size={24} />,
  "trending-up": <TrendingUp size={24} />,
};

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={20} className="text-primary-400" />
            <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
              Engineering Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            How I{" "}
            <span className="gradient-text">approach engineering</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {philosophyPoints.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/40 transition-all duration-300 card-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600/15 to-primary-900/30 text-primary-400 group-hover:from-primary-600/25 group-hover:to-primary-800/40 transition-all flex-shrink-0">
                  {iconMap[point.icon] || <Sparkles size={24} />}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-200 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
