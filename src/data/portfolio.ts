export const personalInfo = {
  name: "Syed Ibrahim",
  title: "Senior Software Engineer",
  company: "Wayfair",
  location: "Bengaluru, Karnataka, India",
  tagline:
    "Building large-scale data platforms, streaming systems & data lineage at scale",
  summary:
    "Senior Software Engineer specializing in large-scale data platforms, streaming systems, data movement, metadata management, and data lineage. Known for combining deep technical knowledge with a practical focus on scalability, reliability, and operational excellence.",
  linkedin: "https://www.linkedin.com/in/s-ibrahim/",
  github: "https://github.com/syedibrahim",
  email: "siz998@gmail.com",
};

export interface Skill {
  name: string;
  category: string;
}

export const skillCategories = [
  {
    title: "Data & Streaming",
    icon: "database",
    skills: [
      "Apache Beam",
      "Apache Kafka",
      "Apache Flink",
      "Google Dataflow",
      "Google Dataproc",
      "CDC Architectures",
    ],
  },
  {
    title: "Data Governance",
    icon: "shield",
    skills: [
      "DataHub",
      "Google Dataplex",
      "Data Lineage",
      "Metadata Management",
      "Data Quality Frameworks",
      "Data Contracts",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      "Google Cloud Platform",
      "Kubernetes",
      "Docker",
      "CI/CD Pipelines",
      "Terraform",
      "Cloud-Native Engineering",
    ],
  },
  {
    title: "Languages & Tools",
    icon: "code",
    skills: [
      "Python",
      "Java",
      "SQL",
      "Redis",
      "YAML/JSON Specs",
      "Git",
    ],
  },
];

export interface Metric {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const metrics: Metric[] = [
  {
    value: 6,
    suffix: "×",
    label: "Faster lineage sync",
    description: "Daily lineage refresh accelerated from 4+ hours to ~45 minutes",
  },
  {
    value: 100,
    suffix: "+",
    label: "Infra PRs at fleet scale",
    description: "Terraform onboarding PRs shipped across producer repositories",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of experience",
    description: "Building data platforms, pipelines, and governance systems",
  },
  {
    value: 10,
    suffix: "+",
    label: "Core technologies",
    description: "Beam, Kafka, Flink, Dataflow, DataHub, Kubernetes & more",
  },
];

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  icon: string;
  caseStudy: {
    problem: string;
    approach: string[];
    impact: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "data-lineage-platform",
    title: "Data Lineage Platform (0 → GA)",
    description:
      "Took warehouse-to-catalog data lineage from foundation to general availability. Re-architected the daily refresh into a distributed queue-based pipeline with Kubernetes workers, accelerating sync times by 6× (4+ hours down to ~45 minutes).",
    techStack: ["Kubernetes", "Redis", "DataHub", "BigQuery", "Python"],
    highlights: [
      "6× faster daily lineage sync (4h+ → ~45 min)",
      "Eliminated rate-limit failures and missing lineage edges",
      "Autoscaling, circuit breakers, and a fleet KPI dashboard",
    ],
    icon: "git-branch",
    caseStudy: {
      problem:
        "The daily lineage refresh between the data warehouse and the metadata catalog ran as a monolithic job taking over four hours, regularly hitting API rate limits and dropping lineage edges — undermining trust in the lineage graph.",
      approach: [
        "Re-architected the refresh into a distributed pipeline: a Redis-backed work queue fanned out to horizontally scaled Kubernetes workers",
        "Added horizontal pod autoscaling tuned to queue depth, plus circuit breakers and retry loops around upstream APIs",
        "Built a fleet KPI dashboard covering sync latency, edge completeness, and failure rates",
      ],
      impact: [
        "Daily sync time cut 6×, from 4h 19m to ~43 minutes",
        "Rate-limit failures and missing edges eliminated",
        "Platform promoted from prototype to GA with production guardrails",
      ],
    },
  },
  {
    slug: "ai-data-contract-generation",
    title: "AI-Assisted Data Contract Generation",
    description:
      "Shipped core enrichment capabilities for an AI-powered data contract generation platform — data profiling and code-context enrichment — hardening data-quality rule generation for complex types and adding bulk-generation CLI tooling.",
    techStack: ["Python", "LLM Tooling", "Data Contracts", "Data Quality", "CLI"],
    highlights: [
      "Profiling and code-context enrichment for richer contracts",
      "Hardened DQ rule generation for complex nested types",
      "Bulk-generation CLI tooling to scale contract adoption",
    ],
    icon: "sparkles",
    caseStudy: {
      problem:
        "AI-generated data contracts lacked context: without profiling statistics and producer code context, generated data-quality rules were imprecise — especially for complex nested types — limiting producer-team adoption.",
      approach: [
        "Built profiling enrichment feeding column-level statistics into contract generation",
        "Added code-context enrichment so generation understands how producers create the data",
        "Hardened rule generation paths for complex/nested types and shipped a bulk-generation CLI for fleet-scale runs",
      ],
      impact: [
        "Qualitatively better, more precise data-quality rules",
        "Bulk CLI tooling unlocked contract generation at fleet scale",
        "Lowered friction for producer teams adopting data-mesh standards",
      ],
    },
  },
  {
    slug: "fleet-cloud-onboarding",
    title: "GCP Fleet Onboarding at Scale",
    description:
      "Enabled governance and data-mesh APIs across the fleet of contract-generation GCP projects via ~100 Terraform PRs to producer repositories, using a repeatable AI-assisted onboarding workflow.",
    techStack: ["Terraform", "GCP", "Dataplex", "Infrastructure as Code"],
    highlights: [
      "~100 Terraform PRs across producer repositories",
      "Repeatable, AI-assisted onboarding workflow",
      "Governance APIs enabled fleet-wide",
    ],
    icon: "layers",
    caseStudy: {
      problem:
        "Rolling out data-mesh and governance APIs required consistent infrastructure changes across roughly a hundred independently owned GCP projects and repositories — infeasible to do reliably by hand.",
      approach: [
        "Codified the onboarding change as Terraform applied per producer repository",
        "Built a repeatable AI-assisted workflow to generate, validate, and open each onboarding PR",
        "Coordinated rollout waves with producer teams to manage review load",
      ],
      impact: [
        "~100 onboarding PRs shipped across the fleet",
        "Governance APIs consistently enabled across all contract-generation projects",
        "Playbook established for future fleet-wide infrastructure rollouts",
      ],
    },
  },
  {
    slug: "platform-reliability",
    title: "Platform Reliability Engineering",
    description:
      "Hardened critical platform services against upstream failure modes — implementing REST rate-limit resilience in the data-contract service to fully eliminate gateway timeouts during publish sequences.",
    techStack: ["Python", "REST APIs", "Rate Limiting", "Observability"],
    highlights: [
      "Eliminated gateway 504 timeouts during publish sequences",
      "Rate-limit-aware retry and backoff strategies",
      "Resilience patterns reused across platform services",
    ],
    icon: "shield-check",
    caseStudy: {
      problem:
        "Publish sequences in the data-contract service made bursts of REST calls that tripped upstream rate limits, surfacing as nginx 504 gateway timeouts for users.",
      approach: [
        "Implemented rate-limit-aware request scheduling with retry and backoff",
        "Applied the lineage-platform resilience playbook — circuit breakers, retry loops, autoscaling — at design time",
        "Added observability around publish latency and upstream error rates",
      ],
      impact: [
        "Gateway timeouts during publish sequences fully eliminated",
        "Resilience playbook adopted as a design-time standard for new services",
      ],
    },
  },
  {
    slug: "streaming-cdc-pipelines",
    title: "Streaming & CDC Pipelines",
    description:
      "Architected and implemented real-time streaming and Change Data Capture pipelines enabling near real-time data movement across distributed systems.",
    techStack: ["Kafka", "Flink", "CDC", "Dataproc", "Beam"],
    highlights: [
      "Real-time data movement",
      "CDC architecture design",
      "Distributed system integration",
    ],
    icon: "activity",
    caseStudy: {
      problem:
        "Batch-oriented data movement introduced hours of latency between operational systems and analytical consumers, limiting downstream use cases.",
      approach: [
        "Designed Change Data Capture architectures streaming operational changes through Kafka",
        "Built processing pipelines with Flink and Beam for enrichment and delivery",
        "Integrated pipelines with distributed storage and catalog systems",
      ],
      impact: [
        "Near real-time data movement across distributed systems",
        "Reusable CDC patterns adopted for new data sources",
      ],
    },
  },
  {
    slug: "kubernetes-queue-infrastructure",
    title: "Kubernetes Queue Infrastructure",
    description:
      "Designed scalable Kubernetes-based systems to manage custom queues, structuring environments to handle high volumes of heavy API-driven tasks with reliability and efficiency.",
    techStack: ["Kubernetes", "Docker", "Redis", "API Infrastructure"],
    highlights: [
      "High-volume task processing",
      "Custom queue management",
      "Scalable infrastructure design",
    ],
    icon: "server",
    caseStudy: {
      problem:
        "Heavy API-driven workloads needed elastic, reliable task execution that could absorb bursty demand without dropping work or over-provisioning.",
      approach: [
        "Designed custom queue semantics on Redis with Kubernetes worker fleets",
        "Structured environments and autoscaling for high-volume, heavy API tasks",
        "Added failure isolation so one noisy workload could not starve others",
      ],
      impact: [
        "Reliable high-volume task processing under bursty load",
        "Infrastructure pattern reused by the lineage platform's distributed refresh",
      ],
    },
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer (Software Engineer III)",
    company: "Wayfair",
    period: "Present",
    location: "Bengaluru, India",
    description:
      "Owning critical data platform systems and influencing broader architectural decisions across data engineering, streaming, and governance domains.",
    achievements: [
      "Took the data lineage platform from foundation to GA, re-architecting daily refresh into a distributed queue + Kubernetes pipeline for a 6× speedup",
      "Shipped core enrichment capabilities (profiling, code context) for AI-assisted data contract generation, plus bulk-generation CLI tooling",
      "Drove fleet-scale GCP onboarding via ~100 Terraform PRs across producer repositories with a repeatable AI-assisted workflow",
      "Eliminated gateway timeouts in the data-contract service with rate-limit-resilient publish sequences",
      "Influenced architectural decisions across data engineering and governance domains",
    ],
  },
];

export const focusAreas = [
  {
    title: "Data Contract Adoption",
    description:
      "Streamlining the developer experience to drastically lower friction for producer teams adopting data-mesh standards.",
  },
  {
    title: "End-to-End Data Journey",
    description:
      "Scaling lineage to map end-to-end data journeys across varied source ecosystems and complex cross-platform paths.",
  },
  {
    title: "Contract Quality & Fidelity",
    description:
      "Ensuring AI-generated contracts are qualitatively superior, highly precise, and richly contextual.",
  },
];

export const philosophyPoints = [
  {
    title: "Systems Thinking",
    description:
      "Evaluating solutions through cost, performance, maintainability, scalability, and business impact.",
    icon: "brain",
  },
  {
    title: "Proactive Resilience",
    description:
      "Designing circuit breakers, retries, and autoscaling in at design time — not as reactive patches.",
    icon: "shield",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Analytical by nature, preferring informed decisions backed by data and measurable outcomes.",
    icon: "bar-chart-3",
  },
  {
    title: "Operational Excellence",
    description:
      "Combining deep technical knowledge with practical focus on reliability and scalability.",
    icon: "target",
  },
];
