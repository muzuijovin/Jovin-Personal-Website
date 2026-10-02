import { usingTools, starCase } from "../data/data";
import { GoDotFill } from "react-icons/go";

export function PortofolioSection() {
  return (
    <>
      <section
        id="portofolioSection"
        className="h-max p-12 bg-[#041329] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-label text-[#4FDBC8] text-xs">
              03 / CASE STUDY & WORKS ----
            </h3>
            <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
              E-commerce Platform for XYZ Retail
            </h1>
          </div>
          <div className="flex gap-3 p-2  bg-primary-975 rounded-md">
            <h3 className="font-label font-semibold text-[11px] text-[#BCC9CD]">
              Theme Palette:
            </h3>
            <div className="flex">
              <GoDotFill className="text-[#010E24] w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-primary-950 w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-[#4CD7F6] w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-[#4FDBC8] w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-[#D6E3FF] w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="relative h-[90vh] mt-12 overflow-hidden">
          <div className="bg-amber-200 rounded-t-md overflow-hidden h-full">
            <img
              src="/porto-example.svg"
              alt="profilewebsite"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 left-2 flex gap-3">
            {usingTools.map((item) => {
              return (
                <div
                  key={item?.bahasaProgram}
                  className="bg-[#010E24] p-2 rounded-md"
                >
                  <h1 className="text-[#4CD7F6] text-[10px] font-label font-semibold">
                    {item?.bahasaProgram}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-2 right-2 flex flex-col md:flex-row gap-3">
            <div className="bg-primary-500 pl-2 pr-2 pt-1 pb-1 rounded-md">
              <h1 className="text-[#00424F] font-label font-semibold text-xs">
                +35% Online Sales Increase
              </h1>
            </div>

            <div className="bg-[#00424F] pl-2 pr-2 pt-1 pb-1 rounded-md">
              <h1 className="text-neutral-100 font-label font-semibold text-xs">
                Under 1.2s Load Time
              </h1>
            </div>
          </div>
        </div>

        <div className="h-max bg-primary-975 rounded-b-md">
          <div className="p-6 pb-0">
            <h3 className="font-label text-[#4FDBC8] text-xs">
              ARCHITECTURE METHODOLOGY
            </h3>
            <h1 className="font-bold font-headline text-2xl text-neutral-100 mt-1">
              STAR Case Study Breakdown
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4">
            {starCase.map((item) => {
              return (
                <div key={item?.tittle} className="p-6">
                  <div className="flex gap-3 items-center">
                    <div className="bg-primary-900 flex items-center justify-center p-2 rounded-sm">
                      <h2 className="font-headline font-bold text-[14px] text-[#4CD7F6]">
                        {item?.logo}
                      </h2>
                    </div>
                    <h2 className="font-label font-semibold text-sm text-[#4CD7F6]">
                      {item?.tittle}
                    </h2>
                  </div>
                  <p className="font-label text-xs text-neutral-400 mt-5">
                    {item?.paragraph}
                  </p>

                  <div className="flex gap-1 mt-10">
                    <img src="logo-starcase-satu.svg" alt="" />

                    <p className="font-label font-semibold text-sm text-neutral-300">
                      Retail Digital Expansion
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
