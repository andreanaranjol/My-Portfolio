"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
            // Update URL hash without reloading
            window.history.replaceState(null, "", `#${sections[i]}`);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map section to navbar background colors
  const bgColors: { [key: string]: string } = {
    about: "bg-base",
    experience: "bg-surface",
    projects: "bg-base",
    contact: "bg-surface",
  };

  return (
    <header className={`w-full px-6 py-4 flex justify-between items-center sticky top-0 transition-colors duration-500 ${
        bgColors[activeSection] || "bg-base"
      }`}>
      <h1 className="text-xl font-heading text-accent-primary">Andrea Naranjo Lima</h1>
      <nav className="space-x-6 text-sm font-medium text-text-secondary">
        <a href="#about" className="hover:text-accent-primary">About</a>
        <a href="#experience" className="hover:text-accent-primary">Experience</a>
        <a href="#projects" className="hover:text-accent-primary">Projects</a>
        <a href="#contact" className="hover:text-accent-primary">Contact</a>
      </nav>
    </header>
  )
}