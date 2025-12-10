import { Card } from "@/components/ui/card";
import { Award, Users, Trophy } from "lucide-react";

const SuccessSection = () => {
  const stats = [
    { number: "500+", label: "Students Enrolled", icon: Users },
    { number: "100+", label: "JEE/NEET Selection", icon: Trophy },
    { number: "4+", label: "Experienced Staff/Faculty", icon: Award }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Proven Track Record in JEE and NEET Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating our students' outstanding performance in JEE, NEET, and CET exams. Join hundreds of successful students who achieved their dreams at Global Science Academy Nanded.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
