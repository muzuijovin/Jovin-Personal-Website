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
    isi: "Continuous Learning",
  },
  {
    tittle: "block 2",
    isi: "High Timeliness",
  },
  {
    tittle: "block 3",
    isi: "Meticulous Detail",
  },
  {
    tittle: "block 4",
    isi: "Agile Teamplay",
  },
];

/* skillsSection */
export interface SkillsLayout {
  tittle: string;
  img: string;
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
}

export const skillsLayout: SkillsLayout[] = [
  {
    tittle: "front end",
    img: "/skills-icon-satu.svg",
    hsatu: "Front-End Engineering",
    paragraph:
      "Responsive, accessible user interfaces engineered with modern reactive frameworks and precise typography.",
    spansatu: "React / Next.js",
    spandua: "TypeScript / ES6+",
    spantiga: "Tailwind CSS / HTML5",
    kolompertama: "CSS3",
    kolomdua: "DOM API",
    kolomtiga: "Micro-interactions",
  },
  {
    tittle: "Back end",
    img: "/skills-icon-dua.svg",
    hsatu: "Back-End Architecture",
    paragraph:
      "Fault-tolerant microservices, normalized relational schemas, and hardened REST endpoints.",
    spansatu: "Node.js / Express.js",
    spandua: "PostgreSQL & Relational DBs",
    spantiga: "RESTful APIs & Auth",
    kolompertama: "Django Awareness",
    kolomdua: "Ruby on Rails",
    kolomtiga: "Schema Design",
  },
  {
    tittle: "tools and devops",
    img: "/skills-icon-tiga.svg",
    hsatu: "DevOps & Tooling",
    paragraph:
      "Automated deployment pipelines, cloud provisioning, version control, and rigorous API validation.",
    spansatu: "Docker & Containers",
    spandua: "Git & GitHub Workflows",
    spantiga: "AWS & CI/CD Pipelines",
    kolompertama: "Postman",
    kolomdua: "Jenkins",
    kolomtiga: "Vercel Edge",
  },
];

export const techCloud: TechCloud[] = [
  {
    title: "tech1",
    box: "React",
  },
  {
    title: "tech2",
    box: "Next.js",
  },
  {
    title: "tech3",
    box: "TypeScript",
  },
  {
    title: "tech4",
    box: "Node.js",
  },
  {
    title: "tech5",
    box: "Express.js",
  },
  {
    title: "tech6",
    box: "PostgreSQL",
  },
  {
    title: "tech7",
    box: "Tailwind CSS",
  },
  {
    title: "tech8",
    box: "Docker",
  },
  {
    title: "tech9",
    box: "Amazon Web Services",
  },
  {
    title: "tech10",
    box: "REST APIs",
  },
  {
    title: "tech11",
    box: "Git Versioning",
  },
  {
    title: "tech12",
    box: "CI/CD Pipelines",
  },
  {
    title: "tech13",
    box: "Postman Testing",
  },
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
    projectNumber: string;
    status: string;
    title: string;
    description: string;
    tags: string[];
    liveDemoUrl: string;
    repositoryUrl: string;
    imgSrc: string;
    siteUrlText: string;
}

export const portfolioData:  PortfolioData[]= [
  {
    id: 1,
    projectNumber: "PROJECT 01 / 02",
    status: "Live Production",
    title: "Kopi Nusa – Artisanal Coffee Roastery Company Profile",
    description:
      "Modern web platform and company profile for an Indonesian artisanal coffee roastery, featuring curated specialty beans showcase, coffee cupping schedules, partner inquiry system, and responsive bilingual storytelling.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
      "Responsive Web Design",
      "REST API",
    ],
    liveDemoUrl: "https://kopi-nusa-company-profile.vercel.app/",
    repositoryUrl: "https://github.com/muzuijovin/Kopi-Nusa_Company-Profile.git",
    imgSrc: "/toko-kopi-nusa.PNG", // Kosongkan dulu, isi dengan path gambar nanti (ex: "/images/kopi-nusa.png")
    siteUrlText: "kopi-nusa-company-profile.vercel.app",
  },
  {
    id: 2,
    projectNumber: "PROJECT 02 / 02",
    status: "Enterprise Case Study",
    title: "XYZ Retail – Scalable Multi-Tier E-Commerce Platform",
    description:
      "Full-featured retail storefront and catalog management platform delivering sub-1.2s load speeds, real-time stock sync, and seamless checkout integrations, resulting in a +35% surge in digital sales volume.",
    tags: ["React", "Node.js", "MongoDB", "AWS Cloud", "CI/CD Pipeline"],
    liveDemoUrl: "#",
    repositoryUrl: "#", // Menggunakan "Request Architecture Deck" pada desain kedua
    imgSrc: "", // Kosongkan dulu
    siteUrlText: "xyz-retail.production.internal",
  },
];

/*contact */
export interface ContactMe {
  label: string;
  imgContact: string;
  contact: string;
  isiContact: string;
  link: string;
}

export const contactMe: ContactMe[] = [
  {
    label: "email",
    imgContact: "/contact-email-icon.svg",
    contact: "Email Inquiry",
    isiContact: "jovin.najwan@gmail.com",
    link: "mailto:jovin.najwan@gmail.com",
  },
  {
    label: "linkedin",
    imgContact: "/contact-linkedin-icon.svg",
    contact: "LinkedIn Profile",
    isiContact: "linkedin.com/in/jovin-najwan-053870289",
    link: "https://www.linkedin.com/in/jovin-najwan-053870289",
  },
  {
    label: "github",
    imgContact: "/contact-github-icon.svg",
    contact: "GitHub Repositories",
    isiContact: "github.com/muzuijovin",
    link: "https://github.com/muzuijovin",
  },
  {
    label: "location",
    imgContact: "/contact-lokasi-icon.svg",
    contact: "Primary Location",
    isiContact: "Indonesia, Jawa Barat",
    link: "https://www.google.com/maps",
  },
];

/*testimonials */
export interface Testimonials {
  id: number;
  quote: string;
  initials: string;
  role: string;
  company: string;
}

export const testimonials: Testimonials[] = [
  {
    id: 1,
    quote:
      "Jovin demonstrates exceptional clarity in breaking down complex backend logic and delivering pristine frontend interfaces. His focus on performance and timeliness makes him an invaluable engineering teammate.",
    initials: "SM",
    role: "Senior Engineering Mentor",
    company: "Purwadhika Digital Technology School",
  },
  {
    id: 2,
    quote:
      "Working alongside Jovin on fullstack sprints was seamless. His code is impeccably organized, well-documented, and his dedication to team communication kept our delivery ahead of schedule.",
    initials: "PL",
    role: "Peer Developer & Project Lead",
    company: "Agile Team Sprints",
  },
  {
    id: 3,
    quote:
      "The e-commerce platform delivered by Jovin exceeded our benchmark for mobile responsiveness and real-time inventory tracking. Outstanding technical execution!",
    initials: "PS",
    role: "Product Stakeholder",
    company: "XYZ Retail Expansion",
  },
];
