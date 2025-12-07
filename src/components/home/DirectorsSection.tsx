import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Users } from "lucide-react";

const DirectorsSection = () => {
  const directors = [
    {
      name: "Prof. Raju B Salunke",
      title: "Co-Founder & Director",
      specialization: "M.Sc Biotech , B.Ed",
      image: "/faculty/raju-salunke.png.jpg",
      achievements: [
        "20+ years teaching experience",
       
        "Mentored 400+ successful students"
      ]
    },
    {
      name: "Prof. Balaji T Sawant",
      title: "Co-Founder & Director",
      specialization: "M.Sc  , B.Ed",
      image: "/faculty/balaji-sawant-png.jpg",
      
      achievements: [
        "18+ years teaching experience",
        "Mathematics Expert",
        
      ]
    }
  ];

  return (
    <section id="directors" className="py-20 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Meet Our Directors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visionary educators with decades of experience, dedicated to shaping the future of science education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {directors.map((director, index) => (
            <Card 
              key={director.name}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-1">{director.name}</h3>
                <p className="text-primary font-semibold mb-2">{director.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{director.specialization}</p>
                
                <div className="space-y-3">
                  {director.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {i === 0 ? (
                        <GraduationCap className="h-4 w-4 text-primary mt-0.5" />
                      ) : i === 1 ? (
                        <Award className="h-4 w-4 text-primary mt-0.5" />
                      ) : (
                        <Users className="h-4 w-4 text-primary mt-0.5" />
                      )}
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                "We believe that every student has the potential to excel. Our mission is to provide world-class 
                education that not only prepares students for exams but also instills a genuine love for science 
                and learning. Through innovative teaching methods and personalized attention, we aim to build 
                confident, knowledgeable individuals ready to take on the challenges of tomorrow."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
