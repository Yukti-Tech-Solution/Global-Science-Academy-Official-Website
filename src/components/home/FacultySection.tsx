import { facultyMembers } from "@/data/facultyData";
import FacultyCard from "@/components/FacultyCard";

const FacultySection = () => {
  return (
    <section id="faculty" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Staff and Teaching Subjects
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {facultyMembers.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;

