import React from "react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    accent: "from-indigo-500 to-violet-600",
    degree: "Bachelor's in Computer Science",
    school: "FAST — National University of Computer and Emerging Sciences (NUCES)",
    period: "2021 — 2025",
    description:
      "Completed a Bachelor's degree in Computer Science with a focus on software engineering and web development. Built strong problem-solving foundations through academic and professional projects, including full-stack applications and e-commerce platforms.",
    subjects: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
    ],
  },
  {
    icon: Award,
    accent: "from-cyan-500 to-teal-600",
    degree: "Intermediate in Pre-Engineering",
    school: "Adamjee Govt. Science College",
    period: "2019 — 2021",
    description:
      "Completed Intermediate in Pre-Engineering with a focus on Mathematics, Physics, and Chemistry — building the analytical foundation for a Computer Science degree.",
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Problem Solving",
      "Analytical Thinking",
    ],
  },
];

const Education = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="education" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Education
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mt-4 text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Academic foundation
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {education.map((ed, i) => {
            const Icon = ed.icon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`group h-full rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode
                      ? "border-white/10 bg-white/[0.04] hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                      : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${ed.accent} shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-display text-xl font-bold md:text-2xl ${
                          isDarkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {ed.degree}
                      </h3>
                      <p
                        className={`mt-2 text-sm font-semibold md:text-base ${
                          isDarkMode ? "text-indigo-300" : "text-indigo-600"
                        }`}
                      >
                        {ed.school}
                      </p>
                      <div
                        className={`mt-3 flex items-center gap-2 text-sm ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        <Calendar className="h-4 w-4" />
                        {ed.period}
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mt-5 leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {ed.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {ed.subjects.map((subject) => (
                      <span
                        key={subject}
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${
                          isDarkMode
                            ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-300"
                            : "border-indigo-100 bg-indigo-50 text-indigo-700"
                        }`}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
