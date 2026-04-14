import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      gradient: "from-gray-600 to-gray-800",
      hover: "hover:from-gray-500 hover:to-gray-700",
      link: "https://github.com/maarijwaseem2",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      gradient: "from-blue-600 to-blue-800",
      hover: "hover:from-blue-500 hover:to-blue-700",
      link: "https://linkedin.com/in/maarijwaseem2",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      gradient: "from-red-600 to-red-800",
      hover: "hover:from-red-500 hover:to-red-700",
      link: "mailto:maarijwaseem7@gmail.com",
    },
  ];

  return (
    <footer
      className={`py-10 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 border-t border-gray-700" : "bg-gray-900"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Syed Abdul Maarij
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Passionate about building impactful digital solutions. I
              specialize in developing scalable backend systems, modern
              responsive frontends, and custom e-commerce applications using
              JavaScript, TypeScript, React.js, Node.js/Express.js/Nest.js, PHP,
              and Shopify.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${social.gradient} ${social.hover} p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium"
                >
                  → {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+92 3240236991</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400" />
                <span>maarijwaseem7@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400">
              &copy; 2025 Syed Abdul Maarij. Designed &amp; Built with ❤️ in
              Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
