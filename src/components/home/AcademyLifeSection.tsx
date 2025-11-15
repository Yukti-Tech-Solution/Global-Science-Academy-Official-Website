import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Camera, Sparkles } from "lucide-react";

const AcademyLifeSection = () => {
  // Promotional Banners and Academy Photos
  const galleryImages = [
    {
      category: "Promotional",
      images: [
        {
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop&q=80",
          alt: "New Batch Admissions Open",
          title: "New Batch Admissions Open 2025-2026",
          description: "Enroll now for Classes 11 & 12"
        },
        {
          src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop&q=80",
          alt: "Scholarship Program Announcement",
          title: "Merit-Based Scholarship Program",
          description: "Upto 50% scholarship available for meritorious students"
        },
        {
          src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&h=600&fit=crop&q=80",
          alt: "Summer Batch Announcement",
          title: "Summer Crash Course 2025",
          description: "Intensive preparation for competitive exams"
        }
      ]
    },
    {
      category: "Infrastructure",
      images: [
        {
          src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=600&fit=crop&q=80",
          alt: "Modern Classroom",
          title: "Modern Classrooms",
          description: "State-of-the-art learning environment"
        },
        {
          src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=600&fit=crop&q=80",
          alt: "Science Laboratory",
          title: "Advanced Science Lab",
          description: "Well-equipped laboratory for practical learning"
        },
        {
          src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=600&fit=crop&q=80",
          alt: "Library",
          title: "Resource Library",
          description: "Comprehensive collection of study materials"
        },
        {
          src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=600&fit=crop&q=80",
          alt: "Study Hall",
          title: "Study Hall",
          description: "Quiet space for focused learning"
        }
      ]
    },
    {
      category: "Activities",
      images: [
        {
          src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&q=80",
          alt: "Student Activities",
          title: "Interactive Sessions",
          description: "Engaging learning experiences"
        },
        {
          src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop&q=80",
          alt: "Award Ceremony",
          title: "Award Ceremony",
          description: "Celebrating student achievements"
        },
        {
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop&q=80",
          alt: "Group Discussion",
          title: "Group Study Sessions",
          description: "Collaborative learning approach"
        }
      ]
    }
  ];

  // Flatten all images for carousel
  const allImages = galleryImages.flatMap(category => category.images);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="h-10 w-10 text-primary" />
            <Sparkles className="h-8 w-8 text-accent" />
          </div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Academy Life</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Academy Life & Photo Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our state-of-the-art facilities, vibrant activities, and the inspiring atmosphere of Global Science Academy
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {allImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="relative h-64 overflow-hidden group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
                        <p className="text-white/90 text-sm">{image.description}</p>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {galleryImages.find(cat => cat.images.includes(image))?.category}
                        </span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative -left-0" />
              <CarouselNext className="relative -right-0" />
            </div>
          </Carousel>
        </div>

        {/* Category Highlights */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {galleryImages.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.images[0].src}
                  alt={category.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.category}</h3>
                    <p className="text-white/90 text-sm">{category.images.length} Photos</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyLifeSection;

