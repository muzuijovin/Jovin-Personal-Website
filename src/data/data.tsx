import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

/* Navbar */

export interface ButtonNavbar {
  label: string;
  tittle: string;
  url: string;
}

export const buttonNavbar: ButtonNavbar[] = [
  {
    label: "about",
    tittle: "About",
    url: "#aboutSection",
  },
  {
    label: "skills",
    tittle: "Skills",
    url: "#skillsSection",
  },
  {
    label: "portofolio",
    tittle: "Portofolio",
    url: "#portofolioSection",
  },
  {
    label: "experience",
    tittle: "Experience",
    url: "#experienceSection",
  },
  {
    label: "testimonials",
    tittle: "Testimonials",
    url: "#testimonialsSection",
  },
  {
    label: "contact",
    tittle: "Contact",
    url: "#contactSection",
  },
];

/* Navbar notifications (bell). Add new updates at the top. */
export interface Notification {
  id: number;
  tag: string;
  title: string;
  description: string;
  href: string;
}

export const notifications: Notification[] = [
  {
    id: 5,
    tag: "New Project",
    title: "Pinkara Studio is live",
    description:
      "A full-stack e-commerce site for a florist in Malang: checkout, QRIS/VA payments, shipping, custom orders and an admin panel.",
    href: "#portofolioSection",
  },
  {
    id: 4,
    tag: "Live",
    title: "JOVLEN is live",
    description:
      "My full-stack sports event ticketing platform built with Next.js, Express, PostgreSQL and Prisma.",
    href: "#portofolioSection",
  },
  {
    id: 2,
    tag: "Live",
    title: "Kopi Nusa is live",
    description:
      "Company profile for an artisanal coffee roastery, with an admin blog CMS.",
    href: "#portofolioSection",
  },
  {
    id: 1,
    tag: "Open to Work",
    title: "Available for full-time & internship roles",
    description: "Let's talk about how I can help your team ship.",
    href: "#contactSection",
  },
];

/* heroSection */

export interface PointPlus {
  label: string;
  hsatu: string;
  paragraph: string;
}

export const pointPlus: PointPlus[] = [
  {
    label: "kotak 1",
    hsatu: "99.9%",
    paragraph: "Architecture Reliability",
  },
  {
    label: "kotak 2",
    hsatu: "ES6+",
    paragraph: "Modern Web Standard",
  },
  {
    label: "kotak 3",
    hsatu: "Type-Safe",
    paragraph: "clean scalable",
  },
];

/* aboutSection */
export interface AboutPoint {
  tittle: string;
  isi: string;
}

export const aboutPoint: AboutPoint[] = [
  {
    tittle: "block 1",
    isi: "Analytical Thinking",
  },
  {
    tittle: "block 2",
    isi: "Problem-Solving",
  },
  {
    tittle: "block 3",
    isi: "Teamwork",
  },
  {
    tittle: "block 4",
    isi: "Time Management",
  },
];

export interface Education {
  institution: string;
  program: string;
  period: string;
  note?: string;
}

export const education: Education[] = [
  {
    institution: "Purwadhika Digital Technology School",
    program: "Full-Stack Web Development Program",
    period: "Aug 2026 – Present",
    note: "Expected completion: Dec 2026",
  },
  {
    institution: "Harisenin.com",
    program: "Full Stack Developer Bootcamp",
    period: "Nov 2025 – Feb 2026",
  },
  {
    institution: "Brawijaya University",
    program: "Bachelor's Degree, Fisheries Product Technology",
    period: "Aug 2021 – Aug 2025",
    note: "GPA 3.39 / 4.00",
  },
];

/* skillsSection */
export interface SkillsLayout {
  tittle: string;
  hsatu: string;
  paragraph: string;
  spansatu: string;
  spandua: string;
  spantiga: string;
  kolompertama: string;
  kolomdua: string;
  kolomtiga: string;
}

export interface TechCloud {
  title: string;
  box: string;
  icon: IconType;
  color: string;
}

export const skillsLayout: SkillsLayout[] = [
  {
    tittle: "front end",
    hsatu: "Front-End Engineering",
    paragraph:
      "Responsive, accessible interfaces built on a component-based architecture, typed end to end and refined with purposeful motion.",
    spansatu: "React / Next.js (App Router)",
    spandua: "TypeScript / JavaScript ES6+",
    spantiga: "Tailwind CSS / HTML5 / CSS3",
    kolompertama: "Framer Motion",
    kolomdua: "React Hook Form + Zod",
    kolomtiga: "React Native (basic)",
  },
  {
    tittle: "Back end",
    hsatu: "Back-End Development",
    paragraph:
      "RESTful services and relational data models designed for clarity, data integrity, and room to grow.",
    spansatu: "Node.js / Express.js",
    spandua: "PostgreSQL / Prisma ORM",
    spantiga: "RESTful API & CRUD",
    kolompertama: "Relational DB Design",
    kolomdua: "SQL",
    kolomtiga: "WebSocket",
  },
  {
    tittle: "tools and deployment",
    hsatu: "Tools & Deployment",
    paragraph:
      "A disciplined Git workflow and Git-based continuous deployment to ship features incrementally and reliably.",
    spansatu: "Git & GitHub Workflow",
    spandua: "Vercel Deployment (CD)",
    spantiga: "VS Code",
    kolompertama: "Branching Strategy",
    kolomdua: "Mailer Integration",
    kolomtiga: "Testing & Deployment",
  },
];

export const techCloud: TechCloud[] = [
  { title: "tech1", box: "React", icon: SiReact, color: "#61DAFB" },
  { title: "tech2", box: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { title: "tech3", box: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { title: "tech4", box: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { title: "tech5", box: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { title: "tech6", box: "CSS3", icon: SiCss, color: "#2965F1" },
  { title: "tech7", box: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { title: "tech8", box: "Framer Motion", icon: SiFramer, color: "#FFFFFF" },
  { title: "tech9", box: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
  { title: "tech10", box: "Zod", icon: SiZod, color: "#6E9BF5" },
  { title: "tech11", box: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { title: "tech12", box: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { title: "tech13", box: "PostgreSQL", icon: SiPostgresql, color: "#699ECA" },
  { title: "tech14", box: "Prisma ORM", icon: SiPrisma, color: "#FFFFFF" },
  { title: "tech15", box: "REST API", icon: TbApi, color: "#4FDBC8" },
  { title: "tech16", box: "Git", icon: SiGit, color: "#F05032" },
  { title: "tech17", box: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { title: "tech18", box: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { title: "tech19", box: "VS Code", icon: VscVscode, color: "#23A9F2" },
];

/* portofolioSection */
export interface UsingTools {
  tittle: string;
  bahasaProgram: string;
}

export interface StarCase {
  tittle: string;
  logo: string;
  paragraph: string;
  starcase: string;
  titlestar: string;
}

/*untuk protofolio */
interface PortfolioData {
  id: number;
  status: string;
  title: string;
  description: string;
  tags: string[];
  liveDemoUrl: string;
  repositories: { label: string; url: string }[];
  imgSrc: string;
  siteUrlText: string;
}

export const portfolioData: PortfolioData[] = [
  {
    id: 3,
    status: "Live Production",
    title: "Pinkara Studio – Full-Stack Florist E-Commerce",
    description:
      "An online shop for Pinkara Studio, a florist in Malang, that replaced order-by-WhatsApp with one end-to-end flow. Buyers filter the catalog with shareable URLs, pick variants and add-ons, pin their address on a map for live JNE/J&T rates from Biteship, and pay by QRIS or virtual account through Midtrans, then track every order. Custom bouquets go through a brief, chat and quote, and the owner runs everything from an admin dashboard. Idempotency keys, row locks, verified webhooks and expiry jobs keep money and stock correct, backed by 370+ automated tests.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "TanStack Query",
      "React Hook Form + Zod",
      "Express 5",
      "PostgreSQL (Supabase)",
      "Prisma 7",
      "Midtrans",
      "Biteship",
      "Google Sign-In",
      "Cloudinary",
      "Leaflet",
      "Vercel",
    ],
    liveDemoUrl: "https://pinkara-studio.vercel.app/",
    repositories: [],
    imgSrc: "/pinkara-preview.webp",
    siteUrlText: "pinkara-studio.vercel.app",
  },
  {
    id: 2,
    status: "Live Production",
    title: "JOVLEN – Full-Stack Sports Event Ticketing Platform",
    description:
      "An end-to-end ticketing platform for running, football and esports events with two roles. Customers browse events with shareable URL filters, check out with vouchers and referral points, upload proof of payment, and receive e-tickets and reviews after the event. Event Organizers create events and vouchers, verify payments, and track sales, while a cron scheduler auto-expires unpaid transactions and email plus in-app notifications keep everyone updated.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form + Zod",
      "Express 5",
      "PostgreSQL",
      "Prisma 7",
      "JWT Auth",
      "Cloudinary",
      "Nodemailer",
      "node-cron",
      "Vercel",
    ],
    liveDemoUrl: "https://jovlen-event-sport-ticketing.vercel.app/",
    repositories: [
      {
        label: "Frontend Repo",
        url: "https://github.com/muzuijovin/MINPRO_FRONTEND",
      },
      {
        label: "Backend Repo",
        url: "https://github.com/muzuijovin/MINPRO_BACKEND",
      },
    ],
    imgSrc: "/jovlen-preview.webp",
    siteUrlText: "jovlen-event-sport-ticketing.vercel.app",
  },
  {
    id: 1,
    status: "Live Production",
    title: "Kopi Nusa – Artisanal Coffee Roastery Company Profile",
    description:
      "A complete company profile for an Indonesian artisanal coffee roastery: brand story and history timeline, a filterable catalog of single origins, house blends and B2B services with roast-profile flavor radars, a team directory, and a searchable coffee journal. Visitors can register and sign in, while admins publish new articles from a dedicated dashboard, all powered by Backendless.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Query",
      "Zustand",
      "React Hook Form + Zod",
      "Backendless",
      "Vercel",
    ],
    liveDemoUrl: "https://kopi-nusa-company-profile.vercel.app/",
    repositories: [
      {
        label: "View Repository",
        url: "https://github.com/muzuijovin/Kopi-Nusa_Company-Profile",
      },
    ],
    imgSrc: "/kopi-nusa-preview.webp",
    siteUrlText: "kopi-nusa-company-profile.vercel.app",
  },
];

/*contact */
export interface ContactMe {
  label: string;
  contact: string;
  isiContact: string;
  link: string;
}

export const contactMe: ContactMe[] = [
  {
    label: "email",
    contact: "Email Inquiry",
    isiContact: "jovin.najwan@gmail.com",
    link: "mailto:jovin.najwan@gmail.com",
  },
  {
    label: "linkedin",
    contact: "LinkedIn Profile",
    isiContact: "linkedin.com/in/jovin-najwan-053870289",
    link: "https://www.linkedin.com/in/jovin-najwan-053870289",
  },
  {
    label: "github",
    contact: "GitHub Repositories",
    isiContact: "github.com/muzuijovin",
    link: "https://github.com/muzuijovin",
  },
  {
    label: "location",
    contact: "Primary Location",
    isiContact: "Depok, West Java, Indonesia",
    link: "https://www.google.com/maps/place/Depok,+West+Java",
  },
];

/*testimonials */
export interface Testimonials {
  id: number;
  quote: string;
  initials: string;
  name: string;
  role: string;
}

export const testimonials: Testimonials[] = [
  {
    id: 1,
    quote:
      "Jovin approaches every module with genuine curiosity and quiet discipline. He never stops at code that merely works; he asks why it works, refines it until it reads cleanly, and delivers on time. That mindset is what turns a good developer into a dependable one.",
    initials: "D",
    name: "Kak Defryan",
    role: "Lecturer, Purwadhika Digital Technology School",
  },
  {
    id: 2,
    quote:
      "Building alongside Jovin always felt effortless. He communicates with clarity, breaks complex problems into calm, manageable steps, and is generous with his time whenever a teammate gets stuck. He makes the people around him better.",
    initials: "IO",
    name: "Ian Ongkoyoyo",
    role: "Classmate, Full-Stack Web Development Program",
  },
  {
    id: 3,
    quote:
      "What sets Jovin apart is his analytical depth, a habit clearly shaped by his research background. He studies a problem carefully before he writes a single line, and the result is work that is structured, thoughtful, and built to last.",
    initials: "DH",
    name: "Daffa Hakim",
    role: "Senior IT",
  },
  {
    id: 4,
    quote:
      "Jovin writes code with the next developer in mind: clear naming, tidy components, and commits that tell a story. He welcomes feedback with an open mind, applies it quickly, and is always eager to learn the right way rather than the fast way.",
    initials: "BC",
    name: "Besty Cintara",
    role: "Junior Software Developer",
  },
];
