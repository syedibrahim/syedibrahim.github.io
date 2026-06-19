"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={20} className="text-primary-400" />
            <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Professional{" "}
            <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-600/50 via-primary-800/30 to-transparent hidden sm:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative sm:pl-14 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-2 w-4 h-4 rounded-full bg-primary-600 border-4 border-[#0a0a0f] hidden sm:block animate-glow" />

              <div className="p-6 sm:p-8 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/40 transition-all duration-300 card-glow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-primary-400 font-medium">
                    <Briefcase size={14} />
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-400 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5">
                  {exp.achievements.map((achievement, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
