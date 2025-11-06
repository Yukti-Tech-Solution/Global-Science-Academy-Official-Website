import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, User } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark opacity-95" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.jpg" 
                alt="Global Science Academy Logo" 
                className="h-12 w-auto" 
              />
              <div className="inline-block bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">🎓 Excellence in Science Education</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Future Begins Here
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Premier coaching for 11th & 12th Grade Science students. Expert faculty, comprehensive study materials, and proven results.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Students</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Expert Faculty</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
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
          
          {/* Right Content - Swiper Slider */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-full rounded-2xl overflow-hidden h-[400px] md:h-[520px]">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full"
              >
                {[
                  '/institute/image1.png.jpg',
                  '/institute/image2.png.jpg',
                  '/institute/image3.png.jpg',
                ].map((src, index) => (
                  <SwiperSlide key={index} className="w-full h-full">
                    <img src={src} alt={`Institute Image ${index + 1}`} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
