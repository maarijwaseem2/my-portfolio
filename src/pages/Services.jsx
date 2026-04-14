import React from "react";
import { useTheme } from "../components/ThemeContext";
import {
  Code,
  Palette,
  Server,
  Database,
  ShoppingBag,
  Bot,
  PenTool,
  Search,
  BarChart,
} from "lucide-react";

const Services = () => {
  const { isDarkMode } = useTheme();

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Web Development",
      description:
        "End-to-end web applications with modern architectures. Specializing in highly scalable backends and rich responsive frontends.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Design",
      description:
        "Robust data modeling, schema optimization, and deployment using MySQL, PostgreSQL and other modern database systems.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Shopify Development",
      description:
        "Custom Shopify themes, headless extensions, and e-commerce solutions geared for performance and heightened conversion rates.",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Chatbot Development",
      description:
        "Intelligent chatbot engineering utilizing OpenAI APIs and modern NLP frameworks to automate customer interactions effectively.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive, user-friendly, and modern aesthetic interfaces with optimal conversion funnels and accessibility in mind.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Optimization",
      description:
        "Advanced on-page and technical SEO strategies to increase organic search visibility and drive meaningful traffic.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Business & Data Analytics",
      description:
        "Translating raw business data into meaningful metrics, aiding data-driven decision making and pipeline construction.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Social Media content writing",
      description:
        "Engaging and brand-aligned content strategies crafted precisely for social engagement and digital outreach.",
      gradient: "from-yellow-400 to-orange-500",
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
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I offer comprehensive digital solutions to help bring your ideas to
            life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                  : "bg-white hover:bg-gray-50 shadow-lg"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{service.icon}</div>
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
