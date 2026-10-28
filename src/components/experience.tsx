"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiCheckCircle } from "react-icons/fi";
import { SectionHeading, Stagger, StaggerItem, ease } from "./motion";

const highlights = [
  "Architected and delivered end-to-end fullstack applications using React, Next.js, Express, and PostgreSQL.",
  "Designed scalable database schemas, normalized relational models, and secured RESTful endpoints against vulnerabilities.",
  "Collaborated in agile sprints with peer engineers, adhering to git branch strategies, CI/CD testing, and structured code reviews.",
  "Championed rigorous performance optimization, reducing server response latencies and ensuring cross-device responsive layouts.",
];

export function ExperienceSection() {
  return (
    <section id="experienceSection" className="bg-surface bg-grid">
      <div className="section-shell">
        <SectionHeading
          index="04"
          eyebrow="Trajectory"
          title="Engineering Journey & Experience"
        />

        <ol className="relative border-l border-line pl-8 md:pl-12">
          {/* timeline line fills in as it scrolls into view */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease }}
            className="absolute top-0 -left-px h-full w-px origin-top bg-linear-to-b from-accent to-accent-alt/0"
          />

          <li className="relative">
            <span
              aria-hidden
              className="absolute top-2 -left-10 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-accent/20 md:-left-14"
            />

            <motion.article
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease }}
              className="card p-6 md:p-10"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-tittle text-xs font-bold tracking-wider text-accent">
                    INCUBATOR PROGRAM
                  </p>
                  <h3 className="mt-2 font-headline text-2xl font-semibold text-ink md:text-3xl">
                    Fullstack Web Developer
                  </h3>
                  <p className="mt-1 font-label text-base text-accent-alt">
                    Purwadhika Digital Technology School
                  </p>
                </div>

                <p className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-canvas px-3 py-1.5 font-label text-xs font-semibold text-ink-muted">
                  <FiCalendar className="h-4 w-4 text-accent" aria-hidden />
                  <time>Agustus 2026 - Desember 2026</time>
                </p>
              </div>

              <p className="mt-6 max-w-3xl font-label text-base leading-relaxed text-ink-muted">
                Engaged in an intensive fullstack engineering immersion focusing
                on enterprise-grade software development practices, agile
                methodology, and end-to-end architecture delivery.
              </p>

              <Stagger className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                {highlights.map((text) => (
                  <StaggerItem
                    key={text}
                    className="flex gap-3 rounded-lg border border-line/50 bg-canvas/40 p-4"
                  >
                    <FiCheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden
                    />
                    <p className="font-label text-sm leading-relaxed text-ink">
                      {text}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </motion.article>
          </li>
        </ol>
      </div>
    </section>
  );
}
