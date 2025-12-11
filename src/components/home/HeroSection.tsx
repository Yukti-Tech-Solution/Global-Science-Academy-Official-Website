import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, User } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[url('/institute/image14.png.jpeg')] bg-cover bg-center">
      {/* Background Image */}
      <picture className="absolute inset-0" aria-hidden>
        <source srcSet="/institute/image14.png.avif" type="image/avif" />
        <img
          src="/institute/image14.png.jpeg"
          alt="Global Science Academy building and classrooms in Ardhapur Nanded for JEE NEET coaching"
          className="w-full h-full object-cover object-center scale-105 md:scale-100"
          loading="eager"
        />
      </picture>

      {/* Soft dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 items-center justify-items-center text-center">
          {/* Content */}
          <div className="text-primary-foreground animate-fade-in-up max-w-5xl mx-auto">
            {/* Institute Name with Logo */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-4 text-balance">
              <img 
                src="/logo.png" 
                alt="Global Science Academy Logo - JEE NEET CET Coaching Institute Nanded Ardhapur" 
                className="h-20 w-auto sm:h-28 md:h-36 lg:h-44 xl:h-52 max-w-[200px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[440px] xl:max-w-[520px] object-contain flex-shrink-0" 
                loading="eager"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center lg:text-left leading-tight lg:leading-[1.05]">
                Global Science Academy
              </h1>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="inline-block bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">🎓 Excellence in Science Education</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary-foreground">
                Your Future Begins Here
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
                Premier coaching for 11th & 12th Grade Science students. Expert faculty, comprehensive study materials, and proven results.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 mb-8 justify-center">
              <div className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Students</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">4+</div>
                <div className="text-sm opacity-90">Expert Faculty</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/auth?mode=signup">
                <Button size="lg" variant="secondary" className="gap-2 hover:scale-105 transition-transform">
                  Join Now <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/notes">
                <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                  <Download className="h-5 w-5" /> Download Notes
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="gap-2 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                  <User className="h-5 w-5" /> Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
