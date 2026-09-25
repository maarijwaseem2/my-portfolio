import React from "react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";

const projects = [
  {
    title: "Alahdeen B2B Marketplace",
    category: "B2B marketplace",
    image: "/alahdeen.webp",
    description:
      "A B2B marketplace connecting wholesalers and retailers — lead management, chat, notifications, and OpenAI-powered features on top of optimized REST APIs.",
    tags: ["PHP", "MySQL", "React", "OpenAI", "AWS"],
    link: "https://alahdeen.com",
  },
  {
    title: "Vita Care",
    category: "Healthcare platform",
    image: "/vita-care.webp",
    description:
      "A healthcare platform where patients find doctors by city and specialty, book appointments in real time, and track medical history — with an AI symptom checker that suggests the right specialist across patient and doctor portals.",
    tags: ["Next.js", "PHP", "Python", "AI"],
    link: "https://vita-cares.vercel.app/",
  },
  {
    title: "Go Green Pakistan",
    category: "Green e-commerce",
    image: "/go-green.webp",
    description:
      "A green e-commerce platform to buy plants and garden supplies, sponsor tree plantations, and book verified gardeners — with COD checkout, an admin dashboard, and an AI chatbot that recommends plants by location.",
    tags: ["React", "NestJS", "Redis", "AI"],
    link: "https://go-green-pakistan.vercel.app/",
  },
  {
    title: "AI Content Studio",
    category: "AI SaaS",
    image: "/ai-content.webp",
    description:
      "An AI SaaS that generates SEO meta titles and descriptions, with credit-based plans and an admin portal. Built with React, NestJS, and PostgreSQL.",
    tags: ["React", "NestJS", "PostgreSQL"],
    link: "https://ai-content-studio-liard.vercel.app",
  },
  {
    title: "ServiceSync Pro",
    category: "Home-services marketplace",
    image: "/service.webp",
    description:
      "A two-sided marketplace linking verified service providers with customers — separate accounts, admin verification, and a search-and-request workflow.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://servicesync-pro.vercel.app",
  },
  {
    title: "CineSlot",
    category: "Cinema booking",
    image: "/movie.webp",
    description:
      "A cinema booking app with real-time seat selection, showtime browsing, and an admin panel for movies, schedules, and seating layouts.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://maarijwaseem2-showtime-buddy.vercel.app",
  },
];

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mx-auto mt-4 max-w-2xl text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Production systems and full-stack products I&apos;ve built and shipped
          </p>
        </Reveal>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-7 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={index}
              delay={Math.min(index * 0.05, 0.25)}
              className="w-[82%] shrink-0 snap-start sm:w-auto"
            >
              <TiltCard
                max={5}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isDarkMode
                    ? "border-white/10 bg-white/[0.04] hover:border-white/20"
                    : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-xl"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                    </span>
                    Live
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-sm font-semibold text-indigo-400">
                    {project.category}
                  </span>
                  <h3
                    className={`mt-2 font-display text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-sm leading-relaxed ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                          isDarkMode
                            ? "border border-white/10 bg-white/5 text-slate-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>
                <span className="pointer-events-none absolute inset-0 z-20 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full" />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
