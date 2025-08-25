"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function About() {
  // Parent variant to stagger child animations
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // each child animates 0.2s after the previous
      },
    },
  };

  // Child variant for headings and paragraphs
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper id="about" className="bg-surface px-6 py-16 scroll-mt-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl font-heading font-semibold mb-4 text-accent-primary"
          variants={item}
        >
          About Me
        </motion.h3>

        <motion.p className="text-text-secondary text-lg mb-4" variants={item}>
          I’m Andrea Naranjo Lima, a Software Engineer with 4+ years of experience 
          building user-friendly web applications and hybrid mobile solutions.
        </motion.p>

        <motion.p className="text-text-secondary text-lg mb-4" variants={item}>
          My expertise spans front-end, back-end, and server-side development. 
          I’ve led projects from concept to deployment across IT services, e-commerce, 
          and government platforms.
        </motion.p>

        <motion.p className="text-text-secondary text-lg" variants={item}>
          Fluent in English and Spanish, I bring strong problem-solving skills, 
          attention to detail, and a passion for building technology that makes 
          processes smarter and more effective.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
