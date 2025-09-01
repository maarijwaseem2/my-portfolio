import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Palette,
  Server,
  Database,
  ShoppingBag,
  Sun,
  Moon,
  Award,
  GraduationCap,
  Calendar,
  FlipVerticalIcon,
  Clock,
  Globe,
  Trophy,
  Send,
  CheckCircle,
  AlertCircle,
  ShoppingCart,
  Briefcase
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // WhatsApp contact with custom styling
  const handleWhatsAppContact = () => {
    const phoneNumber = "+923240236991"; // Replace with your WhatsApp number
    const message =
      "Hi! I saw your portfolio and would like to discuss a project.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Place your CV file in the public folder
    link.download = "Syed_Abdul_Maarij_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "certifications",
        "services",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description:
        "Complete custom websites and web applications using cutting-edge technologies like React, Next.js, Node.js, and modern JavaScript frameworks. From simple landing pages to complex enterprise solutions with responsive design and optimal performance.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FlipVerticalIcon className="w-10 h-10" />,
      title: "Video Editing & Content Creation",
      description:
        "Professional video editing services including promotional videos, social media content, motion graphics, and visual storytelling. Creating engaging posts, reels, thumbnails, and branded content for various platforms and marketing campaigns.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that perfectly blend aesthetics with functionality. Creating intuitive interfaces, wireframes, prototypes, and complete design systems that enhance user experience and drive engagement across all digital platforms.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description:
        "Robust and scalable server-side solutions including RESTful APIs, microservices architecture, database integration, authentication systems, and cloud deployment. Ensuring secure, fast, and reliable backend infrastructure for any application.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Design",
      description:
        "Comprehensive database architecture and optimization services including schema design, query optimization, data modeling, migration strategies, and performance tuning for MySQL, PostgreSQL, MongoDB, and other database systems.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Shopify Development",
      description:
        "Complete Shopify store development and customization including theme development, app integration, payment gateway setup, inventory management, and performance optimization. Creating powerful e-commerce solutions that drive sales and growth.",
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  const projects = [
    {
      title: "Passion Import",
      category: "Shopify Store",
      image: "/p1.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      description:
        "At Passion Imports, we are driven by a passion for delivering quality, style, and value through exceptional products that enhance everyday life.",
      gradient: "from-[#e93d3d] to-[#ff7f7f]",

      link: "https://passionimports.net/",
    },
    {
      title: "The MACP Store",
      category: "Shopify Store",
      image: "/p2.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      description:
        "The MACP Store provides durable, high-performance gear and apparel for training, combat sports, and demanding environments.",
      gradient: "from-[#e3b15a] to-[#f5d58a]",

      link: "https://themacpstore.com/",
    },
    {
      title: "LuxeStay - Luxury Hotel Booking Platform",
      category: "Web App",
      image: "/p3.jpeg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      description:
        "luxury hotels, premium accommodation, resort booking, travel, hospitality, vacation, luxury travel",
      gradient: "from-[#efb921] to-[#ffd75e]",
      link: "https://gorgeous-parfait-1507b0.netlify.app/",
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
      title: "Go Green",
      category: "Full Stack App",
      image: "/p5.jpeg",
      technologies: ["React Native", "Firebase", "Redux"],
      description:
        "Go Green is a sustainability platform that makes tree planting easy by letting users choose species and locations, place orders, and get regular growth updates through a simple digital interface.",
      gradient: "from-[#3ba755] to-[#9be15d]",

      link: "https://github.com/maarijwaseem2/Environment-system",
    },
    {
      title: "Job Portal:",
      category: "Full Stack App",
      image: "/p6.jpeg",
      technologies: ["React Native", "Firebase", "Redux"],
      description:
        "A web-based job portal that connects job seekers and employers, enabling users to apply for jobs while employers can post vacancies and manage applications efficiently.",
      gradient: "from-[#0f172a] to-[#1e3a8a]",

      link: "https://github.com/wasaydev-1/jobify",
    },
  ];

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

  // Certificate data with placeholder images
  const certificates = [
    {
      title: "React Development",
      issuer: "Meta (Facebook)",
      date: "August 29 2023",
      image: "/api/placeholder/300/200",
      Verified:
        "https://www.coursera.org/account/accomplishments/verify/45N87BLRZ233",
      skills: ["React", "Redux", "Context API", "Components", "Hooks"],
      gradient: "from-blue-500 to-blue-700", // React blue theme
      file: "react.pdf",
    },

    {
      title: "Artificial Intelligence(AI)",
      issuer: "IBM (Coursera)",
      date: "August 31 2023",
      image: "/api/placeholder/300/200",
      Verified:
        "https://www.coursera.org/account/accomplishments/verify/RURPD2ZFMPJ3",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Neural Networks",
        "Natural Language Processing (NLP)",
      ],
      gradient: "from-indigo-500 to-purple-700", // AI/Tech purple theme
      file: "ai.pdf",
    },
    {
      title: "Control Version",
      issuer: "Meta (Facebook)",
      date: "October 2023",
      image: "/api/placeholder/300/200",
      Verified:
        "https://www.coursera.org/account/accomplishments/verify/KCWSQN9UFY2Z",
      skills: [
        "Git",
        "GitHub",
        "Branching & Merging",
        "Collaboration Workflows",
        "Commit Management",
      ],
      gradient: "from-gray-600 to-gray-800", // Git/GitHub dark theme
      file: "ControlVersion.pdf",
    },
    {
      title: "Data Structures",
      issuer: "Udemy",
      date: "Dec 22 2022",
      image: "/api/placeholder/300/200",
      Verified:
        "https://www.udemy.com/certificate/UC-41e2c663-c82a-440c-a31c-cb72f40789c/",
      skills: [
        "Arrays",
        "Linked Lists",
        "Stacks & Queues",
        "Trees & Graphs",
        "Sort & Search Algorithms",
        "DP",
      ],
      gradient: "from-emerald-500 to-teal-700", // Data/Algorithm green theme
      file: "dsa.pdf",
    },
    {
      title: "HTML5 and CSS3",
      issuer: "Udemy",
      date: "May 29 2023",
      image: "/api/placeholder/300/200",
      Verified:
        "https://www.udemy.com/certificate/UC-41e2c663-c82a-440c-a31c-cb72f40789c/",
      skills: [
        "HTML5 Semantics",
        "CSS3 Styling",
        "Flexbox & Grid",
        "Responsive",
        "Forms & Validation",
        "Media Queries",
      ],
      gradient: "from-orange-500 to-red-600", // HTML/CSS warm theme
      file: "html.pdf",
    },
    {
      title: "Full Stack Development",
      issuer: "Udemy",
      date: "August 29 2023",
      image: "/api/placeholder/300/200",
      Verified:
        "https://www.udemy.com/certificate/UC-41e2c663-c82a-440c-a31c-cb72f40789c/",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "Node.js & Express.js",
        "MongoDB & Mongoose",
        "RESTful APIs",
      ],
      gradient: "from-yellow-500 to-amber-600", // Full-stack golden theme
      file: "fullstack.pdf",
    },
  ];
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with all form data
    const mailtoLink = `mailto:maarijwaseem7@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Portfolio Contact Form`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            top: "10%",
            left: "80%",
          }}
        />
        <div
          className={`absolute w-80 h-80 rounded-full opacity-20 blur-3xl transition-all duration-1000 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${
              mousePosition.y * -0.02
            }px)`,
            top: "60%",
            left: "10%",
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-lg shadow-lg z-50 transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-900/80 border-gray-700"
            : "bg-white/80 border-gray-200"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              My Portfolio
            </div>

            <div className="flex items-center gap-4">
              {/* Enhanced Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`relative p-3 rounded-full transition-all duration-500 transform hover:scale-110 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg shadow-yellow-500/30"
                    : "bg-gradient-to-r from-gray-700 to-gray-900 text-yellow-300 shadow-lg shadow-gray-500/30"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 transform rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 transform rotate-0 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {[
                  "home",
                  "about",
                  "education",
                  "certifications",
                  "services",
                  "projects",
                  "experience",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative capitalize transition-all duration-300 font-medium ${
                      activeSection === item
                        ? "text-blue-600 scale-110"
                        : isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item === "home" ? "Home" : item}
                    {activeSection === item && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`md:hidden border-t transition-all duration-500 transform ${
                isDarkMode
                  ? "bg-gray-900/95 border-gray-700"
                  : "bg-white/95 border-gray-200"
              }`}
            >
              <div className="py-4 space-y-4">
                {[
                  "home",
                  "about",
                  "education",
                  "certifications",
                  "services",
                  "projects",
                  "experience",
                  "contact",
                ].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-4 py-3 capitalize transition-all duration-300 rounded-lg mx-4 ${
                      isDarkMode
                        ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item === "home" ? "Home" : item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className={`pt-24 pb-16 relative overflow-hidden transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900"
            : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

              <div className="text-2xl md:text-3xl mb-8 font-semibold">
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                >
                  Full Stack Developer &{" "}
                </span>
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Shopify Developer
                </span>
              </div>

              <p
                className={`text-lg mb-8 max-w-2xl leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Passionate about creating digital solutions that make an impact.
                With 1.5 years of experience in web development, I specialize in
                building scalable backends, modern frontends, and custom
                e-commerce solutions using technologies like JavaScript,
                React.js, Node.js, NestJS, PHP, and Shopify.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 font-semibold"
                >
                  <span className="flex items-center gap-2">
                    View My Work
                    <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </button>
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

            <div className="flex-1 max-w-md relative">
              <div className="relative">
                {/* Animated background circles */}

                {/* Main profile area */}
                <div
                  className={`relative w-80 h-80 rounded-full mx-auto flex items-center justify-center transition-all duration-500 overflow-hidden ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-400"
                      : "bg-gray-200 text-gray-500"
                  } border-4 border-gradient-to-r from-blue-500 to-purple-500`}
                >
                  {/* Image inside circle */}
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
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
              className={`text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
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
                Started my journey in computer science with a passion for
                creating digital solutions. During my studies, I developed a
                strong interest in both frontend and backend technologies, which
                led me to become a Full-Stack Developer.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With 1.5 years of professional experience, I have worked on
                projects ranging from web applications to e-commerce solutions.
                I started as a Full-Stack Developer with JavaScript, React.js,
                Node.js, Express.js, and NestJS, and I am currently working as a
                Junior Backend Developer (PHP), focusing on building scalable
                and secure systems.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I also have hands-on experience in Shopify custom app
                development and theme customization, enabling me to deliver
                complete e-commerce solutions. I believe in continuous learning
                and aim to build applications that not only function seamlessly
                but also provide exceptional user experiences.
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
                    1+
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
                    15+
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

              {[
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
                  name: "Node.js/Express",
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
              ].map((skill, index) => (
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

      {/* Enhanced Education Section */}
      <section
        id="education"
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
                    Pursuing a Bachelor's degree in Computer Science with a
                    focus on
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

      {/* Enhanced Certifications Section with Images */}
      <section
        id="certifications"
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
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Professional certifications and achievements that validate my
              skills
            </p>
          </div>

          {/* Enhanced Scrolling Certificates */}
          <div className="relative">
            <div
              className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-96 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl snap-center group ${
                    isDarkMode
                      ? "bg-gray-900 shadow-xl border border-gray-700"
                      : "bg-white shadow-xl border border-gray-100"
                  }`}
                >
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden h-36">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${cert.gradient} flex items-center justify-center relative`}
                    >
                      {/* Certificate Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 p-2 rounded-full">
                          <Award className="w-6 h-6 text-yellow-600" />
                        </div>
                      </div>

                      {/* Certificate Content */}
                      <div className="text-center text-white p-0">
                        <div className="font-bold text-3xl">CERTIFICATE</div>
                        <div className="text-xl opacity-90">of Achievement</div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-0 left-0 w-full h-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {cert.title}
                        </h3>
                        <p
                          className={`font-semibold text-sm bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}
                        >
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 text-xs rounded-full font-medium ${
                            isDarkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Credential ID */}
                    <div
                      className={`text-xs mb-4 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {/* Verified Button */}
                      <a
                        href={cert.Verified}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm w-full py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 
    bg-gradient-to-r from-green-500 to-emerald-600 text-white 
    hover:shadow-lg hover:-translate-y-1 hover:from-green-600 hover:to-emerald-700`}
                      >
                        Verified
                      </a>
                    </div>

                    {/* View Button */}
                    <a
                      href={`/certificate/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r ${cert.gradient} text-white hover:shadow-lg hover:-translate-y-1`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Scroll Hint */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-white via-white to-transparent w-20 h-full pointer-events-none flex items-center justify-end pr-6">
              <div
                className={`text-sm font-medium animate-pulse ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Scroll →
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              {
                number: "5+",
                label: "Certifications",
                gradient: "from-blue-500 to-cyan-500",
                icon: <Award className="w-8 h-8" />,
              },
              {
                number: "150+",
                label: "Hours Training",
                gradient: "from-green-500 to-emerald-500",
                icon: <Clock className="w-8 h-8" />,
              },
              {
                number: "4",
                label: "Platforms",
                gradient: "from-purple-500 to-pink-500",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                number: "98%",
                label: "Avg. Score",
                gradient: "from-orange-500 to-red-500",
                icon: <Trophy className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                  isDarkMode
                    ? "bg-gray-900 border border-gray-700"
                    : "bg-gradient-to-br from-gray-50 to-gray-100"
                }`}
              >
                <div className={`flex justify-center mb-3`}>
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${stat.gradient} text-white`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-lg font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        id="services"
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
              I offer comprehensive digital solutions to help bring your ideas
              to life
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

      {/* Enhanced Projects Section */}
      <section
        id="projects"
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

      {/* Enhanced Experience Section */}
      <section
        id="experience"
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

      {/* Enhanced Contact Section */}
      <section
        id="contact"
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
  <div>
    <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      Let's Build Together
    </h3>
  </div>
  
  {[
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description: "Modern, responsive websites and web apps",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Stores",
      description: "Complete online shopping solutions",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Solutions",
      description: "Custom tools to streamline your operations",
      gradient: "from-indigo-500 to-purple-500",
    },
  ].map((project, index) => (
    <div key={index} className="flex items-start gap-6">
      <div
        className={`bg-gradient-to-r ${project.gradient} p-4 rounded-xl shadow-lg flex-shrink-0`}
      >
        <div className="text-white">{project.icon}</div>
      </div>
      <div>
        <h4
          className={`text-xl font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h4>
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>
      </div>
    </div>
  ))}
</div>

<form onSubmit={handleSubmit}>
            <div className="space-y-6">
            {[
        { label: "Name", type: "text", placeholder: "Your name", name: "name" },
        {
          label: "Email",
          type: "email",
          placeholder: "your.email@example.com",
          name: "email"
        },
        {
          label: "Subject",
          type: "text",
          placeholder: "Project discussion",
          name: "subject"
        },
      ].map((field, index) => (
        <div key={index}>
          <label
            className={`block text-sm font-semibold mb-3 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required
            className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                : "bg-gray-50 border-gray-300 focus:border-blue-600"
            } border-2 focus:outline-none`}
            placeholder={field.placeholder}
          />
        </div>
      ))}

      <div>
        <label
          className={`block text-sm font-semibold mb-3 ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 resize-none ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
              : "bg-gray-50 border-gray-300 focus:border-blue-600"
          } border-2 focus:outline-none`}
          placeholder="Tell me about your project..."
        ></textarea>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl">
          <CheckCircle className="w-5 h-5" />
          <span>Form submitted! Your email client should open now.</span>
        </div>
      )}

      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
            </div>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppContact}
          className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300"
          title="Contact on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            💬 Chat on WhatsApp
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </button>
      </div>

      {/* Enhanced Footer */}
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
                Passionate about creating digital solutions that make an impact.
                With 1.5 years of experience in web development, I specialize in
                building scalable backends, modern frontends, and custom
                e-commerce solutions using technologies like JavaScript,
                React.js, Node.js, NestJS, PHP, and Shopify.
              </p>
              <div className="flex gap-4">
                {[
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
                ].map((social, index) => (
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
                {[
                  "About",
                  "Education",
                  "Certifications",
                  "Services",
                  "Projects",
                  "Experience",
                  "Contact",
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium"
                  >
                    → {link}
                  </button>
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
                &copy; 2025 Syed Abdul Maarij. Designed & Built with ❤️ in
                Pakistan
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
