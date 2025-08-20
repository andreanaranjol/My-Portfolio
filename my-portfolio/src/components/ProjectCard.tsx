"use client";

import Tilt from "react-parallax-tilt";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Tilt
      glareEnable={true} // adds glare effect
      glareMaxOpacity={0.2}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={400}
      className="w-full md:w-80 p-1 bg-base"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-border-muted rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <h3 className="text-xl font-heading text-accent-primary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>

      </a>
    </Tilt>
  );
}
