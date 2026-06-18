import React from "react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "Alahdeen B2B Marketplace",
      category: "Production · Live",
      image: "/alahdeen.png",
      description:
        "B2B marketplace connecting wholesalers and retailers — lead management, chat, notifications, and OpenAI-powered features with optimized REST APIs.",
      gradient: "from-[#0ea5e9] to-[#2563eb]",
      link: "https://alahdeen.com",
    },
    {
      title: "Khata Alahdeen",
      category: "AI Bookkeeping · Live",
      image: "/khata.png",
      description:
        "AI-powered digital khata for wholesalers and retailers to track debits, credits, and daily transactions within the Alahdeen ecosystem.",
      gradient: "from-[#10b981] to-[#047857]",
      link: "https://khata.alahdeen.com",
    },
    {
      title: "AI Content Studio",
      category: "Full-Stack AI SaaS · Live",
      image: "/ai-content.jfif",
      description:
        "AI SaaS that generates SEO meta titles and descriptions, with credit-based plans and an admin portal. Built with React, NestJS, and PostgreSQL.",
      gradient: "from-[#8b5cf6] to-[#6366f1]",
      link: "https://ai-content-studio-liard.vercel.app",
    },
    {
      title: "ServiceSync Pro",
      category: "Home-Services Marketplace · Live",
      image: "/service.png",
      description:
        "Two-sided marketplace linking verified service providers with customers — separate accounts, admin verification, and search-and-request workflow.",
      gradient: "from-[#f59e0b] to-[#ea580c]",
      link: "https://servicesync-pro.vercel.app",
    },
    {
      title: "CineSlot",
      category: "Cinema Booking · Live",
      image: "/movie.jfif",
      description:
        "Cinema booking app with real-time seat selection, showtime browsing, and an admin panel for movies, schedules, and seating layouts.",
      gradient: "from-[#ef4444] to-[#dc2626]",
      link: "https://maarijwaseem2-showtime-buddy.vercel.app",
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
            Production systems and full-stack products I have built and shipped
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
                {project.link && (
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
                )}
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
