"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCode, FiExternalLink, FiImage } from "react-icons/fi";
import { portfolioData } from "../data/data";
import { SectionHeading, ease } from "./motion";

const palette = ["#010E24", "#112036", "#4CD7F6", "#4FDBC8", "#D6E3FF"];

export function PortofolioSection() {
  return (
    <section id="portofolioSection" className="bg-canvas bg-grid">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="03"
            eyebrow="Selected Works"
            title="Featured Projects & Architecture"
          />
          <div
            aria-hidden
            className="mb-12 hidden items-center gap-3 self-start rounded-full border border-line bg-surface px-4 py-2 md:mb-16 md:flex md:self-end"
          >
            <span className="font-label text-xs font-semibold text-ink-muted">
              Theme Palette
            </span>
            <span className="flex -space-x-1">
              {palette.map((color) => (
                <span
                  key={color}
                  className="h-4 w-4 rounded-full ring-2 ring-surface"
                  style={{ backgroundColor: color }}
                />
              ))}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {portfolioData.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
              className="card grid grid-cols-1 items-center gap-10 bg-card/40 p-6 md:p-10 lg:grid-cols-2"
            >
              {/* Project info */}
              <div
                className={`flex flex-col items-start ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 font-tittle text-xs font-bold">
                  <span className="tracking-wider text-accent-alt">
                    PROJECT {String(i + 1).padStart(2, "0")} /{" "}
                    {String(portfolioData.length).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 font-semibold text-accent">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      aria-hidden
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="font-headline text-2xl font-semibold leading-tight tracking-tight text-ink lg:text-3xl text-balance">
                  {project.title}
                </h3>

                <p className="mt-4 font-label text-base leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line/60 bg-card px-2.5 py-1 font-label text-xs font-semibold text-ink-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent-alt px-5 font-label text-sm font-semibold text-on-accent transition-transform hover:scale-[1.03] active:scale-[0.97]"
                  >
                    <FiExternalLink className="h-4 w-4" aria-hidden />
                    Live Demo
                  </Link>
                  <Link
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-5 font-label text-sm font-semibold text-ink-muted transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    <FiCode className="h-4 w-4" aria-hidden />
                    View Repository
                  </Link>
                </div>
              </div>

              {/* Browser mockup preview */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`group w-full overflow-hidden rounded-xl border border-line/60 bg-[#080f19] shadow-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="flex items-center gap-3 border-b border-line/40 bg-[#0d1624] px-4 py-2.5">
                  <div className="flex gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/70" />
                  </div>
                  <div className="mx-auto min-w-0 max-w-xs truncate rounded-md border border-line/30 bg-[#060b13] px-4 py-0.5 font-tittle text-xs text-ink-muted/70">
                    {project.siteUrlText}
                  </div>
                  <div className="w-10" aria-hidden />
                </div>

                <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden bg-card/20">
                  {project.imgSrc ? (
                    <Image
                      src={project.imgSrc}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      quality={90}
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="p-6 text-center">
                      <FiImage
                        className="mx-auto h-12 w-12 text-ink-muted/30"
                        aria-hidden
                      />
                      <p className="mt-2 font-label text-sm text-ink-muted/60">
                        Preview coming soon
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
