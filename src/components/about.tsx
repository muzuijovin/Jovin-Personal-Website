"use client";

import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiMapPin,
  FiSearch,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { aboutPoint, education } from "../data/data";
import { SectionHeading, Stagger, StaggerItem, hoverLift } from "./motion";

const principles = [
  {
    icon: FiSearch,
    title: "Research-Driven Analysis",
    text: "A scientific research background that shapes how I debug: observe, form a hypothesis, then verify.",
  },
  {
    icon: FiLayers,
    title: "Clean, Typed Architecture",
    text: "Reusable TypeScript components, well-defined REST endpoints, and carefully modeled relational data.",
  },
  {
    icon: FiUsers,
    title: "Collaborative Delivery",
    text: "Incremental Git workflows, clear communication, and disciplined time management.",
  },
];

export function AboutSection() {
  return (
    <section id="aboutSection" className="bg-canvas bg-grid">
      <div className="section-shell">
        <SectionHeading
          index="01"
          eyebrow="Profile Narrative"
          title="From scientific research to full-stack engineering."
        />

        <Stagger className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Story card: spans the left side */}
          <StaggerItem className="lg:col-span-7 lg:row-span-2">
            <motion.article
              {...hoverLift}
              className="card flex h-full flex-col p-8 md:p-10"
            >
              <IconBox>
                <FiUser className="h-5 w-5" aria-hidden />
              </IconBox>
              <p className="mt-6 font-label text-base leading-relaxed text-ink md:text-lg">
                I&apos;m a Full-Stack Web Developer completing an
                intensive Full-Stack Web Development program at Purwadhika
                Digital Technology School. I build end-to-end web applications
                with TypeScript, React, Next.js, Node.js, Express.js,
                PostgreSQL and Prisma ORM, from responsive interfaces and REST
                API design to relational database modeling.
              </p>
              <p className="mt-4 font-label text-sm leading-relaxed text-ink-muted md:text-base">
                Before writing code, I earned a Bachelor&apos;s degree from
                Brawijaya University, where my research in experimental science
                trained me to think analytically, debug methodically, and pay
                close attention to detail. Today I bring that same rigor to
                software, turning complex requirements into clean, scalable
                code.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/25 bg-accent/5 p-4">
                <FiCode
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden
                />
                <p className="font-label text-sm leading-relaxed text-ink">
                  <span className="font-semibold">Currently building</span>{" "}
                  SportTicketing, a full-stack sports event ticketing platform
                  with Next.js, Express.js, PostgreSQL and Prisma.
                </p>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {aboutPoint.map((item) => (
                  <li
                    key={item.tittle}
                    className="flex items-center justify-center rounded-lg border border-primary-800/40 bg-primary-900/60 px-3 py-3 text-center font-label text-xs font-medium text-primary-300"
                  >
                    {item.isi}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-8 font-label text-sm text-ink-muted">
                <span className="inline-flex items-center gap-2">
                  <FiMapPin className="h-4 w-4 text-accent" aria-hidden />
                  Depok, West Java, Indonesia
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiBriefcase className="h-4 w-4 text-accent" aria-hidden />
                  Open to full-time & internship roles
                </span>
              </div>
            </motion.article>
          </StaggerItem>

          {/* Education & training */}
          <StaggerItem className="lg:col-span-5">
            <motion.article {...hoverLift} className="card h-full p-8">
              <div className="flex items-center gap-4">
                <IconBox>
                  <FiBookOpen className="h-5 w-5" aria-hidden />
                </IconBox>
                <p className="font-tittle text-xs tracking-wider text-accent">
                  EDUCATION & TRAINING
                </p>
              </div>
              <ol className="mt-6 flex flex-col gap-5 border-l border-line pl-5">
                {education.map((item) => (
                  <li key={item.institution} className="relative">
                    <span
                      aria-hidden
                      className="absolute top-1.5 -left-6.25h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-card"
                    />
                    <h3 className="font-headline text-base font-semibold text-ink">
                      {item.institution}
                    </h3>
                    <p className="font-label text-sm text-ink-muted">
                      {item.program}
                    </p>
                    <p className="mt-1 font-tittle text-xs text-primary-400">
                      {item.period}
                      {item.note && (
                        <span className="text-ink-muted"> · {item.note}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ol>
            </motion.article>
          </StaggerItem>

          {/* Principles */}
          <StaggerItem className="lg:col-span-5">
            <motion.article {...hoverLift} className="card h-full p-8">
              <p className="font-tittle text-xs tracking-wider text-accent">
                HOW I WORK
              </p>
              <ul className="mt-5 flex flex-col gap-5">
                {principles.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-alt"
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-label text-sm font-semibold text-ink">
                        {title}
                      </h3>
                      <p className="mt-1 font-label text-sm leading-relaxed text-ink-muted">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-900 text-accent-alt">
      {children}
    </div>
  );
}
