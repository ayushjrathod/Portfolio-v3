export const site = {
  name: "Ayush Rathod",
  title: "AI & Software Engineer",
  tagline: "I build AI systems that actually ship.",
  url: "https://ayushjrathod.live",
  description:
    "Ayush Rathod — Full-stack software engineer building backend-heavy distributed systems and AI-integrated applications. Currently SWE Intern at DevDynamics.",
  ogImage:
    "https://res.cloudinary.com/cnserver/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1750407073/rwh3vitd2cyltekuz6qo.jpg",
  email: "ayushjrathod7@gmail.com",
  location: "Pune, India",
  social: {
    github: "https://github.com/ayushjrathod",
    linkedin: "https://linkedin.com/in/ayushjrathod",
    twitter: "https://x.com/ayushjrathod",
  },
} as const;

export const status = {
  label: "Available for opportunities",
  current: "SWE Intern at DevDynamics · Final year AI & DS, VIIT Pune",
};

export const aboutParagraphs = [
  "I'm a full-stack engineer drawn to backend-heavy systems and the messy parts of AI — the places where correctness, latency, and reliability actually matter once real users show up. I care about shipping things that hold up in production, not just polished demos.",
  "At DevDynamics I built an AST-based code analysis engine in TypeScript with Tree-sitter and AST-GREP, doing semantic impact analysis and dependency-graph construction across 19 languages for automated PR reviews. I then took the codebase context service from 4.5 GB peak RAM down to under 700 MB and from 2-minute cold starts to 30 seconds with a two-tier (LRU + DB-backed) cache. Alongside that: a production MCP server exposing engineering analytics to AI clients, and Stripe billing on RefactoAI.",
  "Right now I'm looking for teams working on hard backend, distributed-systems, or applied-AI problems — places where I can own features end-to-end and make measurable dents in real systems.",
];

export const techPills = [
  "TypeScript",
  "Python",
  "Go",
  "Next.js",
  "Node.js",
  "FastAPI",
  "GraphQL",
  "Kafka",
  "PostgreSQL",
  "Redis",
  "LangChain",
  "RAG",
  "AWS",
  "Docker",
];

export const workingPrinciples = [
  "I bias toward simple architectures that are easy to operate and extend.",
  "I care about measurable outcomes — latency, reliability, and product impact.",
  "I like owning the path from rough idea to shipped feature.",
] as const;

export const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Golang"],
  },
  {
    category: "Tech",
    skills: ["React.js", "Next.js", "Node.js", "FastAPI", "GraphQL"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka"],
  },
  {
    category: "Cloud/DevOps",
    skills: ["AWS", "GCP (Compute Engine)", "Docker", "GitHub Actions CI/CD", "Linux", "Bash"],
  },
  {
    category: "AI/ML",
    skills: ["LangChain", "LangGraph", "Transformers", "RAG"],
  },
] as const;

export const experience = [
  {
    id: "devdynamics",
    company: "DevDynamics",
    role: "Software Engineering Intern",
    location: "Pune, India",
    period: "Jul 2025 — Present",
    isCurrent: true,
    highlights: [
      "Built an AST-based code analysis engine in TypeScript with Tree-sitter and AST-GREP — semantic impact analysis, dependency graphs, and symbol-level change tracking across 19 languages, powering automated PR reviews.",
      "Cut peak RAM on the codebase context service from 4.5 GB to under 700 MB and processing time from 2 min to 30 sec via a two-tier (LRU + DB-backed) cache that persists parsed IRs across cold Lambda starts.",
      "Shipped an end-to-end MCP server exposing engineering-analytics metrics to AI clients with secure auth, unlocking automated AI-driven workflows.",
      "Integrated Stripe on RefactoAI for paid signups and recurring billing — plans, webhooks, proration, and grace-period handling.",
    ],
  },
  {
    id: "iaa",
    company: "Indian Aviation Academy",
    role: "Software Development Intern",
    location: "Remote · Delhi, India",
    period: "Jan 2025 — May 2025",
    isCurrent: false,
    highlights: [
      "Worked on Pradipti, a national internship portal serving 500+ interns; built an AI chatbot on FastAPI + Docker now handling 1000+ queries daily.",
      "Built and maintained a responsive Next.js frontend and Node.js / FastAPI backends on PostgreSQL, reliably handling 300+ daily transactions.",
    ],
  },
  {
    id: "dolphai",
    company: "DolphAI",
    role: "Full Stack Developer Intern",
    location: "Hybrid · Pune, India",
    period: "Jul 2024 — Dec 2024",
    isCurrent: false,
    highlights: [
      "Tracked down slow queries and N+1 hotspots, added the right indexes, and brought page load time from 3 s to under 1 s.",
      "Automated containerized AWS deployments (EC2, ALB, Auto Scaling, VPC, CloudWatch, S3) with Docker and GitHub Actions — faster, more reliable releases.",
    ],
  },
] as const;

export const projects = [
  {
    slug: "advista",
    name: "Advista",
    tagline: "AI advertisement research engine",
    description:
      "An automated ad-research platform that eliminates timeout issues in long-running AI workflows by offloading to a Celery + Redis async pipeline — keeping the UI responsive while research runs in the background.",
    bullets: [
      "End-to-end research pipeline that aggregates web data into structured, actionable marketing insights.",
      "Schema-validated LLM outputs (Zod) for reliable, consistent dashboards — no silent format drift.",
      "FastAPI + React on top of Celery workers and Redis, deployed in Docker on Azure.",
    ],
    tags: ["React", "FastAPI", "LangChain", "Celery", "Redis", "PostgreSQL", "Docker", "Azure"],
    links: {
      repositories: [
        {
          label: "Client",
          href: "https://github.com/ayushjrathod/Advista_client",
        },
        {
          label: "API",
          href: "https://github.com/ayushjrathod/Advista_api",
        },
      ],
      live: "https://advista.ayushjrathod.live/",
    },
  },
  {
    slug: "notify",
    name: "Microservice Notification System",
    tagline: "Kafka-backed pub/sub notifications for e-commerce",
    description:
      "A microservice notification platform built around Kafka, GraphQL, and JWT — designed for 2,000+ notifications/min with priority queues, dead letter handling, and first-class observability.",
    bullets: [
      "Designed a Kafka pub/sub architecture behind a GraphQL API with JWT auth, targeting 2,000+ notifications/min sustained throughput.",
      "Added priority-based delivery with dead letter queues and a recommendation layer on top of the delivery pipeline.",
      "Instrumented with Prometheus and Grafana for real-time monitoring and incident debugging.",
    ],
    tags: ["Node.js", "TypeScript", "GraphQL", "Kafka", "MongoDB", "Redis", "Docker"],
    links: {
      repositories: [
        {
          label: "GitHub",
          href: "https://github.com/ayushjrathod/ecommerce-distributed-backend",
        },
      ],
      live: "https://youtu.be/Od0cw2rYbsE" as string | null,
    },
  },
] as const;

export const awards = [
  {
    title: "Grand Finalist · Smart India Hackathon 2024",
    detail: "Top 5 nationally · AICTE, Ministry of Law & Justice",
  },
  {
    title: "5× Hackathon Winner",
    detail: "Scalable cloud-native and AI-driven solutions across events",
  },
] as const;
