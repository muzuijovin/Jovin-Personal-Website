export function ExperienceSection() {
  return (
    <>
      <section id="experienceSection" className="h-max bg-primary-975 p-12 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="mb-16">
          <h3 className="font-label text-[#4FDBC8] text-xs">
            04 / TRAJECTORY ----
          </h3>
          <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
            Engineering Journey & Experience
          </h1>
        </div>

        <div className="bg-primary-950 h-max p-8 rounded-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-label font-semibold text-xs text-[#4FDBC8]">
                INCUBATOR PROGRAM
              </h3>
              <h1 className="font-headline font-semibold text-[28px] text-[#D6E3FF]">
                Fullstack Web Developer
              </h1>
              <h2 className="font-label text-[#4CD7F6] text-sm">
                Purwadhika Digital Technology School
              </h2>
            </div>

            <div className="flex gap-2">
              <img src="kalender-icon-experience.svg" alt="kalender" />
              <p className="font-label font-semibold text-xs text-[#BCC9CD]">
                Agustus 2026 - Desember 2026
              </p>
            </div>
          </div>

          <p className="font-label text-sm text-[#BCC9CD]">
            Engaged in an intensive fullstack engineering immersion focusing on
            enterprise-grade software development practices, agile methodology,
            and end-to-end architecture delivery.
          </p>

          <div className="mt-6">
            <div className="flex gap-3">
              <img src="experience-fsd-icon-pertama.svg" alt="iconfsd" />
              <p className="font-label text-sm text-[#D6E3FF]">
                Architected and delivered end-to-end fullstack applications
                using React, Next.js, Express, and PostgreSQL.
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              <img src="experience-fsd-icon-kedua.svg" alt="iconfsd" />
              <p className="font-label text-sm text-[#D6E3FF]">
                Designed scalable database schemas, normalized relational
                models, and secured RESTful endpoints against vulnerabilities.
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              <img src="experience-fsd-icon-ketiga.svg" alt="iconfsd" />
              <p className="font-label text-sm text-[#D6E3FF]">
                Collaborated in agile sprints with peer engineers, adhering to
                git branch strategies, CI/CD testing, and structured code
                reviews.
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              <img src="experience-fsd-icon-keempat.svg" alt="iconfsd" />
              <p className="font-label text-sm text-[#D6E3FF]">
                Championed rigorous performance optimization, reducing server
                response latencies and ensuring cross-device responsive layouts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
