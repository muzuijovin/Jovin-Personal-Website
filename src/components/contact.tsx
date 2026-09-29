import { contactMe } from "../data/data";



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

        <div className="grid grid-cols-[60%_40%]">
          <div className="p-2">
            <form action="" className="p-10 bg-primary-950 rounded-md w-full">
              <div className="flex gap-5">
                <fieldset className="fieldset w-full">
                  <label
                    className="label font-label font-medium text-[12px] text-[#D6E3FF]"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input bg-primary-975 text-[#869397] font-label text-xs w-full"
                    placeholder="Input your name"
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <label
                    className="label font-label font-medium text-[12px] text-[#D6E3FF]"
                    htmlFor="name"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input bg-primary-975 text-[#869397] font-label text-xs w-full"
                    placeholder="Input your email"
                  />
                </fieldset>
              </div>

              <fieldset className="fieldset w-full mt-6">
                <label
                  className="label font-label font-medium text-[12px] text-[#D6E3FF]"
                  htmlFor="name"
                >
                  Project Subject
                </label>
                <input
                  type="text"
                  id="projectSubject"
                  className="input bg-primary-975 text-[#869397] font-label text-xs w-full"
                  placeholder="Full-Stack Web Application / Architecture Consultation"
                />
              </fieldset>

              <fieldset className="fieldset w-full mt-6">
                <label
                  className="label font-label font-medium text-[12px] text-[#D6E3FF]"
                  htmlFor="name"
                >
                  Project Scope & Details
                </label>
                <input
                  type="text"
                  id="projectSubject"
                  className="input bg-primary-975 text-[#869397] font-label text-xs w-full h-20"
                  placeholder="Describe your architecture requirements, target deadlines, and technical specifications..."
                />
              </fieldset>
            </form>
          </div>
          <div className="p-2">
            <div className="p-10 bg-primary-950 rounded-md w-full">
              <h1 className="font-label font-semibold text-[#4FDBC8] text-xs">
                DIRECT COORDINATES
              </h1>

              <div>
                {contactMe.map((item) => {
                  return (
                    <div
                      key={item?.label}
                      className="rounded-md bg-primary-950 h-max flex gap-3"
                    >
                      <div className=" mb-8 flex justify-center items-center w-11 h-11 bg-primary-900 rounded-md">
                        <img src={item?.imgContact} alt="logo email" />
                      </div>

                      <div>
                        <h3 className="font-label font-semibold text-xs text-[#BCC9CD]">
                          {item?.contact}
                        </h3>
                        <a href={item?.link}>
                          <h2 className="font-label font-semibold text-[#D6E3FF] text-sm">
                            {item?.isiContact}
                          </h2>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
