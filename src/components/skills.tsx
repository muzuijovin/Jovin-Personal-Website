import { SkillsLayout, skillsLayout, TechCloud, techCloud } from "../data/data";

interface SkillsSectionProps {
  skillsData: SkillsLayout;
  techData: TechCloud; // Mengambil title dan box dari TechCloud
}

export function SkillsSection({ skillsData, techData }: SkillsSectionProps) {
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
                <div
                  key={item?.title}
                  className="p-2 bg-primary-950 hover:opacity-65 flex items-center justify-center rounded-md"
                >
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
