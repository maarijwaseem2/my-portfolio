import React from "react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";
import {
  Code, Workflow, Database, Cloud, Bot, ShoppingBag, Palette, Search,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with modern architectures — scalable backends paired with fast, responsive frontends.",
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    description:
      "Clean, well-documented REST APIs plus third-party and payment integrations (Stripe, Swagger/OpenAPI) other systems can rely on.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Well-structured schemas, indexing, and query optimization across MySQL, PostgreSQL, and MongoDB — modeled for integrity and scale.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment & DevOps",
    description:
      "Deploying and scaling apps on AWS with secure configuration, caching, and reliable release workflows.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description:
      "Intelligent chatbots built on OpenAI APIs and modern NLP to automate customer interactions effectively.",
    gradient: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify themes, headless extensions, and e-commerce builds tuned for performance and conversion.",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive, modern interfaces designed with clear hierarchy, accessibility, and conversion in mind.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "On-page and technical SEO to grow organic visibility and drive meaningful, qualified traffic.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Services = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="services" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mx-auto mt-4 max-w-2xl text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Digital solutions to help bring your ideas to life
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={Math.min(index * 0.05, 0.3)}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-2 sm:p-6 ${
                    isDarkMode
                      ? "border-white/10 bg-white/[0.04] hover:border-indigo-400/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-indigo-500/10"
                      : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${service.gradient} transition-transform duration-300 group-hover:scale-x-100`}
                  />
                  <span
                    className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                  />
                  <div
                    className={`relative mb-3 inline-flex rounded-xl bg-gradient-to-br ${service.gradient} p-3 sm:mb-5 sm:p-3.5 shadow-lg transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                  </div>
                  <h3
                    className={`relative font-display text-base font-bold transition-colors duration-300 sm:text-lg ${
                      isDarkMode
                        ? "text-white group-hover:text-indigo-300"
                        : "text-slate-900 group-hover:text-indigo-600"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`relative mt-2 text-xs leading-relaxed sm:text-sm ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
