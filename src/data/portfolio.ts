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
      "LineageScript DSL",
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
      "Infrastructure as Code",
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
      "YAML/JSON Specs",
      "Terraform",
      "Git",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    title: "LineageScript DSL",
    description:
      "Designed and developed a custom Domain Specific Language (DSL) with a technical RFC for transforming raw data lineage into architectural lineage. Built collaborative YAML and JSON specifications enabling teams to define and manage lineage declaratively.",
    techStack: [
      "Custom DSL",
      "YAML",
      "JSON",
      "Python",
      "Data Lineage",
    ],
    highlights: [
      "Technical RFC authored and reviewed",
      "Transforms raw lineage to architectural lineage",
      "Collaborative specification design",
    ],
    icon: "git-branch",
  },
  {
    title: "Large-Scale Data Platform",
    description:
      "Built and owned critical systems for data movement and processing at Wayfair, contributing to significant infrastructure cost savings and platform modernization initiatives.",
    techStack: [
      "Apache Beam",
      "Dataflow",
      "Kafka",
      "GCP",
      "Python",
      "Java",
    ],
    highlights: [
      "Significant infrastructure cost savings",
      "Platform modernization at scale",
      "Improved reliability and performance",
    ],
    icon: "layers",
  },
  {
    title: "Metadata & Data Governance",
    description:
      "Developed comprehensive metadata management and data governance capabilities, including data quality frameworks and lineage tracking across the data ecosystem.",
    techStack: [
      "DataHub",
      "Dataplex",
      "Metadata APIs",
      "Data Quality",
    ],
    highlights: [
      "End-to-end data lineage tracking",
      "Automated data quality checks",
      "Governance at enterprise scale",
    ],
    icon: "shield-check",
  },
  {
    title: "Kubernetes Queue Infrastructure",
    description:
      "Designed scalable Kubernetes-based systems to manage custom queues, structuring environments to handle high volumes of heavy API-driven tasks with reliability and efficiency.",
    techStack: [
      "Kubernetes",
      "Docker",
      "Custom Queue System",
      "API Infrastructure",
    ],
    highlights: [
      "High-volume task processing",
      "Custom queue management",
      "Scalable infrastructure design",
    ],
    icon: "server",
  },
  {
    title: "Streaming & CDC Pipelines",
    description:
      "Architected and implemented real-time streaming and Change Data Capture pipelines enabling near real-time data movement across distributed systems.",
    techStack: [
      "Kafka",
      "Flink",
      "CDC",
      "Dataproc",
      "Beam",
    ],
    highlights: [
      "Real-time data movement",
      "CDC architecture design",
      "Distributed system integration",
    ],
    icon: "activity",
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
      "Led platform modernization initiatives delivering significant infrastructure cost savings",
      "Designed and built LineageScript DSL for transforming raw data lineage into architectural lineage",
      "Owned critical data movement and processing systems at enterprise scale",
      "Influenced architectural decisions across data engineering and governance domains",
      "Built expertise across Apache Beam, Dataflow, Kafka, Flink, DataHub, and cloud-native engineering",
    ],
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
  {
    title: "Continuous Growth",
    description:
      "Pursuing objectives with discipline across career, technical skills, and personal development.",
    icon: "trending-up",
  },
];
