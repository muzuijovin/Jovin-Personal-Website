export function AboutSection() {
  interface AboutPoint {
    tittle: string;
    isi: string;
  }

  const aboutPoint: AboutPoint[] = [
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

  return (
    <>
      <section id="aboutSection" className="h-max bg-[#041329] p-12">
        <h3 className="font-label text-[#4FDBC8] text-xs">
          01 / PROFILE NARRATIVE ----
        </h3>
        <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
          Architecting systems with <br /> precision, purpose & clarity.
        </h1>

        <div className="grid grid-cols-1 mt-12 lg:grid-cols-[55%_45%]  lg:gap-4">
          <div
            id="leftAboutSection"
            className="bg-primary-950 h-max p-10 rounded-md p-"
          >
            <div className="w-10 h-10 rounded-md overflow-hidden bg-primary-900 flex justify-center items-center mb-3">
              <img src="/about-icon-satu.svg" alt="abouticon1" />
            </div>

            <p className="font-label text-sm text-neutral-100 mb-5">
              I am an aspiring Software Developer currently honing my skills at
              Purwadhika Digital Technology School, specializing in Full Stack
              Web Development. With a solid foundation in building modern
              applications using React, Next.js, Express.js, and PostgreSQL, I
              focus on engineering structured, high-performance, and reliable
              backend and frontend solutions.
            </p>

            <p className="font-label text-xs text-neutral-400 leading-5">
              Driven by an insatiable appetite for continuous learning and
              meticulous attention to detail, I thrive in fast-paced
              environments that demand high timeliness and clear team
              communication. I am deeply passionate about translating complex
              requirements into clean, scalable code and am eager to contribute
              to impactful software engineering projects.
            </p>

            <div className="flex gap-3 mt-10">
              {aboutPoint.map((item) => {
                return (
                  <div key={item?.tittle} className="p-3 rounded-md bg-primary-900 hover:bg-primary-800 cursor-pointer">
                    <h3 className="text-xs text-primary-500">{item?.isi}</h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="rightAboutSection" className="h-max mt-10 md:mt-0">
            <div className="bg-primary-950 h-max p-10 rounded-md flex gap-4">
              <div className="w-10 h-10 rounded-md overflow-hidden bg-primary-900 flex justify-center items-center mb-3">
                <img src="/about-icon-dua.svg" alt="abouticon2" />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-label text-[#4FDBC8] text-xs ">
                    EDUCATION & INCUBATION
                  </h3>
                  <h2 className="font-headline text-neutral-100 text-xl">
                    Purwadhika Digital Technology School
                  </h2>
                  <p className="font-label text-neutral-400 text-xs">
                    Full Stack Web Development Intensive Program
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <img src="/checklist-icon.svg" alt="centang" />
                  <h4 className="font-label font-semibold text-[10px] text-primary-500">
                    Graduated & Ready for Deployment
                  </h4>
                </div>
              </div>
            </div>

            <div className="bg-primary-950 h-max p-10 mt-4 rounded-md space-y-1.5">
              <h3 className="font-label text-[#4FDBC8] text-xs ">
                CORE PRINCIPLES
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <img src="about-icon-tiga.svg" alt="abouticon3" />
                  <div className="space-y-1">
                    <h2 className="font-label font-semibold text-xs text-neutral-100">
                      Clean Architecture
                    </h2>
                    <p className="font-label text-xs text-neutral-400">
                      Decoupled layers, modular services, and
                      single-responsibility codebases.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img src="about-icon-empat.svg" alt="abouticon3" />
                  <div className="space-y-1">
                    <h2 className="font-label font-semibold text-xs text-neutral-100">
                      Type Safety & Reliability
                    </h2>
                    <p className="font-label text-xs text-neutral-400">
                      Predictable state machines and hardened transactional
                      integrity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img src="about-icon-lima.svg" alt="abouticon3" />
                  <div className="space-y-1">
                    <h2 className="font-label font-semibold text-xs text-neutral-100">
                      High Timeliness & Delivery
                    </h2>
                    <p className="font-label text-xs text-neutral-400">
                      Disciplined sprint velocity, proactive communication, and
                      zero blocker tolerance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
