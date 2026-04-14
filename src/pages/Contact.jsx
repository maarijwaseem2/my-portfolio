import React, { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import {
  Send,
  CheckCircle,
  Smartphone,
  Server,
  ShoppingCart,
} from "lucide-react";

const Contact = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:maarijwaseem7@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact",
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Portfolio Contact Form`,
    )}`;
    window.location.href = mailtoLink;
    setShowSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Improved "Let's Build Together" section */}
          <div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Let's Build{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p
              className={`text-lg mb-12 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Whether you need to scale an existing system or build something
              brand new, I'm here to translate your vision into robust digital
              solutions.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Server className="w-8 h-8" />,
                  title: "Web Applications",
                  description:
                    "Modern, responsive websites and web apps optimized for scale.",
                  color: "blue",
                },
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  title: "E-commerce Stores",
                  description:
                    "Complete online shopping solutions designed for conversion.",
                  color: "emerald",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Business Solutions",
                  description:
                    "Custom tools & internal dashboards to streamline your operations.",
                  color: "purple",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/80 border border-gray-700/50 hover:bg-gray-800"
                      : "bg-white border border-gray-100 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`p-4 rounded-xl bg-${item.color}-500/10 text-${item.color}-500`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="mailto:maarijwaseem7@gmail.com"
                className="inline-flex text-lg items-center gap-2 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                Start Now →
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl ${
              isDarkMode
                ? "bg-gray-800/90 border border-gray-700/50"
                : "bg-white/90 border border-gray-200"
            }`}
          >
            {/* Form decorative background */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

            <h3
              className={`text-2xl font-bold mb-8 relative z-10 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              Send Me a Message
            </h3>

            {showSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center gap-3 text-green-500 animate-fade-in relative z-10">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p>Opening your email client... Thank you for reaching out!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                    } border focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                    } border focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                  } border focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 resize-none ${
                    isDarkMode
                      ? "bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                  } border focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full relative group overflow-hidden rounded-xl p-[1px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-100 group-hover:bg-[length:200%_auto] animate-gradient transition-all duration-500"></div>
                <div
                  className={`relative px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? "bg-gray-900 group-hover:bg-gray-900/50"
                      : "bg-white group-hover:bg-white/50"
                  }`}
                >
                  <span
                    className={`font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300`}
                  >
                    Send Message
                  </span>
                  <Send className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
