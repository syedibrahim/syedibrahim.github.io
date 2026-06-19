"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Briefcase, Code2, Globe } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  {
    icon: <Briefcase size={20} />,
    label: "Role",
    value: "Senior Software Engineer",
  },
  {
    icon: <Code2 size={20} />,
    label: "Focus",
    value: "Data Platforms & Streaming",
  },
  {
    icon: <Globe size={20} />,
    label: "Company",
    value: "Wayfair",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <User size={20} className="text-primary-400" />
            <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Building the backbone of{" "}
            <span className="gradient-text">data infrastructure</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-slate-300 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
            <p className="text-slate-400 leading-relaxed">
              Over the years, I have built expertise across{" "}
              <span className="text-primary-300">Apache Beam</span>,{" "}
              <span className="text-primary-300">Dataflow</span>,{" "}
              <span className="text-primary-300">Kafka</span>,{" "}
              <span className="text-primary-300">Dataproc</span>,{" "}
              <span className="text-primary-300">Flink</span>,{" "}
              <span className="text-primary-300">Dataplex</span>,{" "}
              <span className="text-primary-300">DataHub</span>, CDC
              architectures, and cloud-native data engineering.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I have progressed from building data pipelines and platform tooling
              to owning critical systems and influencing broader architectural
              decisions. My work has contributed to significant infrastructure
              cost savings, platform modernization initiatives, improved
              reliability, and the development of data governance and lineage
              capabilities at scale.
            </p>

            {/* Terminal-style quote */}
            <div className="mt-8 p-4 rounded-lg bg-slate-900/50 border border-slate-800/50 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <p className="text-slate-400">
                <span className="text-accent-400">$</span>{" "}
                <span className="text-slate-300">echo</span>{" "}
                <span className="text-primary-300">
                  &quot;A highly ambitious data platform engineer and technology leader
                  in the making—combining technical depth, continuous
                  self-improvement, and a desire to create meaningful
                  impact.&quot;
                </span>
                <span className="cursor-blink text-primary-400">|</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/30 transition-colors card-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-950/80 text-primary-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary-950/50 to-slate-900/30 border border-primary-800/20 text-center">
                <p className="text-2xl font-bold text-primary-400">5+</p>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Years Exp
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-accent-500/5 to-slate-900/30 border border-accent-600/20 text-center">
                <p className="text-2xl font-bold text-accent-400">10+</p>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Technologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
