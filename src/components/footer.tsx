export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 font-label text-sm text-ink-muted md:flex-row md:px-10">
        <p>&copy; {new Date().getFullYear()} Jovin Najwan. All rights reserved.</p>
        <p className="font-tittle text-xs text-accent">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
