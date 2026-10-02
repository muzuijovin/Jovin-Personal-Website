import { skillsLayout, techCloud } from "../data/data";

export function SkillsSection() {
  return (
    <>
      <section
        id="skillsSection"
        className="bg-primary-975 h-max p-12 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
      >
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

        <div className="grid grid-cols-1  gap-10 md:grid-cols-3 mt-12 md:p-6">
          {skillsLayout.map((item) => {
            return (
              <div
                key={item?.tittle}
                className="bg-primary-950 h-max p-8 rounded-md"
              >
                <div>
                  <img src={item?.img} alt="skillsicon1" />
                </div>

                <h1 className="font-label font-semibold text-xl text-neutral-100 mt-3">
                  {item?.hsatu}
                </h1>

                <p className="font-label text-xs text-neutral-400">
                  {item?.paragraph}
                </p>

                <div className="space-y-5 mt-10">
                  <div className="flex justify-between text-label text-xs font-semibold text-neutral-100">
                    <span>{item?.spansatu}</span>
                    <img src="/skills-centang.svg" alt="skills centang" />
                  </div>

                  <div className="flex justify-between text-label text-xs font-semibold text-neutral-100">
                    <span>{item?.spandua}</span>
                    <img src="/skills-centang.svg" alt="skills centang" />
                  </div>

                  <div className="flex justify-between text-label text-xs font-semibold text-neutral-100">
                    <span>{item?.spantiga}</span>
                    <img src="/skills-centang.svg" alt="skills centang" />
                  </div>
                  <div className="mt-5 flex gap-3">
                    <h4 className="text-[#BCC9CD] text-[9px] font-semibold font-label bg-primary-900 p-1 rounded-sm cursor-pointer">
                      {item?.kolompertama}
                    </h4>
                    <h4 className="text-[#BCC9CD] text-[9px] font-semibold font-label bg-primary-900 p-1 rounded-sm cursor-pointer">
                      {item?.kolomdua}
                    </h4>
                    <h4 className="text-[#BCC9CD] text-[9px] font-semibold font-label bg-primary-900 p-1 rounded-sm cursor-pointer">
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
          <div className="grid grid-cols-3 md:grid-cols-11 gap-3 h-max">
            {techCloud.map((item) => {
              return (
                <div
                  key={item?.title}
                  className="p-2 bg-primary-950 hover:opacity-65 flex items-center justify-center rounded-md cursor-pointer"
                >
                  <h1 className="font-label text-[7px] md:text-[9px] font-semibold text-[#D6E3FF]">
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
