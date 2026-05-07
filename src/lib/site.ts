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
] as const;

export const projects = [
  {
    slug: "advista",
    name: "Advista",
    tagline: "AI competitive intelligence platform",
    description:
      "Built for marketers who need real intelligence, not summaries. Runs async multi-source research in the background so the UI stays live, then delivers structured 7-section market reports tied to a persisted session history.",
    bullets: [
      "LangGraph agentic workflow with Zod schema-enforced LLM extraction keeps every report section consistent and predictably structured across runs.",
      "Celery + Redis task queue decouples Groq inference from the HTTP cycle; the client polls a job-status endpoint while workers handle multi-source synthesis.",
      "Firebase Auth scopes each session and artifact to a verified user; containerized in Docker and deployed on AWS Lambda with Prisma/Postgres persistence.",
    ],
    tags: ["FastAPI", "LangGraph", "Groq", "Celery", "Redis", "React", "PostgreSQL", "Prisma", "Firebase", "Docker", "AWS Lambda"],
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
      live: "https://advista.ayushjrathod.live/" as string | null,
    },
  },
  {
    slug: "valuex",
    name: "ValueX",
    tagline: "Wealth management AI microservice",
    description:
      "A wealth management API built without frameworks: a raw intent classifier, 8 specialist agents, and disciplined cost control from the ground up.",
    bullets: [
      "Single LLM call maps each query to 1 of 8 specialist agents; a pre-LLM safety guard blocks unsafe inputs in under 10ms before any inference runs.",
      "SSE streaming delivers p95 first-token latency under 2s while holding a hard $0.05/query cost ceiling at gpt-4.1 pricing.",
      "100+ labeled eval queries with ≥85% routing accuracy and ≥95% safety recall; CI mocks the LLM layer so guard and routing logic are tested on every push.",
    ],
    tags: ["FastAPI", "Python", "OpenAI", "SSE", "pytest"],
    links: {
      repositories: [
        {
          label: "GitHub",
          href: "https://github.com/ayushjrathod/ValueX",
        },
      ],
      live: null as string | null,
    },
  },
  {
    slug: "querypilot",
    name: "QueryPilot",
    tagline: "Perplexity-style deep research assistant",
    description:
      "Ask a question, get a sourced answer streamed in real time. Full-stack research engine with structured citations and persistent authenticated sessions.",
    bullets: [
      "Tavily advanced-depth search feeds a Gemini 2.5 Flash streaming pipeline; citation objects (title + URL) appended as structured JSON at stream end, not inlined.",
      "bcrypt accounts with JWT auth; each query and its citation list stored in Postgres via Prisma, with full history queryable per user.",
      "Monorepo on Bun: Express 5 API + React 19 / React Router 7 / Tailwind 4 client, both bundled natively with hot reload in dev.",
    ],
    tags: ["TypeScript", "Bun", "Google Gemini", "Tavily", "PostgreSQL", "Prisma", "React", "Express"],
    links: {
      repositories: [
        {
          label: "GitHub",
          href: "https://github.com/ayushjrathod/QueryPilot-deep-research-assistant",
        },
      ],
      live: null as string | null,
    },
  },
  {
    slug: "notify",
    name: "Microservice Notification System",
    tagline: "Kafka-backed pub/sub notifications for e-commerce",
    description:
      "A microservice notification platform engineered for 2,000+ msg/min sustained throughput, with priority delivery, dead letter handling, and real-time observability.",
    bullets: [
      "Kafka consumer groups partition traffic by priority tier; failed deliveries route to dead letter queues with configurable retry and reprocessing.",
      "GraphQL API with JWT auth exposes subscription management and delivery status without coupling consumers to Kafka internals.",
      "Prometheus + Grafana dashboards track throughput, consumer lag, and error rate in real time for operational debugging.",
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
