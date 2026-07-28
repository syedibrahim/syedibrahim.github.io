"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { metrics } from "@/data/portfolio";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setValue(target);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, reducedMotion]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={20} className="text-primary-400" />
            <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
              Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Numbers that <span className="gradient-text">matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/40 transition-colors card-glow text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                <Counter target={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-sm font-semibold text-slate-200 mb-2">
                {metric.label}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
