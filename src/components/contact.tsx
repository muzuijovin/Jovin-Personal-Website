"use client";

import { useForm } from "react-hook-form";
import { contactMe } from "../data/data";
import axios, { isAxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<any>();

  const handleSentMessage = async (data: any) => {
    try {
      await axios.post(
        "https://api.backendless.com/1B12E6FF-A338-4279-BC91-1F5A39A25BFA/4C7BD5CF-F180-4CA1-A3D3-0D09CFD4EB00/data/personalwebsite",
        data,
      );
      reset();
      toast.success("post berhasil");
    } catch (error: any) {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <section
        id="contactSection"
        className="h-max bg-primary-975 p-12 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
      >
        <div className="mb-16">
          <h3 className="font-label text-[#4FDBC8] text-xs">
            06 / CONNECT ----
          </h3>
          <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
            Let's Build Something High- Performance
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
          <div className="p-2">
            <form
              onSubmit={handleSubmit(handleSentMessage)}
              id="formContact"
              className="p-10 bg-primary-950 rounded-md w-full"
            >
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
                    {...register("name")}
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <label
                    className="label font-label font-medium text-[12px] text-[#D6E3FF]"
                    htmlFor="email"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input bg-primary-975 text-[#869397] font-label text-xs w-full"
                    placeholder="Input your email"
                    {...register("email")}
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
                  {...register("projectSubject")}
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
                  id="projectDescription"
                  className="input bg-primary-975 text-[#869397] font-label text-xs w-full h-20 overflow-scroll"
                  placeholder="Describe your architecture requirements, target deadlines, and technical specifications..."
                  {...register("projectDescription")}
                />
              </fieldset>

              <div className="w-full flex justify-center mt-5">
                <button disabled={isSubmitting} className="btn btn-success w-xs font-label font-medium text-[#00424F] text-xs">
                  Sent Message
                </button>
              </div>
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

      <ToastContainer/>
    </>
  );
}
