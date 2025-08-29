"use client";

import { Cursor } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  // Typewriter tagline
  const [text] = useTypewriter({
    words: [
      "Turning pixels into interactive magic, one website at a time."
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative flex flex-col justify-center items-center text-center px-4 overflow-hidden h-[60vh] sm:h-[70vh] md:h-screen">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-accent-primary">
          Hi, I'm Andrea Naranjo Lima
        </h2>

        <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto mb-6">
          {text}<Cursor cursorStyle="|" />
        </p>

        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-accent-primary text-white px-6 py-3 rounded-md font-semibold transition transform hover:scale-105 hover:shadow-xl hover:bg-accent-hover"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white px-6 py-3 rounded-md font-semibold transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
