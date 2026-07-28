import { Star, GitFork } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolio";

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/syedibrahim/repos?sort=updated&per_page=30",
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);
  } catch {
    return [];
  }
}

export default async function GithubActivity() {
  const repos = await fetchRepos();
  if (repos.length === 0) return null;

  return (
    <section id="github" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-primary-400">
            <GithubIcon size={20} />
          </span>
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
            Open Source
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          On <span className="gradient-text">GitHub</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-primary-800/40 transition-colors card-glow flex flex-col"
            >
              <h3 className="font-mono text-sm font-semibold text-primary-300 group-hover:text-primary-400 transition-colors mb-2 break-all">
                {repo.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {repo.description ?? "No description"}
              </p>
              <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-400" />
                    {repo.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Star size={12} />
                  {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork size={12} />
                  {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-400 transition-colors font-mono"
          >
            <GithubIcon size={16} />
            View all repositories →
          </a>
        </div>
      </div>
    </section>
  );
}
