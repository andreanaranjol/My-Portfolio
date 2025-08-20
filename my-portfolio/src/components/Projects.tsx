import ProjectCard from './ProjectCard'
import SectionWrapper from './SectionWrapper'

export default async function Projects() {

  return (
    <SectionWrapper id="projects" className="bg-surface px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-heading font-semibold mb-10 text-center text-accent-primary">
          Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {/*[1, 2].map((project) => (
            <div key={project} className="bg-surface p-6 rounded-lg border border-border-muted transition hover:border-accent-primary hover:shadow-[0_0_30px_-5px_rgba(138,99,210,0.5)]">
              <h4 className="text-xl font-heading mb-2 text-accent-primary">Project {project}</h4>
              <p className="text-text-secondary mb-3">
                A modern web app built with Next.js, styled with Tailwind CSS.
              </p>
              <a href="#" className="text-accent-secondary hover:underline text-sm">
                View on GitHub →
              </a>
            </div>
          ))*/}
          <ProjectCard
            title="The Portfolio"
            description="My personal portfolio built with Next.js & TailwindCSS"
            link="https://github.com/andreanaranjol/My-Portfolio"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}