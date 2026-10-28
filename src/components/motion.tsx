"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* Shared motion tokens so every section moves with the same rhythm */
export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const stagger = (delay = 0.06): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

export const hoverLift = {
  whileHover: { y: -4 },
  transition: { type: "spring", stiffness: 300, damping: 22 },
} as const;

/* Honors the OS "reduce motion" setting for every animation below it */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/* Fades + slides content up the first time it scrolls into view */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/* Parent that reveals its <StaggerItem> children one after another */
export function Stagger({ children, className, delay = 0.06 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger(delay)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`mb-12 md:mb-16 flex flex-col gap-4 ${centered ? "items-center text-center" : ""}`}
    >
      <p className="flex items-center gap-3 font-tittle text-xs tracking-[0.2em] text-accent uppercase">
        <span>{index}</span>
        <span aria-hidden className="h-px w-10 bg-accent/50" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="max-w-3xl font-headline text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl font-label text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
