export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string[];
    location: string;
    status: string;
    email: string;
    stats: { label: string; value: string }[];
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Morgan",
    title: "Full-Stack Developer & Software Architect",
    tagline: "Crafting fast, accessible, and elegant web experiences from database to pixels.",
    bio: [
      "Hello! I am a software engineer passionate about building modern web applications, scalable backends, and intuitive user interfaces. With an emphasis on performance and developer experience, I transform complex ideas into reliable digital products.",
      "When I am not coding, you can find me exploring open-source tools, writing technical articles, or experimenting with new web technologies like Astro, Rust, and serverless architectures."
    ],
    location: "San Francisco, CA / Remote",
    status: "Available for new opportunities",
    email: "alex.morgan@example.com",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "30+" },
      { label: "Open Source Contributions", value: "100+" },
      { label: "Client Satisfaction", value: "100%" }
    ]
  },
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:alex.morgan@example.com"
  },
  skills: [
    {
      category: "Frontend Development",
      skills: ["Astro", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"]
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "Prisma", "GraphQL", "Redis"]
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Git", "GitHub Actions", "Vercel", "AWS (S3, Lambda)", "Cloudflare Workers"]
    },
    {
      category: "Design & Practices",
      skills: ["Responsive Design", "Web Accessibility (a11y)", "UI/UX Prototyping", "RESTful Architecture", "Testing (Vitest, Playwright)"]
    }
  ],
  projects: [
    {
      title: "DevPulse - Developer Productivity Hub",
      description: "A centralized dashboard for developers to track GitHub pull requests, CI/CD pipeline statuses, and team metrics in real-time.",
      tags: ["Astro", "TypeScript", "Tailwind CSS", "GitHub API"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Reduced context switching by 40% across active sprint cycles",
        "Sub-100ms response times powered by static generation and edge cache"
      ]
    },
    {
      title: "FlowState - Task & Workflow Automation",
      description: "Lightweight visual workflow builder allowing users to automate routine tasks with webhook triggers and third-party integrations.",
      tags: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Interactive node graph with drag-and-drop workflow canvas",
        "Zero-latency optimistic UI updates"
      ]
    },
    {
      title: "Zenith - Minimalist Markdown Note Taking",
      description: "Fast, keyboard-first markdown editor with end-to-end encryption, offline synchronization, and instant full-text search.",
      tags: ["TypeScript", "IndexedDB", "Tailwind CSS", "Web Workers"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "100% offline-first capability via progressive web app architecture",
        "Instant search indexing 10,000+ notes in under 15ms"
      ]
    },
    {
      title: "Aurora Component Library",
      description: "An accessible, themeable UI component library designed for rapid prototyping with seamless Astro and Tailwind support.",
      tags: ["Astro", "Tailwind CSS", "Accessibility", "NPM Package"],
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "TechNova Solutions",
      period: "2023 - Present",
      description: "Lead front-end architecture and modern web application development. Mentored junior engineers, established code review standards, and optimized Core Web Vitals across flagship products.",
      technologies: ["Astro", "TypeScript", "React", "Tailwind CSS", "GraphQL"]
    },
    {
      role: "Full-Stack Developer",
      company: "HyperScale Digital",
      period: "2021 - 2023",
      description: "Designed and implemented high-throughput REST APIs and responsive web apps. Collaborated closely with product designers to ship features from initial wireframes to production deployments.",
      technologies: ["Node.js", "PostgreSQL", "Next.js", "Docker", "AWS"]
    },
    {
      role: "Junior Web Developer",
      company: "Apex Studio",
      period: "2019 - 2021",
      description: "Developed and maintained client websites, optimized asset pipelines, and built custom landing pages with clean HTML, CSS, and modern JavaScript.",
      technologies: ["JavaScript", "HTML5", "Sass", "Git", "WordPress"]
    }
  ]
};
