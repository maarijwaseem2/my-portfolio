import React from "react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "Alahdeen B2B Marketplace",
      category: "Production System",
      image:
        "https://placehold.co/800x500/0f3460/38bdf8?font=montserrat&text=ALAHDEEN%0AB2B+Marketplace",
      technologies: ["React", "PHP", "MySQL", "Firebase", "OpenAI"],
      description:
        "Worked on core marketplace modules including lead management, supplier replies/metrics, chat/notifications, and performance improvements.",
      gradient: "from-[#0ea5e9] to-[#2563eb]",
      link: "https://alahdeen.com",
    },
    {
      title: "Khata Alahdeen",
      category: "SaaS Platform",
      image:
        "https://placehold.co/800x500/064e3b/34d399?font=montserrat&text=KHATA+ALAHDEEN%0AAI+Bookkeeping",
      technologies: ["React", "PHP", "MySQL"],
      description:
        "An AI-powered digital bookkeeping and ledger management platform integrated within the Alahdeen ecosystem to track debits, credits, and transactions.",
      gradient: "from-[#10b981] to-[#047857]",
      link: "https://khata.alahdeen.com",
    },
    {
      title: "Go Green (FYP)",
      category: "Full Stack App",
      image: "/p5.jpeg",
      technologies: ["React.js", "NestJS", "Machine Learning"],
      description:
        "Final Year Project focused on environmental sustainability, specifically targeting tree plantation initiatives incorporating AI Chatbots and intelligent tracking.",
      gradient: "from-[#3ba755] to-[#9be15d]",
      link: "https://github.com/maarijwaseem2/Environment-system",
    },
    {
      title: "SaasAdmin - Professional Dashboard",
      category: "Web App",
      image: "/p4.jpeg",
      technologies: ["React Native", "Firebase", "Redux"],
      description:
        "A modern, responsive admin dashboard for SaaS applications built with React, TypeScript, and Tailwind CSS",
      gradient: "from-[#71a5f8] to-[#a8c9fb]",
      link: "https://roaring-biscotti-47f9e4.netlify.app/",
    },
    {
      title: "LuxeStay - Luxury Hotel Booking Platform",
      category: "Web App",
      image: "/p3.jpeg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      description:
        "Luxury hotels, premium accommodation, resort booking, travel, hospitality, vacation, luxury travel.",
      gradient: "from-[#efb921] to-[#ffd75e]",
      link: "https://gorgeous-parfait-1507b0.netlify.app/",
    },
  ];

  return (
    <section
      className={`py-10 transition-all duration-500 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDarkMode
                  ? "bg-gray-900 shadow-xl border border-gray-700"
                  : "bg-white shadow-xl"
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-110 transition-transform duration-300 flex items-center gap-2 mx-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4">
                <div
                  className={`text-sm font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                >
                  {project.category}
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
