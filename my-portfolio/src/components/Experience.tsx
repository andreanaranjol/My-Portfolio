import clientPromise from "@/lib/mongodb";
import ExperienceItem from "@/components/ExperienceItem";
import SectionWrapper from './SectionWrapper'

const dbName = process.env.MONGODB_DB as string;

export default async function Experience() {
  const client = await clientPromise;
  const db = client.db(dbName);
  const experiences = await db.collection("experience").find({}).toArray();
  const handleOpenPDF = () => {
    window.open("/files/Resume_ANL.pdf", "_blank");
  };

  return (
    <SectionWrapper id="experience" className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-heading font-semibold mb-4 text-accent-primary">Experience</h3>
        </div>
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp._id.toString()}
            duration={exp.dates}
            title={exp.title}
            company={exp.location}
            description={exp.location}
            tags={exp.stack}
          />
        ))}
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={handleOpenPDF}
            className="
              px-5 py-2
              bg-accent-primary
              text-text-primary
              font-heading
              rounded-2xl
              shadow-md
              transition
              duration-200
              hover:bg-accent-hover
              focus:outline-none
              focus:ring-2
              focus:ring-accent-secondary
            "
          >
            View Full R&#233;sum&#233;
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}