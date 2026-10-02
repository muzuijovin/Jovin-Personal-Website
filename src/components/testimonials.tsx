import { testimonials } from "../data/data";

export function TestimonialsSection() {
  return (
    <>
      <section
        id="testimonialsSection"
        className="h-max bg-[#041329] p-12 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
      >
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center">
            <h3 className="font-label text-[#4FDBC8] text-xs">
              05 / ENDORSEMENTS ----
            </h3>
            <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
              What Mentors & Peers Say
            </h1>
            <p className="font-label text-[15px] text-[#BCC9CD] mt-2">
              Testimonials on technical execution, work ethic, and
              cross-functional communication.
            </p>
          </div>
        </div>

        {/* grid */}
        <div className="gap-3 grid grid-cols-1 h-max px-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => {
            return (
              <div key={item?.id} className="md:p-8">
                <div className="bg-primary-975 h-max rounded-md p-8">
                  <img src="doubletick-icon-testi.svg" alt="quote" />

                  <p className="font-label text-sm text-[#D6E3FF] mt-6 mb-6">
                    {item?.quote}
                  </p>

                  <div className="flex gap-3 items-center">
                    <div className="flex items-center justify-center bg-primary-900 p-2 rounded-lg">
                      <h1 className="font-label font-bold text-sm text-[#4CD7F6]">
                        {item?.initials}
                      </h1>
                    </div>
                    <div>
                      <h1 className="font-label font-semibold text-[#D6E3FF] text-xs">
                        {item?.role}
                      </h1>
                      <p className="font-label text-[13px] text-[#BCC9CD]">
                        {item?.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
