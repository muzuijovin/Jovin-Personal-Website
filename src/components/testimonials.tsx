"use client";

import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "../data/data";
import { SectionHeading, Stagger, StaggerItem, hoverLift } from "./motion";

export function TestimonialsSection() {
  return (
    <section id="testimonialsSection" className="bg-canvas bg-grid">
      <div className="section-shell">
        <SectionHeading
          index="05"
          eyebrow="Endorsements"
          title="What Mentors & Peers Say"
          description="Testimonials on technical execution, work ethic, and cross-functional communication."
          align="center"
        />

        <Stagger
          delay={0.1}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <motion.figure
                {...hoverLift}
                className="card flex h-full flex-col bg-surface p-8 transition-colors hover:border-accent/40"
              >
                <RiDoubleQuotesL
                  className="h-8 w-8 text-accent/70"
                  aria-hidden
                />
                <blockquote className="mt-5 flex-1 font-label text-base leading-relaxed text-ink">
                  {item.quote}
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3 border-t border-line/60 pt-6">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-900 font-label text-sm font-bold text-accent-alt"
                  >
                    {item.initials}
                  </span>
                  <span>
                    <span className="block font-label text-sm font-semibold text-ink">
                      {item.name}
                    </span>
                    <span className="block font-label text-sm text-ink-muted">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
