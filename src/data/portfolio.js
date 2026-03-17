export const personalInfo = {
  name: "Pranay Appikatla",
  title: "React Developer",
  tagline: "Building fast, accessible, and beautiful web experiences with React.",
  bio: "I'm a React developer who loves crafting intuitive user interfaces and scalable front-end architectures. I specialize in React, Next.js, and TypeScript — turning complex problems into clean, performant web apps that users enjoy.",
  email: "0pranay.appikatla0@gmail.com",
  github: "https://github.com/pranayappikatla",
  linkedin: "https://www.linkedin.com/in/pranay-appikatla/",
  location: "United States",
}

export const projects = [
  {
    id: 7,
    title: "KeyVerse Bible",
    description:
      "A Bible verse discovery app that lets you search, explore, and save key verses — vibe coded from scratch. Built with React and deployed as a live web app.",
    tags: ["React", "JavaScript", "Vibe Coded", "AWS Bedrock", "AWS Basics"],
    github: "https://github.com/pranayappikatla",
    live: "https://keyversebible.org",
    featured: true,
    icon: "web",
  },
  {
    id: 1,
    title: "NFT Marketplace",
    description:
      "Full-stack digital marketplace built with Next.js and React. Features wallet integration, dynamic NFT listings, and real-time bidding — backed by Solidity smart contracts on Polygon and IPFS for decentralized asset storage.",
    tags: ["Next.js", "React", "Solidity", "Ethereum", "Polygon"],
    github: "https://github.com/pranayappikatla/polygon-ethereum-nextjs-marketplace",
    live: "",
    featured: true,
    icon: "web",
  },
  {
    id: 4,
    title: "Pomodoro Timer",
    description:
      "Productivity timer app built with React featuring configurable work/break intervals, session history tracking, and a clean, distraction-free UI.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/pranayappikatla/pomodoro-timer-project",
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
    featured: false,
    icon: "terminal",
  },
  {
    id: 5,
    title: "Decoder Ring",
    description:
      "JavaScript implementation of classical cipher algorithms — Caesar cipher, Polybius square, and Vigenère cipher — with comprehensive test coverage using Mocha and Chai.",
    tags: ["JavaScript", "Algorithms", "Mocha", "Chai"],
    github: "https://github.com/pranayappikatla/Project-Decoder-Ring",
    live: "https://pranayappikatla.github.io/Project-Decoder-Ring/",
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
]

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Styled Components", "Framer Motion", "Responsive Design", "Accessibility"],
  },
  {
    category: "State & Data",
    items: ["React Query", "Redux", "Zustand", "Context API", "REST APIs", "GraphQL"],
  },
  {
    category: "Tooling & Testing",
    items: ["Vite", "Webpack", "Jest", "React Testing Library", "Mocha", "Chai"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "SQL", "Knex.js", "PostgreSQL", "Firebase"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Git", "GitHub Actions", "AWS", "Docker", "Vercel", "Netlify"],
  },
]
