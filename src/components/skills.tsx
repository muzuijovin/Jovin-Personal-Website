"use client";

import { motion } from "framer-motion";
import { FiCheck, FiCode, FiServer, FiTool } from "react-icons/fi";
import { skillsLayout, techCloud } from "../data/data";
import {
  Reveal,
  SectionHeading,
  Stagger,
  StaggerItem,
  fadeUp,
  hoverLift,
  stagger,
} from "./motion";

const skillIcons = [FiCode, FiServer, FiTool];

export function SkillsSection() {
  return (
    <section id="skillsSection" className="bg-surface bg-grid">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Technical Stack"
          title="Capabilities & Toolchain"
          description="Specialized across both client interaction layers and mission-critical distributed database structures."
        />

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillsLayout.map((item, i) => {
            const Icon = skillIcons[i % skillIcons.length];
            return (
              <StaggerItem key={item.tittle}>
                <motion.article
                  {...hoverLift}
                  className="card group relative flex h-full flex-col overflow-hidden p-8 transition-colors hover:border-accent/40"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-accent-alt">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>

                  <h3 className="mt-6 font-headline text-xl font-semibold text-ink">
                    {item.hsatu}
                  </h3>
                  <p className="mt-2 font-label text-sm leading-relaxed text-ink-muted">
                    {item.paragraph}
                  </p>

                  <ul className="mt-8 flex flex-col divide-y divide-line/60 border-y border-line/60">
                    {[item.spansatu, item.spandua, item.spantiga].map(
                      (skill) => (
                        <li
                          key={skill}
                          className="flex items-center justify-between py-3 font-label text-sm font-medium text-ink"
                        >
                          {skill}
                          <FiCheck
                            className="h-4 w-4 text-accent"
                            aria-hidden
                          />
                        </li>
                      ),
                    )}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {[item.kolompertama, item.kolomdua, item.kolomtiga].map(
                      (tag) => (
                        <li
                          key={tag}
                          className="rounded-md bg-primary-900/70 px-2.5 py-1 font-label text-xs font-medium text-ink-muted"
                        >
                          {tag}
                        </li>
                      ),
                    )}
                  </ul>
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="card mt-8 bg-canvas p-8">
          <h3 className="font-tittle text-xs tracking-wider text-accent">
            TECH STACK I WORK WITH
          </h3>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger(0.04)}
            className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
          >
            {techCloud.map(({ title, box, icon: Icon, color }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-line bg-card px-2 py-4 text-center transition-colors hover:border-accent/50"
              >
                <Icon
                  aria-hidden
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                />
                <span className="font-label text-xs font-medium text-ink">
                  {box}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </Reveal>
      </div>
    </section>
  );
}
