"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import type { IconType } from "react-icons";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { contactMe } from "../data/data";
import { SectionHeading, Stagger, StaggerItem, Reveal } from "./motion";

const contactIcons: Record<string, IconType> = {
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub,
  location: FiMapPin,
};

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (min. 2 characters)."),
  email: z.email("Please enter a valid email, e.g. name@company.com."),
  projectSubject: z
    .string()
    .trim()
    .min(3, "Add a short subject so I know what it's about."),
  projectDescription: z
    .string()
    .trim()
    .min(10, "Tell me a bit more about the project (min. 10 characters)."),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const handleSentMessage = async (data: ContactForm) => {
    try {
      await axios.post(
        "https://api.backendless.com/1B12E6FF-A338-4279-BC91-1F5A39A25BFA/4C7BD5CF-F180-4CA1-A3D3-0D09CFD4EB00/data/personalwebsite",
        data,
      );
      reset();
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      toast.error("Couldn't send your message. Please try again or email me directly.");
    }
  };

  return (
    <>
      <section id="contactSection" className="bg-surface bg-grid">
        <div className="section-shell">
          <SectionHeading
            index="06"
            eyebrow="Connect"
            title="Let's Build Something High-Performance"
          />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <form
                onSubmit={handleSubmit(handleSentMessage)}
                id="formContact"
                noValidate
                className="card flex flex-col gap-6 p-6 md:p-10"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field
                    id="name"
                    label="Your Name"
                    error={errors.name?.message}
                  >
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={inputClass(!!errors.name)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                    />
                  </Field>
                  <Field
                    id="email"
                    label="Your Email Address"
                    error={errors.email?.message}
                  >
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className={inputClass(!!errors.email)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email")}
                    />
                  </Field>
                </div>

                <Field
                  id="projectSubject"
                  label="Project Subject"
                  error={errors.projectSubject?.message}
                >
                  <input
                    type="text"
                    id="projectSubject"
                    placeholder="Full-Stack Web Application / Architecture Consultation"
                    className={inputClass(!!errors.projectSubject)}
                    aria-invalid={!!errors.projectSubject}
                    aria-describedby={
                      errors.projectSubject ? "projectSubject-error" : undefined
                    }
                    {...register("projectSubject")}
                  />
                </Field>

                <Field
                  id="projectDescription"
                  label="Project Scope & Details"
                  error={errors.projectDescription?.message}
                >
                  <textarea
                    id="projectDescription"
                    rows={5}
                    placeholder="Describe your architecture requirements, target deadlines, and technical specifications..."
                    className={`${inputClass(!!errors.projectDescription)} h-auto resize-y py-3`}
                    aria-invalid={!!errors.projectDescription}
                    aria-describedby={
                      errors.projectDescription
                        ? "projectDescription-error"
                        : undefined
                    }
                    {...register("projectDescription")}
                  />
                </Field>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent font-label text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:self-start md:px-8"
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader className="h-4 w-4 animate-spin" aria-hidden />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4" aria-hidden />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card h-full p-6 md:p-10">
                <h3 className="font-tittle text-xs font-bold tracking-wider text-accent">
                  DIRECT COORDINATES
                </h3>

                <Stagger className="mt-6 flex flex-col gap-3">
                  {contactMe.map((item) => {
                    const Icon = contactIcons[item.label] ?? FiMail;
                    const external = item.link.startsWith("http");
                    return (
                      <StaggerItem key={item.label}>
                        <a
                          href={item.link}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors hover:border-line hover:bg-canvas/50"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-900 text-accent-alt">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-label text-xs font-semibold text-ink-muted">
                              {item.contact}
                            </span>
                            <span className="block font-label text-sm font-semibold text-ink wrap-anywhere">
                              {item.isiContact}
                            </span>
                          </span>
                          <FiArrowUpRight
                            className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                            aria-hidden
                          />
                        </a>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ToastContainer theme="dark" position="bottom-right" autoClose={4000} />
    </>
  );
}

function inputClass(hasError: boolean) {
  return `h-12 w-full rounded-lg border bg-surface px-4 font-label text-base text-ink placeholder:text-ink-muted/50 transition-colors focus:outline-none focus-visible:outline-none focus:ring-2 ${
    hasError
      ? "border-red-400/70 focus:ring-red-400/40"
      : "border-line focus:border-accent-alt focus:ring-accent-alt/30"
  }`;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-label text-sm font-medium text-ink">
        {label} <span className="text-accent" aria-hidden>*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="font-label text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
