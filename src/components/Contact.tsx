"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight, MessageSquare } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: <LinkedinIcon size={20} />,
    description: "Let's connect professionally",
    color: "from-blue-600/15 to-blue-900/30",
    borderColor: "hover:border-blue-700/40",
    textColor: "text-blue-400",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: <GithubIcon size={20} />,
    description: "Check out my repositories",
    color: "from-slate-600/15 to-slate-800/30",
    borderColor: "hover:border-slate-600/40",
    textColor: "text-slate-300",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={20} />,
    description: personalInfo.email,
    color: "from-accent-600/15 to-accent-900/30",
    borderColor: "hover:border-accent-700/40",
    textColor: "text-accent-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare size={20} className="text-primary-400" />
            <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">connect</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Interested in discussing data engineering, distributed systems, or
            potential collaborations? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group p-6 rounded-xl bg-gradient-to-br ${link.color} border border-slate-800/50 ${link.borderColor} transition-all duration-300 text-center hover:scale-[1.02] card-glow`}
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-slate-900/50 ${link.textColor} mb-4`}
              >
                {link.icon}
              </div>
              <h3 className="font-semibold text-slate-200 mb-1 flex items-center justify-center gap-1">
                {link.label}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>
              <p className="text-sm text-slate-500">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
