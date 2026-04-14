import React from "react";
import { ExternalLink, Download } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { isDarkMode } = useTheme();

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Syed_Abdul_Maarij_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Syed Abdul Maarij
              </span>
            </h1>

            <div className="text-xl md:text-3xl mb-8 font-semibold">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Full Stack Developer | UI/UX, AI Chatbots, Web Solutions
              </span>
            </div>

            <p
              className={`text-lg md:text-xl mb-8 max-w-2xl leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Passionate about building impactful digital solutions. I
              specialize in developing scalable backend systems, modern
              responsive frontends, and custom e-commerce applications. My skill
              set includes JavaScript, TypeScript, React.js,
              Node.js/Express.js/Nest.js, PHP, MySQL, and PostgreSQL. I also
              have experience with REST APIs, authentication systems, and
              Shopify development, focusing on clean code, performance, and
              user-friendly design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-center">
              <Link
                to="/projects"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </Link>

              <button
                onClick={handleCVDownload}
                className={`group border-2 border-blue-600 px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 font-semibold ${
                  isDarkMode
                    ? "text-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                    : "text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
                } transform hover:-translate-y-2`}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-md relative mt-12 lg:mt-0">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>

              {/* Main profile area */}
              <div
                className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full mx-auto flex items-center justify-center transition-all duration-500 overflow-hidden ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-400"
                    : "bg-gray-200 text-gray-500"
                } border-4 border-white/10`}
              >
                <img
                  src="https://avatars.githubusercontent.com/maarijwaseem2"
                  alt="Syed Abdul Maarij"
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
