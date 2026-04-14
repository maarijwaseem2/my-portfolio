import React from "react";
import { useTheme } from "../components/ThemeContext";

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      title: "Junior Backend Developer",
      company: "Alahdeen B2B",
      period: "Sep 2025 - Present",
      description:
        "Working as a Backend Developer using PHP, contributing to product-based applications and backend development tasks.",
      technologies: ["React", "PHP", "Laravel", "MySQL"],
    },
    {
      title: "Shopify Developer",
      company: "AheadTeach360,",
      period: "July 2025 - Aug 2025",
      description:
        "Currently working on Shopify store customization and app development, implementing custom features with Liquid, JavaScript, and Shopify APIs while enhancing UI/UX and performance.",
      technologies: [
        "Shopify CLI",
        "Liquid, Metafields",
        "Theme Customization",
        "Admin & Storefront APIs",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Citrok",
      period: "May 2024 - April 2025",
      description:
        "Developed and optimized RESTful APIs, implemented scalable databases with MongoDB and MySQL, integrated third-party tools, and collaborated with teams using Agile practices to deliver high-quality software.",
      technologies: [
        "TypeScript",
        "Node.js/Nest.js",
        "Reactjs",
        "PostgreSQL",
        "Rest API",
        "Git/GitHub",
      ],
    },
  ];

  return (
    <section
      className={`py-10 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My professional journey and key milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line */}
            <div
              className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 ${
                isDarkMode ? "opacity-80" : "opacity-60"
              }`}
            ></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Enhanced Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div
                    className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                      isDarkMode
                        ? "bg-gray-800 border border-gray-700"
                        : "bg-white shadow-lg"
                    }`}
                  >
                    <div
                      className={`text-sm font-bold mb-2 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {exp.period}
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.title}
                    </h3>
                    <div
                      className={`font-bold text-lg mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}
                    >
                      {exp.company}
                    </div>
                    <p
                      className={`leading-relaxed mb-4 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>

                    {/* Technologies used */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isDarkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
