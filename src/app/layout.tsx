import type { Metadata, Viewport } from "next";
import { Manrope, Geist, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Jovin Najwan | Full-Stack Web Developer",
  description:
    "Personal website of Jovin Najwan, a full-stack web developer building scalable web architectures with React, Next.js, Express and PostgreSQL.",
};

export const viewport: Viewport = {
  themeColor: "#041329",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${manrope.variable} ${geist.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-canvas antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-accent-alt focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
