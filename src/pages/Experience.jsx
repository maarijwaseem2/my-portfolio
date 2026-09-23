import React from "react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Alahdeen B2B",
    location: "Karachi, Pakistan · On-site",
    period: "May 2025 — Present",
    description:
      "Building and maintaining production PHP/MySQL APIs for a B2B marketplace — leads, quotes, chat, and onboarding. Integrated OpenAI for AI workflows and Firebase for real-time chat, and improved API performance with caching and pagination, alongside AWS deployments and secure backend practices.",
    technologies: ["React", "PHP", "MySQL", "Firebase", "OpenAI", "AWS"],
  },
  {
    title: "Full-Stack Developer",
    company: "Citrok",
    location: "Lahore, Pakistan · Remote",
    period: "May 2024 — April 2025",
    description:
      "Developed and optimized RESTful APIs for 30% faster response times, worked across MongoDB and MySQL, and integrated third-party tools. Collaborated in an agile team on client projects from planning through delivery.",
    technologies: ["TypeScript", "NestJS", "React", "MongoDB", "MySQL", "REST API"],
  },
  {
    title: "Associate Software Engineer, Intern",
    company: "Citrok",
    location: "Lahore, Pakistan · Remote",
    period: "Feb 2024 — May 2024",
    description:
      "Gained hands-on experience with NestJS, TypeORM, and TypeScript on client projects, plus frontend work with React, HTML, and CSS.",
    technologies: ["NestJS", "TypeORM", "TypeScript", "React", "Git"],
  },
];

const Experience = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="experience" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Experience
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mt-4 text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Where I&apos;ve built and shipped
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-3xl">
          <div
            className={`absolute bottom-2 left-[7px] top-2 w-px md:left-[9px] ${
              isDarkMode
                ? "bg-gradient-to-b from-indigo-500 via-violet-500/60 to-transparent"
                : "bg-gradient-to-b from-indigo-400 via-violet-300 to-transparent"
            }`}
          />

          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="relative pb-16 pl-12 last:pb-0 md:pl-16">
                <span
                  className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 ring-4 md:h-[18px] md:w-[18px] ${
                    isDarkMode ? "ring-ink" : "ring-slate-50"
                  }`}
                />
                <div
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 md:p-6 ${
                    isDarkMode
                      ? "border-white/10 bg-white/[0.04] hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                      : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10"
                  }`}
                >
                  <div className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                  <h3
                    className={`font-display text-xl font-bold md:text-2xl ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {exp.title}
                  </h3>
                  <div className="mt-1 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-lg font-semibold text-transparent">
                    {exp.company}
                  </div>
                  <div
                    className={`mt-1 flex items-center gap-1.5 text-sm ${
                      isDarkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </div>
                  <p
                    className={`mt-3 leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isDarkMode
                            ? "border border-white/10 bg-white/5 text-slate-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
