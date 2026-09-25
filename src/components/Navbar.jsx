import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
            : "border-b border-slate-200 bg-white/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Monogram + name */}
        <a
          href="#home"
          onClick={() => handleClick("home")}
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-lg font-bold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-105">
            M
          </span>
          <span
            className={`hidden font-display text-lg font-semibold xl:block ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Syed Abdul Maarij
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleClick(id)}
              className={`relative rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-200 ${
                active === id
                  ? isDarkMode
                    ? "text-white"
                    : "text-indigo-600"
                  : isDarkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-200 ${
              isDarkMode
                ? "border-white/10 bg-white/5 text-amber-300 hover:bg-white/10"
                : "border-slate-200 bg-white text-indigo-600 hover:bg-slate-100"
            }`}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-200 lg:hidden ${
              isDarkMode
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        } ${isDarkMode ? "bg-ink/95" : "bg-white/95"} backdrop-blur-xl`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleClick(id)}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                active === id
                  ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/10 text-indigo-400"
                  : isDarkMode
                  ? "text-slate-300 hover:bg-white/5"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
