"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiBell } from "react-icons/fi";
import { notifications } from "../data/data";
import { ease } from "./motion";

const STORAGE_KEY = "seen-notification-id";
const latestId = Math.max(...notifications.map((n) => n.id));

export function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Show the red dot until the visitor has opened the latest updates
  useEffect(() => {
    const checkUnread = () => {
      try {
        const seen = Number(localStorage.getItem(STORAGE_KEY) ?? 0);
        setHasUnread(seen < latestId);
      } catch {
        setHasUnread(true);
      }
    };
    checkUnread();
  }, []);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = () => {
    setOpen((v) => !v);
    if (hasUnread) {
      setHasUnread(false);
      try {
        localStorage.setItem(STORAGE_KEY, String(latestId));
      } catch {
        // storage unavailable: the dot simply returns next visit
      }
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <motion.button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="notification-panel"
        aria-label={hasUnread ? "Updates, new items available" : "Updates"}
        whileTap={{ scale: 0.92 }}
        className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-card hover:text-ink"
      >
        <motion.span
          animate={hasUnread ? { rotate: [0, -14, 12, -8, 6, 0] } : { rotate: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.2 }}
          className="inline-flex origin-top"
        >
          <FiBell className="h-5 w-5" aria-hidden />
        </motion.span>
        {hasUnread && (
          <span
            aria-hidden
            className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#FFB4AB] ring-2 ring-canvas"
          />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="notification-panel"
            role="region"
            aria-label="Latest updates"
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease } }}
            exit={{ opacity: 0, scale: 0.95, y: -6, transition: { duration: 0.13 } }}
            className="absolute top-12 right-0 z-60 w-80 max-w-[calc(100vw-2.5rem)] origin-top-right overflow-hidden rounded-xl border border-line bg-card shadow-2xl"
          >
            <p className="border-b border-line/60 px-4 py-3 font-tittle text-xs tracking-wider text-accent">
              LATEST UPDATES
            </p>
            <ul className="max-h-96 overflow-y-auto">
              {notifications.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col gap-1 border-b border-line/40 px-4 py-3 transition-colors last:border-b-0 hover:bg-surface"
                  >
                    <span className="self-start rounded-full bg-accent/15 px-2 py-0.5 font-label text-[11px] font-semibold text-accent">
                      {item.tag}
                    </span>
                    <span className="font-label text-sm font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="font-label text-xs leading-relaxed text-ink-muted">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
