export const PROFILE = {
  name: "Praveenganth V",
  role: "Full Stack Developer",
  location: "Chennai, India",
  phone: "+91-9500915939",
  email: "vpraveenganth666@gmail.com",
  linkedin: "linkedin.com/in/praveenganth-v",
  github: "github.com/praveenganthp",
  headline: "Full Stack Developer with 2+ years of experience",
  summary:
    "Full Stack Developer with 2+ years of experience designing and building scalable, secure, and high-performance web applications for healthcare, AI, and SaaS products. Proficient in React.js, TypeScript, Node.js, Express.js, MongoDB, Redux Toolkit, and RTK Query.",
  about:
    "I'm Praveenganth V, a Full Stack Developer based in Chennai, India. I specialize in building scalable, secure, and high-performance web applications across healthcare, AI, and SaaS domains. I thrive in Agile teams, translating complex clinical and operational workflows into intuitive, production-ready software using React.js, TypeScript, Node.js, and MongoDB.",
};

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Material UI (MUI)", "Bootstrap", "Framer Motion", "GSAP"],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "RTK Query", "Context API", "Custom Hooks"],
  },
  {
    category: "Backend / Database",
    items: ["Node.js", "Express.js", "FastAPI (Python)", "MongoDB", "REST API Design"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "Chrome DevTools"],
  },
  {
    category: "Core Concepts",
    items: ["Atomic Design", "Responsive Design", "Performance Optimization", "JWT Auth", "WCAG 2.2", "Agile/Scrum"],
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Plenome Technologies Pvt Ltd",
    location: "Chennai, India",
    duration: "Mar 2024 – Present",
    description:
      "Engineered scalable, production-grade web applications using React.js, TypeScript, Redux Toolkit, Tailwind CSS, and MUI, shipping features across multiple enterprise product lines.",
    highlights: [
      "Architected a reusable frontend component library grounded in Atomic Design principles, eliminating duplicate UI code and enabling faster, more consistent feature delivery across teams.",
      "Engineered REST API integrations and authentication flows in close coordination with backend engineers, strengthening data reliability and simplifying frontend state management.",
      "Diagnosed and resolved performance and accessibility bottlenecks across production applications, improving page responsiveness and WCAG 2.2 compliance.",
      "Partnered with product managers, backend engineers, and QA within Agile sprints to translate business requirements into shipped, tested features.",
    ],
  },
  {
    id: 2,
    role: "Frontend Intern",
    company: "Automios",
    location: "Chennai, India",
    duration: "2023 – 2024",
    description:
      "Built and shipped production React.js features styled with Tailwind CSS under senior engineering mentorship, contributing directly to live releases.",
    highlights: [
      "Engineered reusable UI components and REST API integrations, improving consistency and reducing development time across responsive web interfaces.",
      "Debugged production issues and delivered features within Agile sprints, building a strong foundation in end-to-end SDLC practices.",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Transtan / OTMS",
    subtitle: "Organ Transplant Management System — Tamil Nadu Government",
    type: "Healthcare Platform",
    description:
      "A healthcare platform built for the Tamil Nadu Government to manage organ transplant workflows, hospital coordination, and sensitive medical data across multiple stakeholders.",
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "MUI",
      "Context API",
      "CSP Security",
    ],
    highlights: [
      "Engineered secure, production frontend modules powering organ transplant workflow management and hospital coordination for a Tamil Nadu Government healthcare platform.",
      "Hardened the application against client-side vulnerabilities by implementing CSP-compliant, XSS-resistant frontend architecture to protect sensitive medical and patient data.",
      "Led migration from Context API to Redux Toolkit and RTK Query to centralize state and resolve bottlenecks as the platform scaled.",
      "Designed a library of reusable, workflow-specific UI components standardizing development patterns across transplant management modules.",
    ],
    linkLive: "",
    linkGithub: "",
  },
  {
    id: 2,
    title: "Ashwin AI",
    subtitle: "AI-Powered Medical Documentation Platform",
    type: "AI / SaaS",
    description:
      "An AI-driven platform that converts doctor-patient conversations into structured medical documentation, reducing manual charting effort for clinicians.",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Python", "FastAPI"],
    highlights: [
      "Led frontend development for an AI-powered platform that transcribes doctor-patient conversations into structured clinical documentation.",
      "Built audio-recording and speech-to-text interfaces that auto-generate SOAP notes and case sheets, eliminating manual documentation steps for doctors.",
      "Integrated FastAPI backend services to support real-time AI processing and data handling within the frontend application.",
      "Engineered reusable UI components under Atomic Architecture, improving consistency and accelerating development velocity across the platform.",
    ],
    linkLive: "",
    linkGithub: "",
  },
  {
    id: 3,
    title: "Election SaaS Platform",
    subtitle: "Real-Time Election Monitoring — IITM Hostel",
    type: "SaaS Platform",
    description:
      "A multi-election SaaS platform enabling real-time vote tracking, bulk data management, and live administrative dashboards for institutional elections.",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "MQTT", "Tailwind CSS"],
    highlights: [
      "Engineered frontend modules powering a multi-election SaaS platform capable of managing concurrent elections on a single system.",
      "Integrated MQTT to stream live vote counts and election results in real time to administrators and monitors.",
      "Built CSV-based bulk upload workflows, streamlining candidate and voter data management for election administrators.",
      "Designed responsive, real-time dashboards and analytics views for election monitoring and reporting.",
    ],
    linkLive: "",
    linkGithub: "",
  },
  {
    id: 4,
    title: "Full Stack E-Commerce",
    subtitle: "Admin & Customer Web Application — Eyewear Business",
    type: "Full Stack",
    description:
      "A full stack e-commerce platform with separate admin and customer-facing modules supporting product inventory, and order management.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Built a full stack e-commerce platform with distinct admin and customer-facing portals using React.js, Node.js, Express.js, and MongoDB.",
      "Engineered inventory, product, and promotional-offer management systems powering the platform's admin operations.",
      "Implemented authentication, order management, and responsive product discovery features including filtering and listing pages for the customer portal.",
      "Collaborated across frontend and backend layers to maintain a clean, maintainable full stack architecture from schema design to UI.",
    ],
    linkLive: "",
    linkGithub: "",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Chemistry",
    institution: "Don Bosco College, Dharmapuri",
    duration: "2017 – 2020",
    score: "GPA: 8.4",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Full Stack Development (MERN)",
    issuer: "GUVI, Chennai",
    duration: "2022 – 2023",
    description: "Completed an intensive full-time course covering MongoDB, Express.js, React, and Node.js",
  },
  {
    title: "WCAG 2.2 — UI/UX Accessibility & Usability",
    issuer: "Online Certification",
    duration: "2023",
    description: "Certified in web accessibility standards and usability best practices for inclusive UI design",
  },
];
