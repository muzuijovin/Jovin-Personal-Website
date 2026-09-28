export function SkillsSection() {
  interface SkillsLayout {
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

  interface TechCloud {
    tittle: string;
    box: string;
  }

  const skillsLayout: SkillsLayout[] = [
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

  const techCloud: TechCloud[] = [
    {
      tittle: "tech1",
      box: "React 18",
    },
    {
      tittle: "tech2",
      box: "Next.js 14",
    },
    {
      tittle: "tech3",
      box: "TypeScript",
    },
    {
      tittle: "tech4",
      box: "Node.js",
    },
    {
      tittle: "tech5",
      box: "Express.js",
    },
    {
      tittle: "tech6",
      box: "PostgreSQL",
    },
    {
      tittle: "tech7",
      box: "Tailwind CSS",
    },
    {
      tittle: "tech8",
      box: "Docker",
    },
    {
      tittle: "tech9",
      box: "Amazon Web Services",
    },
    {
      tittle: "tech10",
      box: "REST APIs",
    },
    {
      tittle: "tech11",
      box: "Git Versioning",
    },
    {
      tittle: "tech12",
      box: "CI/CD Pipelines",
    },
    {
      tittle: "tech13",
      box: "Postman Testing",
    },
  ];

  return (
    <>
      <section id="skillsSection" className="bg-primary-975 h-max p-12">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-label text-[#4FDBC8] text-xs">
              02 / TECHNICAL STACK ----
            </h3>
            <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
              Capabilities & Toolchain
            </h1>
          </div>
          <p className="font-label text-xs text-neutral-500 ">
            Specialized across both client interaction layers and mission-{" "}
            <br />
            critical distributed database structures.
          </p>
        </div>

        <div className="grid grid-cols-1 p-6 gap-10 md:grid-cols-3 mt-12">
          {skillsLayout.map((item) => {
            return (
              <div key={item?.tittle} className="bg-primary-950 h-max p-8 rounded-md">
                <div>
                  <img src={item?.img} alt="skillsicon1" />
                </div>

                <h1 className="font-label font-semibold text-xl text-neutral-100 mt-3">
                  {item?.hsatu}
                </h1>

                <p className="font-label text-xs text-neutral-400">
                  {item?.paragraph}
                </p>

                <div className="space-y-1 mt-10">
                  <div className="flex justify-between text-label text-xs font-semibold text-neutral-100">
                    <span>{item?.spansatu}</span>
                    <span className="text-[#4FDBC8]">{item?.persensatu}%</span>
                  </div>
                  <progress
                    className="progress progress-info w-full h-1.5"
                    value={item?.persensatu}
                    max="100"
                  ></progress>

                  <div className="flex justify-between text-label text-xs font-semibold text-neutral-100">
                    <span>{item?.spandua}</span>
                    <span className="text-[#4FDBC8]">{item?.persendua}%</span>
                  </div>
                  <progress
                    className="progress progress-info w-full h-1.5"
                    value={item?.persendua}
                    max="100"
                  ></progress>

                  <div className="flex justify-between text-label text-xs font-semibold text-neutral-100">
                    <span>{item?.spantiga}</span>
                    <span className="text-[#4FDBC8]">{item?.persentiga}%</span>
                  </div>
                  <progress
                    className="progress progress-info w-full h-1.5"
                    value={item?.persentiga}
                    max="100"
                  ></progress>
                  <div className="mt-5 flex gap-3">
                    <h4 className="text-[#BCC9CD] text-[9px] font-semibold font-label bg-primary-900 p-1 rounded-sm">
                      {item?.kolompertama}
                    </h4>
                    <h4 className="text-[#BCC9CD] text-[9px] font-semibold font-label bg-primary-900 p-1 rounded-sm">
                      {item?.kolomdua}
                    </h4>
                    <h4 className="text-[#BCC9CD] text-[9px] font-semibold font-label bg-primary-900 p-1 rounded-sm">
                      {item?.kolomtiga}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#041329] mt-10 p-8 rounded-md">
          <h1 className="font-label font-semibold text-xs text-[#4FDBC8] mb-3">
            LUMINOUS TECH CLOUD
          </h1>
          <div className="grid grid-cols-6 gap-3 md:grid-cols-11">
            {techCloud.map((item) => {
              return (
                <div key={item?.tittle} className="p-2 bg-primary-950 hover:opacity-65 flex items-center justify-center rounded-md">
                  <h1 className="font-label text-[9px] font-semibold text-[#D6E3FF]">
                    {item?.box}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}