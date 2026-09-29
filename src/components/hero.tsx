import { pointPlus } from "../data/data";
import { GoDotFill } from "react-icons/go";

export function HeroSection() {
  return (
    <>
      <section
        id="heroSection"
        className="bg-primary-975 h-max p-12  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] ">
          <div id="leftSideHero">
            <p className="font-label text-xs text-[#4FDBC8]">
              👋 OPEN TO FULL-STACK OPPORTUNITIES | PURWADHIKA GRADUATE
            </p>
            <h1 className="font-headline font-extrabold text-5xl text-primary-100 mt-6">
              Engineering robust <span className="text-[#4FDBC8]">web</span>{" "}
              <span className="text-[#4FDBC8]">architectures</span> that empower
              businesses to scale.
            </h1>
            <h2 className="font-label text-sm text-primary-50 mt-6">
              Hi, I'm Jovin Najwan — a Full-Stack Web Developer passionate about
              building high-performance, fault-tolerant web applications and
              seamless end-to-end digital solutions.
            </h2>

            <div className="flex gap-4 mt-6">
              <a href="#portofolioSection">
                <button className="btn btn-info font-label">
                  VIEW PORTFOLIO{" "}
                  <span>
                    <img src="/panah.svg" alt="row" />
                  </span>
                </button>
              </a>

              <a href="#formContact">
                <button className="flex gap-2 w-max h-max p-2.25 rounded-md font-label bg-primary-900 hover:opacity-70 text-primary-100 cursor-pointer">
                  Contact Me <img src="/contact-me-icon.svg" alt="contactme" />
                </button>
              </a>
            </div>

            <div className="px-3 grid grid-cols-1 gap-2 md:grid-cols-2 mt-10 rounded-xl lg:grid-cols-3 ">
              {pointPlus.map((item) => {
                return (
                  <div
                    key={item?.label}
                    className=" w-full h-18 rounded-lg bg-primary-950 flex items-center justify-center pl-3"
                  >
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-headline text-xl font-semibold text-[#4CD7F6]">
                        {item?.hsatu}
                      </h1>
                      <p className="font-label text-xs text-neutral-100">
                        {item?.paragraph}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            id="rightSideHero"
            className=" p-5 md:p-20 md:pl-30 md:pr-20 md:pt-0"
          >
            <div
              id="fullLayOut"
              className="group rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_50px_-12px_rgba(79,219,200,0.15)]"
            >
              <div
                id="layoutPhoto"
                className="h-120 md:h-90 md:bg-blend-saturation md:relative overflow-hidden"
              >
                <div className="flex gap-1 h-max w-max absolute top-2 right-2 bg-[#010E24] rounded-xl p-1 cursor-pointer">
                  <GoDotFill className="text-[#ACEDFF]" />
                  <h1 className="font-label text-xs text-[#ACEDFF]">
                    Full-Stack Core
                  </h1>
                </div>
                <img
                  src="/foto-jovin-najwan.jpg"
                  alt="foto jovin"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-115"
                />
              </div>

              <div
                id="keteranganJovin"
                className="bg-tertiary-900 row-start-2 h-max p-3"
              >
                <div className="flex justify-between">
                  <div className="flex gap-0.5">
                    <GoDotFill className="text-[#FFB4AB] w-2.5 h-2.5" />
                    <GoDotFill className="text-[#04B4A2] w-2.5 h-2.5" />
                    <GoDotFill className="text-[#4CD7F6] w-2.5 h-2.5" />
                  </div>
                  <h1 className="font-tittle text-xs mr-3 text-slate-200">
                    system.runtime.ts
                  </h1>
                </div>

                <div>
                  <span className="text-secondary-400 font-tittle text-xs">
                    const
                  </span>{" "}
                  <span className="text-slate-200 font-tittle text-xs">
                    developer
                  </span>{" "}
                  = {"{"}
                </div>

                <div className="pl-6">
                  <span className="text-slate-200 font-tittle text-xs">
                    name:
                  </span>{" "}
                  <span className="text-[#93c5fd] font-tittle text-xs">
                    'Jovin Najwan'
                  </span>
                </div>

                <div className="pl-6 mt-1">
                  <span className="text-slate-200 font-tittle text-xs">
                    role:
                  </span>{" "}
                  <span className="text-[#93c5fd] font-tittle text-xs">
                    'Full Stack Web Developer'
                  </span>
                </div>

                <div className="pl-6 mt-1">
                  <span className="text-slate-200 font-tittle text-xs">
                    focus:
                  </span>{" "}
                  <span className="text-[#93c5fd] font-tittle text-xs">
                    'Scalable Systems'
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
