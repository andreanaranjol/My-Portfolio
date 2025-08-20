import SectionWrapper from './SectionWrapper'

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-heading font-semibold mb-4 text-accent-primary">About Me</h3>
        <p className="text-text-secondary text-lg">
          I’m Andrea Naranjo Lima, a front-end developer who enjoys designing beautiful, user-friendly
          interfaces using modern tech like React, Next.js, and Tailwind CSS. I value accessibility,
          performance, and clean, elegant code.
        </p>
      </div>
    </SectionWrapper>
  )
}