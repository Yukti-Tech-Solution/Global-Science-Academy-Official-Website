import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    "Comprehensive curriculum aligned with state boards",
    "Regular tests and performance tracking",
    "Doubt clearing sessions and personalized attention",
    "Study materials and practice papers",
    "Modern teaching methodology with digital tools",
    "Small batch sizes for effective learning"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Why Choose Global Science Academy?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to nurturing young minds and helping them achieve their dreams through quality education and guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
                alt="Classroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Approach to Excellence</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by <span className="font-semibold text-foreground">Prof. Raju Salunke</span> and <span className="font-semibold text-foreground">Prof. Balaji Sawant</span>, 
                Global Science Academy has been a beacon of quality education in science stream. We focus on building strong conceptual foundations 
                while preparing students for competitive exams.
              </p>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-secondary rounded-xl">
                <p className="text-foreground italic">
                  "Education is not the learning of facts, but the training of the mind to think. We believe in 
                  nurturing curious minds and building confident problem solvers."
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Directors, Global Science Academy</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
