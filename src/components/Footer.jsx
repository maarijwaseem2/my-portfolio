import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "./ThemeContext";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, link: "https://github.com/maarijwaseem2", label: "GitHub" },
  { icon: Linkedin, link: "https://linkedin.com/in/maarijwaseem2", label: "LinkedIn" },
  { icon: Mail, link: "mailto:maarijwaseem7@gmail.com", label: "Email" },
];

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`relative z-10 border-t ${
        isDarkMode
          ? "border-white/10 bg-ink/80"
          : "border-slate-200 bg-white/80"
      } backdrop-blur`}
    >
      <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text font-display text-2xl font-bold text-transparent">
              Syed Abdul Maarij
            </h3>
            <p
              className={`mt-4 max-w-md leading-relaxed ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Full-stack engineer focused on scalable backends, clean APIs, and
              modern web apps. Currently building B2B systems at Alahdeen — open
              to new opportunities and freelance work.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                      isDarkMode
                        ? "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-400 hover:text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-400 hover:text-indigo-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4
              className={`font-display text-sm font-semibold ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Quick links
            </h4>
            <div className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block text-sm transition-colors duration-200 ${
                    isDarkMode
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className={`font-display text-sm font-semibold ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Get in touch
            </h4>
            <div
              className={`mt-4 space-y-3 text-sm ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-indigo-400" />
                Karachi, Pakistan
              </div>
              <a href="tel:+923240236991" className="flex items-center gap-2.5 hover:text-indigo-400">
                <Phone className="h-4 w-4 text-cyan-400" />
                +92 324 0236991
              </a>
              <a href="mailto:maarijwaseem7@gmail.com" className="flex items-center gap-2.5 hover:text-indigo-400">
                <Mail className="h-4 w-4 text-violet-400" />
                maarijwaseem7@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 border-t pt-8 text-center text-sm ${
            isDarkMode
              ? "border-white/10 text-slate-500"
              : "border-slate-200 text-slate-500"
          }`}
        >
          &copy; {new Date().getFullYear()} Syed Abdul Maarij. Built with React,
          Tailwind &amp; three.js in Pakistan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
