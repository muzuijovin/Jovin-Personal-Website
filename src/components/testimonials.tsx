export function TestimonialsSection() {
  return (
    <>
      <section id="testimonialsSection" className="h-max bg-[#041329] p-12">
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center">
            <h3 className="font-label text-[#4FDBC8] text-xs">
              05 / ENDORSEMENTS ----
            </h3>
            <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
              What Mentors & Peers Say
            </h1>
            <p className="font-label text-[15px] text-[#BCC9CD] mt-2">
              Testimonials on technical execution, work ethic, and cross-functional communication.
            </p>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 h-max px-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8">
            <div className="bg-primary-975 h-70 rounded-md p-8">
              <img src="doubletick-icon-testi.svg" alt="quote" />

              <p className="font-label text-sm text-[#D6E3FF] mt-6 mb-6">
                "Jovin demonstrates exceptional clarity in breaking down complex
                backend logic and delivering pristine frontend interfaces. His
                focus on performance and timeliness makes him an invaluable
                engineering teammate."
              </p>

              <div className="flex gap-3 items-center">
                <div className="flex items-center justify-center bg-primary-900 p-2 rounded-lg">
                  <h1 className="font-label font-bold text-sm text-[#4CD7F6]">
                    SM
                  </h1>
                </div>
                <div>
                  <h1 className="font-label font-semibold text-[#D6E3FF] text-xs">
                    Senior Engineering Mentor
                  </h1>
                  <p className="font-label text-[13px] text-[#BCC9CD]">
                    Purwadhika Digital Technology School
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-primary-975 h-70 rounded-md p-8">
              <img src="doubletick-icon-testi.svg" alt="quote" />

              <p className="font-label text-sm text-[#D6E3FF] mt-6 mb-6">
                "Working alongside Jovin on fullstack sprints was seamless. His
                code is impeccably organized, well-documented, and his
                dedication to team communication kept our delivery ahead of
                schedule."
              </p>

              <div className="flex gap-3 items-center">
                <div className="flex items-center justify-center bg-primary-900 p-2 rounded-lg">
                  <h1 className="font-label font-bold text-sm text-[#4CD7F6]">
                    PL
                  </h1>
                </div>
                <div>
                  <h1 className="font-label font-semibold text-[#D6E3FF] text-xs">
                    Peer Developer & Project Lead
                  </h1>
                  <p className="font-label text-[13px] text-[#BCC9CD]">
                    Agile Team Sprints
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-primary-975 h-70 rounded-md p-8">
              <img src="doubletick-icon-testi.svg" alt="quote" />

              <p className="font-label text-sm text-[#D6E3FF] mt-6 mb-6">
                "The e-commerce platform delivered by Jovin exceeded our
                benchmark for mobile responsiveness and real-time inventory
                tracking. Outstanding technical execution!"
              </p>

              <div className="flex gap-3 items-center">
                <div className="flex items-center justify-center bg-primary-900 p-2 rounded-lg">
                  <h1 className="font-label font-bold text-sm text-[#4CD7F6]">
                    PS
                  </h1>
                </div>
                <div>
                  <h1 className="font-label font-semibold text-[#D6E3FF] text-xs">
                    Product Stakeholder
                  </h1>
                  <p className="font-label text-[13px] text-[#BCC9CD]">
                    XYZ Retail Expansion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
