"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 border-t border-border-muted flex flex-col md:flex-row justify-between items-center bg-base text-text-secondary">
      <p className="text-sm">&copy; {new Date().getFullYear()} Andrea Naranjo Lima</p>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://github.com/andreanaranjol"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-primary transition-colors"
        >
          <Github size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/andrea-naranjo-lima-192254184/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-primary transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  )
}