export const site = {
  name: "Ajith Ravi",
  role: "Software Engineer · Data Scientist",
  location: "Bangalore, India",
  email: "ajithravi.aj@gmail.com",
  phone: "+91 73582 17621",
  linkedin: "https://linkedin.com/in/ajith-ravi",
  github: "https://github.com/ajith-ravi",
  medium:
    "https://medium.com/safe-engineering", // Safe Engineering publication
  tagline: "I make heavy systems light.",
  sub: "Data platform and backend engineer at Safe Security. I take systems that are slow, expensive or stuck, find the real bottleneck, and rebuild them so the numbers change: 75% off a platform bill, 180 seconds down to 5, one hour deploys down to five minutes.",
};

export const metrics = [
  { value: "75%", label: "platform cost cut", detail: "$120k to $30k / month, Snowflake lakehouse" },
  { value: "36x", label: "faster APIs", detail: "180s to under 5s with Python multiprocessing" },
  { value: "5x", label: "simulation scale", detail: "10K to 50K runs on SQS, sub-second latency" },
  { value: "12x", label: "faster deploys", detail: "~1 hour to ~5 minutes, CDK to Terraform" },
];

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  problem: string;
  built: string[];
  challenge: string;
  result: string;
  stack: string[];
  accent: "bronze" | "silver" | "gold" | "signal";
};

export const caseStudies: CaseStudy[] = [
  {
    id: "udl",
    index: "CS-01",
    title: "Unified Data Layer",
    kicker: "An enterprise lakehouse that tracks every record-level change",
    problem:
      "Safe Security needed \u201cSee What Changed\u201d: a single data platform that could answer what changed, where, and when across the whole product, over roughly 2 TB of data with 180 GB incremental loads.",
    built: [
      "A three-tier Medallion lakehouse (Bronze, Silver, Gold) on Snowflake with AWS S3 storage and data quality enforcement at every layer",
      "A schema-per-tenant model: one stack per database, one tenant per schema, with tenant-scoped roles enforcing RBAC isolation",
      "Gold layer aggregation pipelines that publish business-ready analytical datasets optimized for Snowflake querying",
      "A CDC migration off Debezium + Kafka onto AWS DMS, simplifying ingestion into the Bronze layer",
    ],
    challenge:
      "The platform bill. Storage sprawl and redundant tables had pushed cost to about $120,000 a month. I audited the layer by layer usage, removed redundant tables and restructured storage.",
    result:
      "Shipped to production. Monthly cost dropped 75%, from about $120k to $30k. Now designing cross-region replication with Dynamic Tables so a 500 GB dataset growing 50 GB a day is queryable locally in Frankfurt, Mumbai and Sydney with a single SQL JOIN.",
    stack: ["Snowflake", "AWS S3", "AWS DMS", "Dynamic Tables", "Medallion Architecture", "SQL"],
    accent: "gold",
  },
  {
    id: "risk-engine",
    index: "CS-02",
    title: "Cyber-Risk Simulation Engine",
    kicker: "Probabilistic risk models that answer in seconds, not minutes",
    problem:
      "Quantifying cyber risk means running Monte Carlo and PERT simulations across likelihood and loss models. The APIs took over 180 seconds per call, past API Gateway timeout limits, and capped out at 10K simulations.",
    built: [
      "The FAIR (Factor Analysis of Information Risk) engine with PERT simulations, applying probabilistic analysis at driver-level granularity",
      "Python multiprocessing across the simulation hot path to parallelize the heavy math",
      "An SQS-based asynchronous architecture with client-side polling for fault-tolerant, horizontally scalable processing",
      "A hybrid AWS Lambda + ECS deployment behind FastAPI, with CI/CD moved from Jenkins to GitHub Actions",
    ],
    challenge:
      "Latency and scale pulled in opposite directions: more simulations meant slower responses. Splitting the synchronous path (fast answers) from the asynchronous path (deep runs) resolved the conflict.",
    result:
      "Response latency fell from 180+ seconds to under 5. Simulation capacity grew from 10K to 50K runs while holding sub-second polling latency. Infrastructure cost fell 67%, from $7,500 to $2,500 a month.",
    stack: ["Python", "FastAPI", "AWS Lambda", "ECS", "SQS", "Terraform", "Monte Carlo"],
    accent: "signal",
  },
  {
    id: "model-engine",
    index: "CS-03",
    title: "Dynamic Model Execution Engine",
    kicker: "Custom risk models integrated in hours instead of weeks",
    problem:
      "Every customer's Excel-based risk model needed hand-written, hardcoded logic before it could run on the platform. Each integration took weeks of engineering time.",
    built: [
      "A dynamic execution engine in Python that parses custom Excel risk models and runs them automatically, no hardcoded logic per model",
      "A ServiceNow IRM integration in GlideScript with bi-directional sync of risk scenarios and groups, down to one-click automation",
      "Golang RESTful APIs for questionnaire management: profile creation and management across multiple questionnaire sources on a microservices architecture",
    ],
    challenge:
      "Excel models are arbitrary: formulas, ranges and structures differ per customer. The engine had to infer model structure and execution order instead of assuming it.",
    result:
      "Model integration time went from weeks to hours, turning a bespoke engineering task into a repeatable pipeline, and opened bi-directional risk sync with enterprise ServiceNow deployments.",
    stack: ["Python", "Golang", "GlideScript", "MySQL", "REST APIs", "Microservices"],
    accent: "silver",
  },
  {
    id: "agents",
    index: "CS-04",
    title: "Multi-Agent Code Review",
    kicker: "Review agents that argue with each other before touching your code",
    problem:
      "Single-pass AI code review is shallow: one model, one opinion, straight to comments. I wanted reviews that behave more like a real review panel.",
    built: [
      "A multi-agent PR review runner where an orchestrator spawns several review agents that inspect a PR, exchange findings, and must converge on one decision before any edit is applied",
      "An earlier GitHub App review bot on Gemini 1.5 Pro: analyzes PR diffs and leaves line-specific feedback on bugs, style violations and optimization opportunities",
      "Secure GitHub App auth with dynamic token refreshing and structured parsing of model output",
    ],
    challenge:
      "Disagreement handling. Agents that simply vote produce noise; these agents exchange findings and resolve conflicts first, so the final review reflects a combined judgment rather than a single pass.",
    result:
      "A working review pipeline where no change lands without multi-agent consensus, plus a production-pattern GitHub App with real line-level review comments.",
    stack: ["Python", "LLM Agents", "Gemini API", "GitHub App API"],
    accent: "bronze",
  },
];

export const approach = [
  {
    title: "Measure before touching anything",
    body: "Every rebuild starts with a number: $120k a month, 180 seconds, 1 hour per deploy. If the bottleneck is not measured, the fix is a guess.",
  },
  {
    title: "Find the expensive assumption",
    body: "The redundant tables nobody questioned. The hardcoded per-customer logic. The synchronous path forced onto async work. Most heavy systems carry one assumption doing most of the damage.",
  },
  {
    title: "Rebuild the path, not the world",
    body: "Debezium + Kafka became DMS. CDK became Terraform. Jenkins became GitHub Actions. Swapping the load-bearing piece beats rewriting everything around it.",
  },
  {
    title: "Prove it with the same number",
    body: "The metric that exposed the problem is the metric that closes it: $30k, 5 seconds, 5 minutes. If the number did not move, the work is not done.",
  },
];

export const experience = [
  {
    period: "Aug 2025 \u2013 Present",
    role: "Software Development Engineer II",
    org: "Safe Security, Bangalore",
    points: [
      "Shipped the Unified Data Layer to production: a Snowflake + S3 lakehouse tracking record-level change across the product (~2 TB, 180 GB incremental)",
      "Cut monthly platform cost 75% ($120k to $30k) by removing redundant tables and restructuring storage",
      "Designing cross-region replication of a 500 GB dataset (growing 50 GB/day) into Frankfurt, Mumbai and Sydney via Dynamic Tables",
    ],
  },
  {
    period: "Aug 2023 \u2013 Aug 2025",
    role: "Software Development Engineer I",
    org: "Safe Security, Bangalore",
    points: [
      "Led the FAIR risk engine: PERT simulations with driver-level probabilistic analysis across likelihood and loss models",
      "Scaled simulation processing 10K to 50K runs on an SQS async architecture; cut scoring infra cost 67% ($7.5k to $2.5k/month)",
      "Built the dynamic Excel model execution engine (weeks to hours) and Golang microservices for questionnaire management",
      "Hackathon (Team SAGA): cut deployment time ~1 hour to ~5 minutes; git checkout 4 minutes to 5 seconds; 15 parallel migrations",
    ],
  },
  {
    period: "Jun 2022 \u2013 Jul 2023",
    role: "Data Scientist",
    org: "Safe Security, Bangalore",
    points: [
      "Built probabilistic cyber-risk scoring with Monte Carlo simulations, deployed on Lambda + API Gateway",
      "Cut simulation API latency from 180+ seconds to under 5 with Python multiprocessing",
      "Automated the Boost Insurance model integration, reducing manual processing time by 80%; contributed to P-State research on MITRE ATT&CK",
    ],
  },
  {
    period: "2018 \u2013 2022",
    role: "B.Tech, Aerospace Engineering",
    org: "IIT Bombay",
    points: [
      "Minor in Industrial Design (IDC). 97.8 percentile in JEE Advanced among 230,000+ candidates",
      "ML research on composite stress-strain analysis; published a T20 cricket analytics paper at NCMDAO 2024, IIT Guwahati",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Golang", "SQL", "TypeScript", "GlideScript", "C++"],
  },
  {
    group: "Data Engineering",
    items: ["Snowflake", "Snowpark", "Dynamic Tables", "Medallion Architecture", "Spark", "Kafka", "Debezium", "AWS DMS"],
  },
  {
    group: "Cloud & Infrastructure",
    items: ["AWS Lambda", "ECS", "S3", "SQS", "API Gateway", "GCP", "Docker", "Terraform", "GitHub Actions"],
  },
  {
    group: "AI / ML",
    items: ["Monte Carlo Simulation", "Statistical Modeling", "LLM Agents", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Flask", "REST APIs", "Microservices", "MySQL", "SQLAlchemy"],
  },
];

export const writing = [
  {
    title: "Building Cloud-Native Python Backends: Flexibility Between AWS Lambda and ECS with FastAPI",
    venue: "Safe Engineering, Medium",
    note: "Architectural patterns for FastAPI backends that run on both Lambda and ECS, with deployment trade-offs and cold-start mitigation.",
  },
  {
    title: "Quantifying Player Performance and Optimizing Team Selection in Fantasy T20 Cricket",
    venue: "NCMDAO 2024, IIT Guwahati",
    note: "A data-driven framework for T20 player performance with an optimization model for team selection.",
  },
];

export const achievements = [
  {
    title: "75% platform cost reduction",
    detail: "Cut Safe Security's monthly data platform bill from about $120,000 to $30,000 by removing redundant tables and restructuring Snowflake storage.",
    tag: "Production impact",
  },
  {
    title: "Hackathon lead, Team SAGA",
    detail: "Led an infrastructure optimization that cut deployment time 90% (about 1 hour to 5 minutes) and git checkout from 4 minutes to 5 seconds.",
    tag: "Safe Security Internal Hackathon 2024",
  },
  {
    title: "Published researcher",
    detail: "Presented a data-driven T20 cricket performance and team-optimization framework at NCMDAO 2024, IIT Guwahati (Paper ID 70).",
    tag: "NCMDAO 2024",
  },
  {
    title: "Technical writer, Safe Engineering",
    detail: "Published architectural patterns for FastAPI backends running on both AWS Lambda and ECS, covering deployment trade-offs and cold-start mitigation.",
    tag: "Medium",
  },
  {
    title: "JEE Advanced, 97.8 percentile",
    detail: "Ranked in the top 2.2% among more than 230,000 candidates nationwide (2018), earning a seat at IIT Bombay.",
    tag: "IIT Bombay",
  },
  {
    title: "Minor in Industrial Design",
    detail: "Completed a minor at the Industrial Design Centre (IDC), IIT Bombay, alongside a B.Tech in Aerospace Engineering.",
    tag: "IDC, IIT Bombay",
  },
  {
    title: "Three letters of recommendation",
    detail: "Recognized by founders and senior leaders at SimplyAI, Celebal Technologies, and SoAI for problem solving and analytical skill during internships.",
    tag: "Internships 2020-2021",
  },
];
