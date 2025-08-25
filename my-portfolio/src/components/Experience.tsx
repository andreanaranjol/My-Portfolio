import clientPromise from "@/lib/mongodb";
import ExperienceItem from "@/components/ExperienceItem";
import SectionWrapper from './SectionWrapper'
import ResumeButton from "./ResumeButton";

const dbName = process.env.MONGODB_DB as string;

export default async function Experience() {
  const client = await clientPromise;
  const db = client.db(dbName);
  const experiences = await db.collection("experience").find({}).toArray();
  const handleOpenPDF = () => {
    window.open("/files/Resume_ANL.pdf", "_blank");
  };

  return (
    <SectionWrapper id="experience" className="px-6 py-16 scroll-mt-24">
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
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <ResumeButton /> 
        </div>
      </div>
    </SectionWrapper>
  );
}