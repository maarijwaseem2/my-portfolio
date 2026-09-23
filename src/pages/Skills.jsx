import React from "react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs,
  SiExpress, SiPhp, SiLaravel, SiPython, SiTensorflow, SiTailwindcss,
  SiHtml5, SiCss, SiFramer, SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiFirebase, SiDocker, SiGit, SiGithub, SiShopify,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

// color = "" means inherit the card's (theme-aware) text color
const row1 = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#663399" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
];
const row2 = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Express", Icon: SiExpress, color: "" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
  { name: "OpenAI", Icon: TbBrandOpenai, color: "" },
];
const row3 = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "" },
  { name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
];

const Skills = () => {
  const { isDarkMode } = useTheme();

  const Chip = ({ name, Icon, color }) => (
    <div
      className={`mx-2 flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-3 backdrop-blur transition-colors duration-300 ${
        isDarkMode
          ? "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]"
          : "border-slate-200 bg-white text-slate-800 hover:border-indigo-300 hover:bg-slate-50"
      }`}
    >
      <Icon
        className="h-7 w-7 shrink-0"
        style={color ? { color } : undefined}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-sm font-semibold md:text-base">
        {name}
      </span>
    </div>
  );

  const Row = ({ items, reverse, speed }) => (
    <div className="marquee-mask overflow-hidden py-1">
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ "--speed": speed }}
      >
        {[...items, ...items].map((s, i) => (
          <Chip key={`${s.name}-${i}`} {...s} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Skills &amp; tools
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mt-4 text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            The stack I build with, from database to interface
          </p>
        </Reveal>
      </div>

      <Reveal className="space-y-4">
        <Row items={row1} reverse={false} speed="26s" />
        <Row items={row2} reverse={true} speed="30s" />
        <Row items={row3} reverse={false} speed="34s" />
      </Reveal>
    </section>
  );
};

export default Skills;
