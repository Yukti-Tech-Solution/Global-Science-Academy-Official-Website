import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Users, BookOpen, Calendar } from "lucide-react";

const Courses = () => {
  useEffect(() => {
    document.title = "Courses - JEE, NEET, CET Coaching Programs | Global Science Academy Nanded";
  }, []);

  const courses = [
    {
      id: "pcm",
      title: "PCM - Physics, Chemistry, Mathematics",
      description: "Comprehensive course for engineering aspirants targeting MHT CET and  engineering entrance exams.",
      subjects: [
        {
          name: "Physics",
          topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"]
        },
        {
          name: "Chemistry",
          topics: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry", "Chemical Bonding"]
        },
        {
          name: "Mathematics",
          topics: ["Calculus", "Algebra", "Trigonometry", "Coordinate Geometry", "Vectors & 3D"]
        }
      ],
      features: [
        "Daily practice problems and assignments",
        "Weekly chapter tests",
        "Monthly full-length mock tests",
        "Doubt clearing sessions twice a week",
        "Study material and previous years' papers",
        "Online test series access"
      ],
      schedule: "Monday to Saturday, 6:00 AM - 2:00 PM",
      batchSize: "30 students per batch",
      duration: "2 Years (11th & 12th)"
    },
    {
      id: "pcb",
      title: "PCB - Physics, Chemistry, Biology",
      description: "Specialized course for medical aspirants preparing for MHT CET, Nursing and other medical entrance examinations.",
      subjects: [
        {
          name: "Physics",
          topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"]
        },
        {
          name: "Chemistry",
          topics: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry", "Biomolecules"]
        },
        {
          name: "Biology",
          topics: ["Cell Biology", "Genetics", "Plant Physiology", "Human Physiology", "Ecology"]
        }
      ],
      features: [
        "Practical-oriented learning with lab sessions",
        "Weekly NEET pattern tests",
        "Monthly full syllabus tests",
        "Biology diagram practice sessions",
        "Complete study material and notes",
        "Online test platform access"
      ],
      schedule: "Monday to Saturday, 6:00 AM - 2:00 PM",
      batchSize: "35 students per batch",
      duration: "2 Years (11th & 12th)"
    },
    {
      id: "pcmb",
      title: "PCMB - All Four Subjects",
      description: "Flexible course covering all four subjects, keeping options open for both engineering and medical streams.",
      subjects: [
        {
          name: "Physics",
          topics: ["Complete JEE/NEET Physics syllabus"]
        },
        {
          name: "Chemistry",
          topics: ["Complete JEE/NEET Chemistry syllabus"]
        },
        {
          name: "Mathematics",
          topics: ["Complete JEE Mathematics syllabus"]
        },
        {
          name: "Biology",
          topics: ["Complete NEET Biology syllabus"]
        }
      ],
      features: [
        "Comprehensive coverage of all subjects",
        "Separate tests for JEE and NEET patterns",
        "Flexible exam preparation guidance",
        "Extended doubt sessions",
        "Complete study material for all subjects",
        "Career counseling included"
      ],
      schedule: "Monday to Saturday, 5:30 AM - 3:00 PM",
      batchSize: "25 students per batch",
      duration: "2 Years (11th & 12th)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary via-primary-light to-primary-dark py-20 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">JEE, NEET & CET Coaching Programs in Nanded</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Choose the right path for your future. Expert Physics, Chemistry, Mathematics & Biology faculty in Ardhapur, Nanded. Comprehensive curriculum and proven results for JEE, NEET, and CET preparation.
            </p>
          </div>
        </div>

        {/* Courses */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="space-y-12">
            {courses.map((course, index) => (
              <Card 
                key={course.id} 
                id={course.id}
                className="overflow-hidden shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-3xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" />
                          Subjects Covered
                        </h3>
                        <div className="space-y-4">
                          {course.subjects.map((subject) => (
                            <div key={subject.name}>
                              <h4 className="font-semibold text-foreground mb-2">{subject.name}</h4>
                              <div className="flex flex-wrap gap-2">
                                {subject.topics.map((topic) => (
                                  <span key={topic} className="bg-secondary px-3 py-1 rounded-full text-xs">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4">Course Features</h3>
                        <div className="space-y-2">
                          {course.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <Card className="bg-secondary">
                        <CardContent className="p-6 space-y-4">
                          <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                          
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-sm">Schedule</p>
                              <p className="text-muted-foreground text-sm">{course.schedule}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-sm">Batch Size</p>
                              <p className="text-muted-foreground text-sm">{course.batchSize}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-sm">Duration</p>
                              <p className="text-muted-foreground text-sm">{course.duration}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                      {/* Fees removed as per standardized Fee Structure on homepage */}
                      <div>
                        <p className="font-medium text-sm">Course Fees</p>
                        <p className="text-muted-foreground text-sm">See Fee Structure section on Home</p>
                        <p className="text-xs text-muted-foreground mt-1">Refer to Programs & Fee Structure</p>
                      </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="space-y-3">
                        <Link to="/auth?mode=signup">
                          <Button size="lg" className="w-full">
                            Enroll Now
                          </Button>
                        </Link>
                        <Link to="/notes">
                          <Button size="lg" variant="outline" className="w-full">
                            View Study Material
                          </Button>
                        </Link>
                      </div>

                      <Card className="bg-accent/10 border-accent/20">
                        <CardContent className="p-4">
                          <p className="text-sm text-center">
                            <span className="font-semibold">Limited seats available!</span>
                            <br />
                            Contact us for admission details
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Faculty Section removed as per requirement */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
