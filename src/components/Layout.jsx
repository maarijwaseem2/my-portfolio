import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Layout = () => {
  const { isDarkMode, mousePosition } = useTheme();

  const handleWhatsAppContact = () => {
    const phoneNumber = "+923240236991";
    const message =
      "Hi! I saw your portfolio and would like to discuss a project.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-ink text-slate-200" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute h-[38rem] w-[38rem] rounded-full blur-[120px] transition-opacity duration-700 ${
            isDarkMode ? "bg-indigo-600/25" : "bg-indigo-300/40"
          }`}
          style={{
            top: "-8%",
            right: "-6%",
            transform: `translate(${mousePosition.x * 0.015}px, ${
              mousePosition.y * 0.015
            }px)`,
          }}
        />
        <div
          className={`absolute h-[32rem] w-[32rem] rounded-full blur-[120px] transition-opacity duration-700 ${
            isDarkMode ? "bg-cyan-500/15" : "bg-cyan-300/30"
          }`}
          style={{
            bottom: "2%",
            left: "-8%",
            transform: `translate(${mousePosition.x * -0.015}px, ${
              mousePosition.y * -0.015
            }px)`,
          }}
        />
        <div
          className={`absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full blur-[130px] ${
            isDarkMode ? "bg-violet-600/12" : "bg-violet-300/25"
          }`}
        />

        {/* Floating geometric shapes */}
        <div
          className={`float-a absolute left-[7%] top-[16%] h-16 w-16 rounded-2xl border-2 ${
            isDarkMode ? "border-indigo-400/20" : "border-indigo-400/30"
          }`}
        />
        <div
          className={`float-b absolute right-[10%] top-[26%] h-10 w-10 rounded-full border-2 ${
            isDarkMode ? "border-cyan-400/20" : "border-cyan-400/30"
          }`}
        />
        <div
          className={`float-b absolute left-[44%] top-[10%] h-8 w-8 rotate-45 rounded-md border-2 ${
            isDarkMode ? "border-violet-400/20" : "border-violet-400/30"
          }`}
        />
        <svg
          className={`float-c absolute bottom-[24%] left-[13%] h-14 w-14 ${
            isDarkMode ? "text-indigo-400/20" : "text-indigo-400/35"
          }`}
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,10 90,84 10,84"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className={`animate-spin-slow absolute bottom-[30%] right-[15%] h-16 w-16 ${
            isDarkMode ? "text-cyan-400/15" : "text-cyan-400/30"
          }`}
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,6 88,28 88,72 50,94 12,72 12,28"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className={`pulse-soft absolute right-[8%] top-[62%] h-3 w-3 rounded-full ${
            isDarkMode ? "bg-cyan-400/40" : "bg-cyan-500/40"
          }`}
        />
        <div
          className={`pulse-soft absolute left-[24%] top-[46%] h-2.5 w-2.5 rounded-full ${
            isDarkMode ? "bg-indigo-400/40" : "bg-indigo-500/40"
          }`}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />

      {/* Back to top */}
      <BackToTop />

      {/* WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppContact}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
          aria-label="Chat on WhatsApp"
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Layout;
