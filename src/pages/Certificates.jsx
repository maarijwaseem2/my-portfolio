import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, ExternalLink, X, Calendar } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";

const certificates = [
  {
    title: "Mastering Data Structures & Algorithms (C/C++)",
    issuer: "Udemy",
    author: "Abdul Bari",
    date: "Dec 2022",
    image: "/certificate/dsa.webp",
    pdf: "/certificate/dsa.pdf",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy",
    author: "Dr. Angela Yu",
    date: "Aug 2023",
    image: "/certificate/web.webp",
    pdf: "/certificate/web.pdf",
  },
  {
    title: "The Complete HTML5 Course: Beginning to Expert",
    issuer: "Udemy",
    author: "Creative Online School",
    date: "May 2023",
    image: "/certificate/html.webp",
    pdf: "/certificate/html.pdf",
  },
  {
    title: "React Basics",
    issuer: "Coursera",
    author: "Meta",
    date: "Aug 2023",
    image: "/certificate/react.webp",
    pdf: "/certificate/react.pdf",
  },
  {
    title: "Version Control",
    issuer: "Coursera",
    author: "Meta",
    date: "Aug 2023",
    image: "/certificate/ControlVersion.webp",
    pdf: "/certificate/ControlVersion.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera",
    author: "IBM",
    date: "Aug 2023",
    image: "/certificate/ai.webp",
    pdf: "/certificate/ai.pdf",
  },
];

const Certificates = () => {
  const { isDarkMode } = useTheme();
  const [selected, setSelected] = useState(null);

  const badgeClass = (issuer) => {
    const map = {
      Udemy: isDarkMode
        ? "bg-purple-500/15 text-purple-300 border-purple-400/20"
        : "bg-purple-50 text-purple-700 border-purple-200",
      Coursera: isDarkMode
        ? "bg-blue-500/15 text-blue-300 border-blue-400/20"
        : "bg-blue-50 text-blue-700 border-blue-200",
    };
    return map[issuer] || "";
  };

  // Close on Escape + lock body scroll while the lightbox is open
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  const cert = selected !== null ? certificates[selected] : null;

  return (
    <section id="certificates" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Certificates
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mx-auto mt-4 max-w-2xl text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Courses and credentials I&apos;ve earned along the way
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}>
              <button
                type="button"
                onClick={() => setSelected(i)}
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1.5 ${
                  isDarkMode
                    ? "border-white/10 bg-white/[0.04] hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                    : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10"
                }`}
              >
                {/* Preview */}
                <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-slate-900/40 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                      <Eye className="h-4 w-4" />
                      View
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badgeClass(
                        c.issuer
                      )}`}
                    >
                      {c.issuer}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-xs ${
                        isDarkMode ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      <Calendar className="h-3 w-3" />
                      {c.date}
                    </span>
                  </div>
                  <h3
                    className={`font-display text-base font-bold leading-snug ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {c.author}
                  </p>
                </div>
                <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox (portal to body so it sits above the navbar) */}
      {createPortal(
        <AnimatePresence>
          {cert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 12 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className={`relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border ${
                  isDarkMode
                    ? "border-white/10 bg-surface"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex items-center justify-center bg-white p-3">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-[66vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div
                  className={`flex shrink-0 flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between ${
                    isDarkMode ? "bg-surface" : "bg-white"
                  }`}
                >
                  <div className="min-w-0">
                    <h3
                      className={`font-display text-lg font-bold ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className={`mt-0.5 text-sm ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {cert.issuer} · {cert.author} · {cert.date}
                    </p>
                  </div>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Open PDF
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Certificates;
