import SectionWrapper from './SectionWrapper'

export default function Hero() {
  return (
    <SectionWrapper className="text-center px-4 py-24">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-accent-primary">
        Hi, I'm Andrea Naranjo Lima
      </h2>
      <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto mb-6">
        A front-end developer passionate about building sleek, performant websites.
      </p>
      <div className="space-x-4">
        <a href="#projects" className="bg-accent-primary hover:bg-accent-hover text-base px-6 py-3 rounded-md font-semibold transition">
          View Projects
        </a>
        <a href="#contact" className="border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-base bg-transparent px-6 py-3 rounded-md font-semibold transition">
          Contact Me
        </a>
      </div>
    </SectionWrapper>
  )
}