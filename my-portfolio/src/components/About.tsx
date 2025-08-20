"use client"

import SectionWrapper from './SectionWrapper';
import { motion } from "framer-motion";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-heading font-semibold mb-4 text-accent-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h3>

        <motion.p
          className="text-text-secondary text-lg mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I’m Andrea Naranjo Lima, a Software Engineer with 4+ years of experience 
          building user-friendly web applications and hybrid mobile solutions.
        </motion.p>

        <motion.p
          className="text-text-secondary text-lg mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          My expertise spans front-end, back-end, and server-side development. 
          I’ve led projects from concept to deployment across IT services, e-commerce, 
          and government platforms.
        </motion.p>

        <motion.p
          className="text-text-secondary text-lg mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I work with technologies like React, Vue.js, Node.js, and Ionic, and have 
          strong experience with PostgreSQL, MongoDB, and Firebase. I also mentor 
          peers, collaborate with cross-functional teams, and focus on features that 
          enhance performance and user experience.
        </motion.p>

        <motion.p
          className="text-text-secondary text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Fluent in English and Spanish, I bring strong problem-solving skills, 
          attention to detail, and a passion for building technology that makes 
          processes smarter and more effective.
        </motion.p>
      </div>
    </SectionWrapper>
  )
}