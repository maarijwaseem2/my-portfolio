import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import { useTheme } from "../components/ThemeContext";

const NotFound = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center px-6 text-center ${
        isDarkMode ? "bg-ink text-slate-200" : "bg-slate-50 text-slate-800"
      }`}
    >
      <p className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text font-display text-8xl font-bold text-transparent">
        404
      </p>
      <h1
        className={`mt-4 font-display text-2xl font-bold ${
          isDarkMode ? "text-white" : "text-slate-900"
        }`}
      >
        Page not found
      </h1>
      <p className={`mt-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
      >
        <HomeIcon className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
