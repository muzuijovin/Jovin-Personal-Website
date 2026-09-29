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
  persensatu: string;
  spandua: string;
  persendua: string;
  spantiga: string;
  persentiga: string;
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
    persensatu: "95",
    spandua: "TypeScript / ES6+",
    persendua: "90",
    spantiga: "Tailwind CSS / HTML5",
    persentiga: "95",
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
    persensatu: "92",
    spandua: "PostgreSQL & Relational DBs",
    persendua: "88",
    spantiga: "RESTful APIs & Auth",
    persentiga: "94",
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
    persensatu: "82",
    spandua: "Git & GitHub Workflows",
    persendua: "95",
    spantiga: "AWS & CI/CD Pipelines",
    persentiga: "80",
    kolompertama: "Postman",
    kolomdua: "Jenkins",
    kolomtiga: "Vercel Edge",
  },
];

export const techCloud: TechCloud[] = [
  {
    title: "tech1",
    box: "React 18",
  },
  {
    title: "tech2",
    box: "Next.js 14",
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

export const usingTools: UsingTools[] = [
  {
    tittle: "bahasa program",
    bahasaProgram: "React",
  },
  {
    tittle: "bahasa program",
    bahasaProgram: "Tailwind",
  },
];

export const starCase: StarCase[] = [
  {
    tittle: "SITUATION",
    logo: "S",
    paragraph:
      "XYZ Retail, an established retail company, sought to expand into e- commerce to reach a wider audience and streamline its sales processes. They needed a scalable, user-friendly platform to support both desktop and mobile users with features like product browsing, user reviews, secure checkout, and real-time inventory updates.",
    starcase: "logo-starcase-satu.svg",
    titlestar: "Retail Digital Expansion",
  },
  {
    tittle: "TASK",
    logo: "T",
    paragraph:
      "I was responsible for building the front-end and back-end components of the platform, ensuring seamless integration with the client’s inventory and payment systems. The project goal was to create an efficient, high- performing application with a smooth user experience.",
    starcase: "logo-starcase-dua.svg",
    titlestar: "Full-Stack Ownership",
  },
  {
    tittle: "ACTION",
    logo: "A",
    paragraph:
      "Using React for the front-end, I designed a responsive, intuitive UI focused on user engagement and easy navigation. On the back end, I developed RESTful APIs with Node.js and MongoDB for data management. Additionally, I integrated the platform with AWS to optimize loading times and set up a CI/CD pipeline for faster deployment and testing. I worked closely with designers and QA to address usability and accessibility standards.",
    starcase: "logo-starcase-tiga.svg",
    titlestar: "React, AWS & CI/CD Pipeline",
  },
  {
    tittle: "RESULT",
    logo: "R",
    paragraph:
      "The project was completed on time, leading to a 35% increase in online sales within the first three months. User feedback highlighted the site's speed and ease of use, and the client reported a substantial reduction in manual inventory management tasks.",
    starcase: "logo-starcase-empat.svg",
    titlestar: "Delivered On Schedule",
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
    link: "mail.google.com",
  },
  {
    label: "linkedin",
    imgContact: "/contact-linkedin-icon.svg",
    contact: "LinkedIn Profile",
    isiContact: "linkedin.com/in/jovin-najwan-053870289",
    link: "linkedin.com/in/jovin-najwan-053870289",
  },
  {
    label: "github",
    imgContact: "/contact-github-icon.svg",
    contact: "GitHub Repositories",
    isiContact: "github.com/muzuijovin",
    link: "github.com/muzuijovin",
  },
  {
    label: "location",
    imgContact: "/contact-lokasi-icon.svg",
    contact: "Primary Location",
    isiContact: "Indonesia, Jawa Barat",
    link: "https://www.google.com/maps",
  },
];
