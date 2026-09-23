import React, { useState, Suspense, lazy } from "react";
import { useTheme } from "../components/ThemeContext";
import Reveal from "../components/Reveal";
import {
  Send, CheckCircle, AlertCircle, Loader2,
  Mail, Github, Linkedin, MessageCircle,
} from "lucide-react";

// A second WebGL scene, mirroring the hero (different shape for variety).
const Scene3D = lazy(() => import("../components/Hero3D"));

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:maarijwaseem7@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/923240236991" },
  { icon: Github, label: "GitHub", href: "https://github.com/maarijwaseem2" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/maarijwaseem2" },
];

const Contact = () => {
  const { isDarkMode } = useTheme();
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const mailtoFallback = () => {
    const link = `mailto:maarijwaseem7@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio enquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = link;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // No key configured yet — open the user's mail client instead.
    if (!accessKey) {
      mailtoFallback();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New message from ${formData.name}`,
          message: formData.message,
          from_name: "Portfolio — Syed Abdul Maarij",
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const fieldClass = `w-full rounded-xl border px-5 py-3.5 outline-none transition-all duration-300 focus:ring-2 focus:ring-indigo-500/30 ${
    isDarkMode
      ? "border-white/10 bg-ink/60 text-white placeholder-slate-500 focus:border-indigo-400"
      : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-indigo-400"
  }`;
  const labelClass = `mb-2 block text-sm font-medium ${
    isDarkMode ? "text-slate-300" : "text-slate-700"
  }`;

  return (
    <section id="contact" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2
            className={`font-display text-4xl font-bold md:text-5xl ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Let&apos;s build something that scales
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p
            className={`mx-auto mt-4 max-w-2xl text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a system to scale or a product to build? Let&apos;s talk.
          </p>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: 3D showpiece + direct links */}
          <Reveal>
            <div
              className={`relative overflow-hidden rounded-3xl border ${
                isDarkMode
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="relative h-72 sm:h-80">
                <div className="pointer-events-none absolute inset-10 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-transparent blur-2xl" />
                <Suspense fallback={<div className="absolute inset-0" />}>
                  <Scene3D
                    variant="torus"
                    particleCount={360}
                    speed={1.15}
                    className="absolute inset-0 h-full w-full"
                  />
                </Suspense>
              </div>
            </div>

            <p
              className={`mt-6 text-sm font-medium ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Prefer a direct line? Reach me here:
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isDarkMode
                        ? "border-white/10 bg-white/5 text-slate-200 hover:border-indigo-400 hover:text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-indigo-400 hover:text-indigo-600"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div
              className={`relative overflow-hidden rounded-3xl border p-7 md:p-9 ${
                isDarkMode
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-200 bg-white shadow-xl"
              }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

              <h3
                className={`relative z-10 font-display text-2xl font-bold ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Send a message
              </h3>

              {status === "success" && (
                <div className="relative z-10 mt-6 flex items-start gap-3 rounded-xl border border-green-500/40 bg-green-500/10 p-4 text-green-400">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm">
                    Message sent. Thanks for reaching out — I&apos;ll get back to
                    you soon.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="relative z-10 mt-6 flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-400">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm">
                    Something went wrong. Please email me directly at
                    maarijwaseem7@gmail.com.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="relative z-10 mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Your name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
