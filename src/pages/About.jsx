import React from "react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { MapPin } from "lucide-react";

const stats = [
  { value: "2.5+", label: "Years experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "6", label: "Live products" },
];

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            About me
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mt-4 text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            The engineer behind the work
          </p>
        </Reveal>

        <div className="grid items-center gap-8 lg:grid-cols-[23rem_1fr] lg:gap-12">
          {/* Photo */}
          <Reveal className="flex justify-center lg:justify-start">
            <TiltCard max={6} className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-cyan-400/20 blur-2xl" />
              <div
                className={`relative overflow-hidden rounded-[1.75rem] border ${
                  isDarkMode ? "border-white/10" : "border-slate-200"
                }`}
              >
                <img
                  src="/profile.jfif"
                  alt="Syed Abdul Maarij"
                  loading="lazy"
                  className="aspect-[4/5] min-h-[22rem] w-full object-cover object-[50%_2%] sm:min-h-[26rem]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    Karachi, Pakistan
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <h3
                className={`font-display text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                My journey
              </h3>
            </Reveal>

            <div
              className={`mt-5 space-y-4 text-base leading-relaxed md:text-lg ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <Reveal as="p" delay={0.05}>
                I&apos;m a full-stack engineer with a backend-focused approach,
                building software that&apos;s meant to scale and last. What began
                as curiosity in computer science is now shipping production
                systems that real businesses depend on daily.
              </Reveal>
              <Reveal as="p" delay={0.1}>
                At Alahdeen, a B2B marketplace in Pakistan, I build and maintain
                core systems &mdash; secure backend modules, RESTful APIs, and
                database-driven features that handle real traffic, with a focus
                on clean architecture and reliability.
              </Reveal>
              <Reveal as="p" delay={0.15}>
                I work hands-on with AI and cloud tooling &mdash; OpenAI for
                automation, Firebase for real-time workflows, and AWS for
                deployment and scale. I like owning problems end to end: from
                data model to API to the interface users actually touch.
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className={`rounded-2xl border p-4 text-center transition-colors ${
                      isDarkMode
                        ? "border-white/10 bg-white/5"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text font-display text-3xl font-bold text-transparent">
                      {s.value}
                    </div>
                    <div
                      className={`mt-1 text-xs font-medium sm:text-sm ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
