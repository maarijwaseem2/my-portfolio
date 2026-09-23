import React, { Suspense, lazy } from "react";
import { ExternalLink, Download, ChevronDown } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

// Lazy-load the WebGL scene so three.js ships as its own chunk and the hero
// text + CTAs paint immediately.
const Hero3D = lazy(() => import("../components/Hero3D"));

const Home = () => {
  const { isDarkMode } = useTheme();

  const handleCVDownload = async () => {
    try {
      const response = await fetch("/CV.pdf");
      if (!response.ok) throw new Error("CV not found");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Syed_Abdul_Maarij_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("CV download failed:", error);
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${
              isDarkMode
                ? "border-white/10 bg-white/5 text-slate-300"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to opportunities
          </span>

          <h1
            className={`mt-6 font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Syed Abdul{" "}
            <span className="animate-gradient bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Maarij
            </span>
          </h1>

          <p
            className={`mx-auto mt-5 max-w-xl font-display text-xl font-medium md:text-2xl lg:mx-0 ${
              isDarkMode ? "text-slate-200" : "text-slate-700"
            }`}
          >
            Full-Stack Engineer building scalable products that businesses run
            on.
          </p>

          <p
            className={`mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg lg:mx-0 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I build production-grade systems end to end &mdash; secure backends
            and clean REST APIs behind fast, modern React and Next.js frontends.
            Lately that means shipping AI-powered features and cloud deployments
            that hold up under real traffic.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40"
            >
              View my work
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <button
              onClick={handleCVDownload}
              className={`group inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode
                  ? "border-white/15 text-white hover:border-indigo-400 hover:bg-white/5"
                  : "border-slate-300 text-slate-800 hover:border-indigo-400 hover:bg-white"
              }`}
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </button>
          </div>
        </div>

        {/* Right: 3D centerpiece */}
        <div className="relative order-first lg:order-last">
          <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-transparent blur-2xl" />
            <Suspense fallback={<div className="absolute inset-0" />}>
              <Hero3D className="absolute inset-0 h-full w-full" />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block ${
          isDarkMode ? "text-slate-500" : "text-slate-400"
        }`}
      >
        <ChevronDown className="h-6 w-6 animate-float" />
      </a>
    </section>
  );
};

export default Home;
