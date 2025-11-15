import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Atom, FlaskConical, Calculator, Dna } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: "pcm",
      title: "PCM",
      subtitle: "Physics, Chemistry, Mathematics",
      description: "Perfect for engineering aspirants. Comprehensive coverage of all topics with focus on JEE and competitive exams.",
      icon: Calculator,
      color: "bg-indigo-500/10 text-indigo-800",
      subjects: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      id: "pcb",
      title: "PCB",
      subtitle: "Physics, Chemistry, Biology",
      description: "Ideal for medical aspirants. In-depth preparation for NEET and medical entrance exams with practical focus.",
      icon: Dna,
      color: "bg-green-500/10 text-green-600",
      subjects: ["Physics", "Chemistry", "Biology"]
    },
    {
      id: "pcmb",
      title: "PCMB",
      subtitle: "All Four Subjects",
      description: "Keep all options open. Complete coverage of Physics, Chemistry, Mathematics, and Biology for maximum flexibility.",
      icon: Atom,
      color: "bg-purple-500/10 text-purple-600",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"]
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Courses</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized courses for 11th & 12th grade students with expert faculty and proven teaching methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`${course.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-foreground">Subjects Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject) => (
                      <span key={subject} className="bg-secondary px-3 py-1 rounded-full text-xs font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={`/courses#${course.id}`}>
                  <Button className="w-full group/btn">
                    View Details 
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/courses">
            <Button size="lg" variant="outline">
              Explore All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
