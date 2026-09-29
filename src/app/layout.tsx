import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jovin Najwan Personal Webiste",
  description: "personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" className="scroll-smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
