export const PERSONAL = {
  name: "Aviraj Saxena",
  tagline: "I build things for the web - and sometimes, things that think.",
  bio: "Final-year CS student at Amity University, Lucknow. I'm a curious being who likes to explore and learn everything - from crafting clean frontends to building AI-powered systems. Open-source contributor, community leader, and occasional researcher.",
  location: "Lucknow, Uttar Pradesh, India",
  email: "aviraj.saxena243@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/theavirajsaxena",
    linkedin: "https://linkedin.com/in/theavirajsaxena",
    twitter: "https://x.com/theavirajsaxena"
  }
} as const;

export const SKILLS = {
  Languages: ["Java", "Python", "JavaScript", "SQL"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Databases: ["MySQL", "MongoDB"],
  "Tools & Platforms": ["Git", "GitHub", "Linux", "Vercel", "Netlify", "Figma"]
} as const;

export const EXPERIENCE = [
  {
    company: "Snapverse",
    role: "Frontend Developer Intern",
    duration: "May 2025 - August 2025",
    location: "Remote",
    bullets: [
      "Developed and improved responsive frontend components using React.js, JavaScript, HTML, and CSS.",
      "Collaborated via Git/GitHub in an Agile environment, contributing to UI enhancements and feature integration.",
      "Participated in debugging, testing, and optimizing frontend workflows to improve UX and performance."
    ],
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Git"]
  }
] as const;

export const PROJECTS = [
  {
    name: "CineSphere",
    description:
      "A full-stack movie discovery platform built with Next.js, TMDB API, and AI-powered recommendations - featuring responsive UI and authentication.",
    tech: ["Next.js", "TMDB API", "AI", "Tailwind CSS"],
    liveUrl: "https://cinesphere.avirajsaxena.dev",
    githubUrl: "https://github.com/theavirajsaxena/cinesphere",
    status: "Live"
  },
  {
    name: "DocTor",
    description:
      "A RAG-based document Q&A system using vector embeddings, hybrid retrieval, and citation-aware response generation for technical documents.",
    tech: ["Python", "RAG", "Vector DB", "LLM"],
    liveUrl: "https://doctor.avirajsaxena.dev",
    githubUrl: "https://github.com/theavirajsaxena/doctor",
    status: "Live"
  }
] as const;

export const VOLUNTEERING = [
  {
    org: "ALiAS - Amity Linux Assistance Sapience",
    role: "Lead Volunteer & President",
    duration: "Nov 2022 - Present",
    bullets: [
      "Led and organised workshops on Python, Git/GitHub, Figma, AI/ML, and Linux Install Fest."
    ]
  },
  {
    org: "FOSS United Lucknow",
    role: "Volunteer",
    duration: "May 2024 - Present",
    bullets: [
      "Helped establish Lucknow's first FOSS community through regular meetups and collaborations.",
      "Organized the city's first FOSS Conference with IIIT Lucknow - 200+ attendees including the CTO of Zerodha and co-founder of FOSS United."
    ]
  },
  {
    org: "Amity University",
    role: "Placement Coordinator",
    duration: "Jul 2025 - Present",
    bullets: [
      "Coordinating placement activities and student engagement in collaboration with the Training & Placement Cell."
    ]
  }
] as const;

export const PUBLICATIONS = [
  {
    title: "Early Risk Detection for Heart Disease Using AI",
    venue: "SCI-2026 (Scopus-indexed), Swinburne Vietnam",
    award: "Best Paper Award"
  }
] as const;
