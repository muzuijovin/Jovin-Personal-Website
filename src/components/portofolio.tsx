import { GoDotFill } from "react-icons/go";

export function PortofolioSection() {
  interface UsingTools {
    tittle: string;
    bahasaProgram: string;
  }

  interface StarCase {
    tittle: string;
    logo: string;
    paragraph: string;
    starcase: string;
    titlestar: string;
  }

  const usingTools: UsingTools[] = [
    {
      tittle: "bahasa program",
      bahasaProgram: "React",
    },
    {
      tittle: "bahasa program",
      bahasaProgram: "Tailwind",
    },
  ];

  const starCase: StarCase[] = [
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

  return (
    <>
      <section
        id="portofolioSection"
        className="h-max p-12 bg-[#041329] transition-"
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
                <div key={item?.bahasaProgram} className="bg-[#010E24] p-2 rounded-md">
                  <h1 className="text-[#4CD7F6] text-[10px] font-label font-semibold">
                    {item?.bahasaProgram}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-2 right-2 flex gap-3">
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

          <div className="grid grid-cols-2 lg:grid-cols-4">
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
