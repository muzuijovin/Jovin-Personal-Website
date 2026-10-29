"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { buttonNavbar } from "../data/data";
import { ease } from "./motion";
import { NotificationBell } from "./notification-bell";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Solid background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const sections = buttonNavbar
      .map((menu) => document.querySelector(menu.url))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line/60 bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-10"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md"
          aria-label="Jovin Najwan, back to top"
        >
          <Image
            src="/logo-jn-hd.png"
            alt=""
            width={40}
            height={40}
            unoptimized
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-headline text-base font-bold text-ink md:text-lg">
              Jovin Najwan
            </span>
            <span className="font-tittle text-[11px] tracking-wider text-accent">
              FULL-STACK DEV
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {buttonNavbar.map((menu) => {
            const isActive = active === menu.url;
            return (
              <li key={menu.label}>
                <Link
                  href={menu.url}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative inline-flex h-10 items-center rounded-md px-3 font-label text-sm transition-colors ${
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {menu.tittle}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <NotificationBell />
          <Link
            href="https://github.com/muzuijovin/Jovin-Personal-Website.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="hidden h-10 w-10 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-card hover:text-ink sm:inline-flex"
          >
            <FiGithub className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href="#contactSection"
            className="hidden h-10 items-center rounded-md bg-accent-alt px-4 font-label text-sm font-semibold text-on-accent transition-transform hover:scale-[1.03] active:scale-[0.97] sm:inline-flex"
          >
            Hire Me
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-card text-ink lg:hidden"
          >
            {open ? (
              <FiX className="h-5 w-5" aria-hidden />
            ) : (
              <FiMenu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            className="border-t border-line/60 lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {buttonNavbar.map((menu) => (
                <li key={menu.label}>
                  <Link
                    href={menu.url}
                    onClick={() => setOpen(false)}
                    className={`flex h-12 items-center rounded-md px-3 font-label text-base transition-colors hover:bg-card ${
                      active === menu.url ? "text-accent" : "text-ink"
                    }`}
                  >
                    {menu.tittle}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="#contactSection"
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center justify-center rounded-md bg-accent-alt font-label font-semibold text-on-accent"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
