import React from "react";
import { useTheme } from "../components/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    {
      name: "JavaScript/TypeScript",
      level: 90,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "React/Next.js",
      level: 85,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Node.js/Express/NestJS",
      level: 80,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "PHP/Laravel",
      level: 65,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "MySQL/MongoDB/PostgreSQL",
      level: 80,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Shopify Development",
      level: 70,
      color: "from-green-500 to-lime-500",
    },
    {
      name: "UI/UX Design",
      level: 70,
      color: "from-red-500 to-orange-500",
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p
            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Journey
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about building impactful digital products, I began my
              journey in computer science with a strong foundation in both
              frontend and backend development, eventually evolving into a
              Full-Stack Engineer with a backend-focused approach.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I have contributed to the development of scalable web
              applications, robust APIs, and business-critical systems, with a
              strong emphasis on performance, reliability, and clean
              architecture. Currently, I am working as a Backend Developer,
              contributing to Alahdeen, a B2B marketplace platform in Pakistan.
              My role involves building secure backend modules, designing
              RESTful APIs, and developing database-driven features.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I also have hands-on experience integrating modern tools and
              cloud-based solutions, including Firebase for real-time workflows,
              OpenAI for AI-powered automation, and AWS for deployment and
              scalability. I enjoy solving complex problems, optimizing system
              performance, and collaborating with teams to deliver high-quality
              solutions that enhance user experience and drive business value.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <div
                  className={`font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Years Experience
                </div>
              </div>
              <div
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <div
                  className={`font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3
              className={`text-3xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Skills & Technologies
            </h3>

            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span
                    className={`font-semibold text-lg ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`font-bold ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`w-full rounded-full h-3 ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
