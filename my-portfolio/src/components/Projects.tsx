// src/components/Projects.tsx
import SectionWrapper from './SectionWrapper'
import clientPromise from "@/lib/mongodb";

const database_ = process.env.MONGODB_DB as string;

export default async function Projects() {

  const client = await clientPromise;
  const db = client.db(database_);
  const experience = await db.collection("experience").find({}).toArray();
  return (
    <SectionWrapper id="projects" className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-heading font-semibold mb-10 text-center text-accent-primary">
          Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((project) => (
            <div key={project} className="bg-surface p-6 rounded-lg border border-border-muted shadow-md">
              <h4 className="text-xl font-heading mb-2 text-accent-primary">Project {project}</h4>
              <p className="text-text-secondary mb-3">
                A modern web app built with Next.js, styled with Tailwind CSS.
              </p>
              <a href="#" className="text-accent-secondary hover:underline text-sm">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}