import { LuDot } from "react-icons/lu";

interface ContactMe {
  label: string;
  imgContact: string;
  contact: string;
  isiContact: string;
}

const contactMe: ContactMe[] = [
  {
    label: "email",
    imgContact: "/contact-email-icon.svg",
    contact: "Email Inquiry",
    isiContact: "jovin.najwan@gmail.com",
  },
  {
    label: "linkedin",
    imgContact: "/contact-linkedin-icon.svg",
    contact: "LinkedIn Profile",
    isiContact: "linkedin.com/in/jovin-najwan-053870289",
  },
  {
    label: "github",
    imgContact: "/contact-github-icon.svg",
    contact: "GitHub Repositories",
    isiContact: "github.com/muzuijovin",
  },
  {
    label: "location",
    imgContact: "/contact-lokasi-icon.svg",
    contact: "Primary Location",
    isiContact: "Indonesia, Jawa Barat",
  },
];

export function ContactSection() {
  return (
    <>
      <section id="contactSection" className="h-max bg-primary-975 p-12">
        <div className="mb-16">
          <h3 className="font-label text-[#4FDBC8] text-xs">
            06 / CONNECT ----
          </h3>
          <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
            Let's Build Something High- Performance
          </h1>
        </div>

        <div className="flex p-10 justify-between bg-primary-950 h-max rounded-md mb-5">
          <div className="flex gap-2 items-center">
            <LuDot className=" w-3 h-3 bg-[#4FDBC8]" />
            <div>
              <h3 className="font-label font-semibold text-xs text-[#4FDBC8]">
                DIRECT COORDINATES & STATUS
              </h3>
              <h1 className="font-headline font-semibold text-[20px] text-[#D6E3FF]">
                Currently Available for Engineering Roles & Contracts
              </h1>
            </div>
          </div>
          <div className="flex gap-3">
            <img src="checklist-icon.svg" alt="centang" className="w-4 h-4" />
            <p className="font-label font-medium text-xs text-[#BCC9CD]">
              Worldwide Remote • Full-Time / Project Sprints
            </p>
          </div>
        </div>

        <div className="grid gap-5 grid-cols-2 lg:grid-cols-4">
          {contactMe.map((item) => {
            return (
              <div
                key={item?.label}
                className="rounded-md bg-primary-950 h-max p-6"
              >
                <div className=" mb-8 flex justify-center items-center w-11 h-11 bg-primary-900 rounded-md">
                  <img src={item?.imgContact} alt="logo email" />
                </div>

                <h3 className="font-label font-semibold text-xs text-[#BCC9CD]">
                  {item?.contact}
                </h3>
                <h2 className="font-label font-semibold text-[#D6E3FF] text-sm">
                  {item?.isiContact}
                </h2>
              </div>
            );
          })}
        </div>

        <div className="p-12 bg-primary-950 drop-shadow-xl flex justify-between">
          <div>
            <h1 className="font-headline ">Ready to bring high-performance ideas to life?</h1>
          </div>
        </div>
      </section>
    </>
  );
}
