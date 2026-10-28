"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { pointPlus } from "../data/data";
import { ease, fadeUp, stagger } from "./motion";

const codeLines = [
  { key: "name", value: "'Jovin Najwan'" },
  { key: "role", value: "'Full Stack Web Developer'" },
  { key: "focus", value: "'Scalable Systems'" },
];

export function HeroSection() {
  return (
    <section
      id="heroSection"
      className="relative overflow-hidden bg-surface bg-grid"
    >
      {/* soft accent glow behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-128 w-lg rounded-full bg-accent-alt/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-112 w-md rounded-full bg-accent/10 blur-3xl"
      />

      <div className="section-shell relative grid min-h-dvh grid-cols-1 items-center gap-14 pt-28 md:pt-32 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="flex flex-col items-start"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-tittle text-xs tracking-wide text-accent"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            OPEN TO FULL-STACK OPPORTUNITIES
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-primary-100 sm:text-5xl lg:text-6xl text-balance"
          >
            Engineering robust{" "}
            <span className="bg-linear-to-r from-accent to-accent-alt bg-clip-text text-transparent">
              web architectures
            </span>{" "}
            that empower businesses to scale.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-label text-base leading-relaxed text-ink-muted md:text-lg"
          >
            Full-stack developer completing the Full-Stack Web
            Development program at Purwadhika, building end-to-end web apps
            with TypeScript, Next.js, Express, PostgreSQL and Prisma.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#portofolioSection"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-accent-alt px-6 font-label text-sm font-semibold text-on-accent shadow-[0_8px_30px_-8px_rgba(76,215,246,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              View Portfolio
              <FiArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#contactSection"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-line bg-card/60 px-6 font-label text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:bg-card"
            >
              <FiMail aria-hidden className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>

          <motion.dl
            variants={stagger(0.08)}
            className="mt-12 grid w-full grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {pointPlus.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="card flex flex-col gap-1 px-5 py-4"
              >
                <dt className="order-2 font-label text-xs uppercase tracking-wider text-ink-muted">
                  {item.paragraph}
                </dt>
                <dd className="order-1 font-headline text-2xl font-bold text-accent-alt">
                  {item.hsatu}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-canvas-deep shadow-[0_0_60px_-12px_rgba(79,219,200,0.25)]">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/foto-jovin.png"
                alt="Portrait of Jovin Najwan"
                fill
                preload
                sizes="(min-width: 1024px) 448px, 384px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-canvas-deep via-transparent to-transparent"
              />
              <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-canvas-deep/80 px-3 py-1 font-label text-xs text-primary-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Full-Stack Core
              </span>
            </div>

            <div className="border-t border-white/5 bg-tertiary-900 p-4 font-tittle text-xs leading-6">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFB4AB]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#04B4A2]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-alt" />
                </div>
                <span className="text-slate-300">system.runtime.ts</span>
              </div>
              <p>
                <span className="text-secondary-400">const</span>{" "}
                <span className="text-slate-200">developer</span>{" "}
                <span className="text-slate-400">= {"{"}</span>
              </p>
              {codeLines.map((line, i) => (
                <motion.p
                  key={line.key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.4, ease }}
                  className="pl-5"
                >
                  <span className="text-slate-200">{line.key}:</span>{" "}
                  <span className="text-[#93c5fd]">{line.value}</span>
                  <span className="text-slate-400">,</span>
                </motion.p>
              ))}
              <p className="text-slate-400">
                {"}"}
                <span
                  aria-hidden
                  className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent"
                />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
