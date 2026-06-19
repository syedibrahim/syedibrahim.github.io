"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GitBranch,
  Layers,
  ShieldCheck,
  Server,
  Activity,
  FolderOpen,
} from "lucide-react";
import { projects } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  "git-branch": <GitBranch size={24} />,
  layers: <Layers size={24} />,
  "shield-check": <ShieldCheck size={24} />,
  server: <Server size={24} />,
  activity: <Activity size={24} />,
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FolderOpen size={20} className="text-primary-400" />
            <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
              Projects & Systems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            What I&apos;ve{" "}
            <span className="gradient-text">built & owned</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 sm:p-8 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/40 transition-all duration-300 card-glow"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-primary-900/40 flex items-center justify-center text-primary-400 group-hover:from-primary-600/30 group-hover:to-primary-800/50 transition-all">
                    {iconMap[project.icon] || <Layers size={24} />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary-950/50 text-primary-300 border border-primary-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <span className="text-accent-400 mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
