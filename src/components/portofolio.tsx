import { portfolioData } from "../data/data";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export function PortofolioSection() {
  return (
    <>
      <section
        id="portofolioSection"
        className="h-max p-12 bg-[#041329] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-label text-[#4FDBC8] text-xs">
              03 / SELECTED WORKS ---
            </h3>
            <h1 className="font-bold font-headline text-4xl text-neutral-100 mt-3">
              Featured Projects & Architecture
            </h1>
          </div>
          <div className="flex gap-3 p-2  bg-primary-975 rounded-md">
            <h3 className="font-label font-semibold text-[11px] text-[#BCC9CD]">
              Theme Palette:
            </h3>
            <div className="flex">
              <GoDotFill className="text-[#010E24] w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-primary-950 w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-[#4CD7F6] w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-[#4FDBC8] w-5 h-5 cursor-pointer" />
              <GoDotFill className="text-[#D6E3FF] w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* container proto */}
        <div className="max-w-7xl mx-auto flex flex-col gap-12 mt-5">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="w-full bg-primary-950/40 border border-[#1C2A41]/40 rounded-xl p-8 flex flex-col lg:flex-row gap-8 items-center justify-between"
            >
              {/* Sisi Kiri: Informasi Proyek */}
              <div className="flex-1 max-w-152.5 flex flex-col items-start text-left">
                {/* Badge Status & Nomor Proyek */}
                <div className="flex items-center gap-3 mb-4 font-tittle text-[11px] font-bold">
                  <span className="text-[#4CD7F6] tracking-wider">
                    {project.projectNumber}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[#4FDBC8] bg-[#4FDBC8]/20 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4FDBC8]"></span>
                    {project.status}
                  </span>
                </div>

                {/* Judul Proyek */}
                <h3 className="font-headline text-2xl lg:text-[28px] leading-9 font-semibold text-[#D6E3FF] mb-4 tracking-[-0.7px]">
                  {project.title}
                </h3>

                {/* Deskripsi Proyek */}
                <p className="font-label text-[15px] leading-[24.4px] text-[#BCC9CD] font-regular mb-6">
                  {project.description}
                </p>

                {/* Tags Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="font-label text-[11px] font-semibold px-2.5 py-1 rounded bg-primary-950 text-[#BCC9CD] border border-[#1C2A41]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={project.liveDemoUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center font-label text-xs font-semibold px-4 py-2.5 rounded bg-[#4CD7F6] text-[#00424F] hover:bg-[#45c3de] transition-colors"
                  >
                    {/* Icon Live Demo */}
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {project.id === 2
                      ? "Request Architecture Deck"
                      : "Live Demo"}
                  </Link>

                  <Link
                    href={project.repositoryUrl}
                     target="_blank"
                    className="inline-flex items-center justify-center font-label text-xs font-semibold px-4 py-2.5 rounded border border-[#1C2A41] text-[#BCC9CD] hover:bg-primary-950 transition-colors"
                  >
                    {/* Icon Repository */}
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    View Repository
                  </Link>
                </div>
              </div>

              {/* Sisi Kanan: Preview Gambar / Mockup Browser */}
              <div className="flex-1 w-full max-w-125 flex flex-col rounded-lg bg-[#080f19] border border-[#1C2A41]/50 overflow-hidden shadow-2xl">
                {/* Header Bar Browser Mockup */}
                <div className="w-full bg-[#0d1624] px-4 py-2 flex items-center justify-between border-b border-[#1C2A41]/30">
                  {/* Tombol Tiga Titik Browser */}
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/70"></span>
                  </div>
                  {/* URL Bar */}
                  <div className="font-tittle text-[11px] text-[#BCC9CD]/60 px-6 py-0.5 bg-[#060b13] rounded-md border border-[#1C2A41]/20 max-w-60 truncate">
                    {project.siteUrlText}
                  </div>
                  {/* Placeholder Spacing */}
                  <div className="w-10"></div>
                </div>

                {/* Area Gambar Portofolio */}
                <div className="relative w-full aspect-4/3 bg-primary-950/20 flex items-center justify-center">
                  {project.imgSrc ? (
                    <Image
                      src={project.imgSrc}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    // Tampilan fallback jika gambar belum Anda isi
                    <div className="text-center p-6">
                      <svg
                        className="mx-auto h-12 w-12 text-[#BCC9CD]/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-2 text-xs text-[#BCC9CD]/40 font-label">
                        Tempatkan gambar Anda di sini nanti
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
