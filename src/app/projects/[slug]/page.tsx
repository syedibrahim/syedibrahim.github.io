import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  AlertTriangle,
  Route,
  TrendingUp,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Syed Ibrahim`,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-400 transition-colors font-mono mb-10"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
          <span className="gradient-text">{project.title}</span>
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-14">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary-950/50 text-primary-300 border border-primary-800/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={18} className="text-accent-400" />
            <h2 className="text-xl font-semibold text-slate-100">
              The problem
            </h2>
          </div>
          <p className="text-slate-400 leading-relaxed">
            {project.caseStudy.problem}
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Route size={18} className="text-primary-400" />
            <h2 className="text-xl font-semibold text-slate-100">
              The approach
            </h2>
          </div>
          <ul className="space-y-3">
            {project.caseStudy.approach.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-400">
                <span className="mt-1 font-mono text-xs text-primary-400 flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={18} className="text-accent-400" />
            <h2 className="text-xl font-semibold text-slate-100">
              The impact
            </h2>
          </div>
          <ul className="space-y-3">
            {project.caseStudy.impact.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="section-divider mb-10" />

        <div className="flex flex-wrap gap-4">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 2)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="flex-1 min-w-[240px] p-5 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/40 transition-colors card-glow"
              >
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                  Next case study
                </p>
                <p className="font-semibold text-slate-200">{p.title}</p>
              </Link>
            ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
