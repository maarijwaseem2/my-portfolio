import React from "react";
import { useTheme } from "../components/ThemeContext";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const { isDarkMode } = useTheme();

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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My academic journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* University Education */}
          <div
            className={`rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              isDarkMode
                ? "bg-gray-800 shadow-xl border border-gray-700"
                : "bg-white shadow-xl border border-gray-100"
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3
                    className={`text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Bachelor's in Computer Science
                  </h3>
                </div>
                <p className="text-blue-600 font-bold text-lg mb-3">
                  FAST - National University of Computer and Emerging Science
                  (NUCES)
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar
                    className={`w-4 h-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    2021 - 2025
                  </span>
                </div>
                <p
                  className={`leading-relaxed mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Pursuing a Bachelor's degree in Computer Science with a focus
                  on
                  <span className="font-semibold">
                    {" "}
                    software engineering and web development
                  </span>
                  . Developed strong{" "}
                  <span className="font-semibold">
                    problem-solving skills
                  </span>{" "}
                  through academic and professional projects, including{" "}
                  <span className="font-semibold">
                    full-stack applications and e-commerce platforms
                  </span>
                  .
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Web Development",
                    "Database Systems",
                    "Software Engineering",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* College Education */}
          <div
            className={`rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              isDarkMode
                ? "bg-gray-800 shadow-xl border border-gray-700"
                : "bg-white shadow-xl border border-gray-100"
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Intermediate in Pre-Engineering
                </h3>
                <p className="text-green-600 font-bold text-lg mb-3">
                  Adamjee Govt. Science College
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar
                    className={`w-4 h-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    2019 - 2021
                  </span>
                </div>
                <p
                  className={`leading-relaxed mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Completed Intermediate in Pre-Engineering with a focus on
                  <span className="font-semibold">
                    {" "}
                    Mathematics, Physics, and Chemistry
                  </span>
                  . Built a strong academic foundation for further studies in
                  Computer Science.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Mathematics",
                    "Physics",
                    "Chemistry",
                    "Problem Solving",
                    "Analytical Thinking",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
