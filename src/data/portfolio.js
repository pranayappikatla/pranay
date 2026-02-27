export const personalInfo = {
  name: "Pranay Appikatla",
  title: "DevOps Engineer",
  tagline: "Building resilient cloud infrastructure and AI-powered automation.",
  bio: "I'm a DevOps engineer focused on building resilient cloud infrastructure and leveraging AI to automate complex workflows. I specialize in AWS, container orchestration, and CI/CD pipelines — bridging the gap between development and operations to ship faster and more reliably.",
  email: "0pranay.appikatla0@gmail.com",
  github: "https://github.com/pranayappikatla",
  linkedin: "https://www.linkedin.com/in/pranay-appikatla/",
  location: "United States",
}

export const projects = [
  {
    id: 1,
    title: "NFT Marketplace",
    description:
      "Full-stack digital marketplace running on Ethereum via Polygon. Built with Next.js, smart contracts authored in Solidity and deployed via Hardhat, with IPFS for decentralized asset storage.",
    tags: ["Next.js", "Solidity", "Ethereum", "Polygon", "Hardhat"],
    github: "https://github.com/pranayappikatla/polygon-ethereum-nextjs-marketplace",
    live: "",
    featured: true,
    icon: "web",
  },
  {
    id: 2,
    title: "GrubDash Backend",
    description:
      "RESTful backend API for a food delivery platform. Features order and dish management, complex routing, validation middleware, and structured error handling built with Express.",
    tags: ["Node.js", "Express", "REST API", "JavaScript"],
    github: "https://github.com/pranayappikatla/grubdash-project",
    live: "",
    featured: true,
    icon: "terminal",
  },
  {
    id: 3,
    title: "Movies Backend",
    description:
      "Backend service for a movie catalog with full CRUD operations, layered architecture, and reusable validation middleware. Designed for clean separation of concerns and extensibility.",
    tags: ["Node.js", "Express", "REST API", "JavaScript"],
    github: "https://github.com/pranayappikatla/movies-backend-project",
    live: "",
    featured: true,
    icon: "terminal",
  },
  {
    id: 4,
    title: "Pomodoro Timer",
    description:
      "Productivity timer app built with React featuring configurable work/break intervals, session history tracking, and a clean, distraction-free UI.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/pranayappikatla/pomodoro-timer-project",
    live: "",
    featured: false,
    icon: "web",
  },
  {
    id: 5,
    title: "Decoder Ring",
    description:
      "JavaScript implementation of classical cipher algorithms — Caesar cipher, Polybius square, and Vigenère cipher — with comprehensive test coverage using Mocha and Chai.",
    tags: ["JavaScript", "Algorithms", "Mocha", "Chai"],
    github: "https://github.com/pranayappikatla/Project-Decoder-Ring",
    live: "",
    featured: false,
    icon: "terminal",
  },
  {
    id: 6,
    title: "AWS Cost Optimizer",
    description:
      "Automated cost analysis tool that scans AWS accounts for idle resources and rightsizing opportunities. Runs on a Lambda schedule, compiles a weekly report, and delivers actionable recommendations to Slack.",
    tags: ["Python", "AWS Lambda", "CloudWatch", "S3", "Slack API"],
    github: "https://github.com/pranayappikatla",
    live: "",
    featured: false,
    icon: "cloud",
  },
  {
    id: 7,
    title: "GitOps Deployment Pipeline",
    description:
      "Production-ready GitOps template using ArgoCD and Terraform for zero-downtime blue/green deployments on EKS. Includes automated rollback on health-check failure and environment promotion gates.",
    tags: ["Terraform", "ArgoCD", "GitHub Actions", "EKS", "Kubernetes"],
    github: "https://github.com/pranayappikatla",
    live: "",
    featured: false,
    icon: "terminal",
  },
  {
    id: 8,
    title: "AI Infrastructure Assistant",
    description:
      "LangChain-powered chatbot that ingests CloudWatch logs and runbooks to diagnose incidents and suggest remediation steps in natural language. Exposed via a FastAPI endpoint integrated with Slack.",
    tags: ["Python", "LangChain", "OpenAI API", "FastAPI", "CloudWatch"],
    github: "https://github.com/pranayappikatla",
    live: "",
    featured: false,
    icon: "web",
  },
  {
    id: 9,
    title: "Container Vulnerability Scanner",
    description:
      "CI pipeline integration that scans Docker images with Trivy on every pull request, blocks merges on critical CVEs, and posts a detailed remediation report directly to the GitHub PR as a comment.",
    tags: ["Python", "Docker", "Trivy", "GitHub Actions", "Bash"],
    github: "https://github.com/pranayappikatla",
    live: "",
    featured: false,
    icon: "terminal",
  },
]

export const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "EC2", "S3", "Lambda", "RDS", "CloudFormation", "Terraform"],
  },
  {
    category: "Containers & Orchestration",
    items: ["Docker", "Kubernetes", "Helm", "ECS", "EKS"],
  },
  {
    category: "CI/CD & Automation",
    items: ["GitHub Actions", "Jenkins", "ArgoCD", "GitLab CI", "Ansible"],
  },
  {
    category: "AI & ML",
    items: ["OpenAI API", "LangChain", "AWS Bedrock", "SageMaker", "Prompt Engineering"],
  },
  {
    category: "Languages & Scripting",
    items: ["Python", "Bash", "Go", "TypeScript", "SQL"],
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "CloudWatch", "Datadog", "ELK Stack"],
  },
]
