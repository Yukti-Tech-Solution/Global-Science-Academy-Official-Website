import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Download, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Notes = () => {
  const subjects = [
    {
      id: "physics",
      name: "Physics",
      color: "text-blue-600",
      chapters: [
        { name: "Mechanics", notes: 15, videos: 8 },
        { name: "Thermodynamics", notes: 12, videos: 6 },
        { name: "Electromagnetism", notes: 18, videos: 10 },
        { name: "Optics", notes: 10, videos: 5 },
        { name: "Modern Physics", notes: 14, videos: 7 }
      ]
    },
    {
      id: "chemistry",
      name: "Chemistry",
      color: "text-green-600",
      chapters: [
        { name: "Physical Chemistry", notes: 16, videos: 9 },
        { name: "Inorganic Chemistry", notes: 14, videos: 7 },
        { name: "Organic Chemistry", notes: 20, videos: 12 },
        { name: "Chemical Bonding", notes: 10, videos: 6 }
      ]
    },
    {
      id: "mathematics",
      name: "Mathematics",
      color: "text-purple-600",
      chapters: [
        { name: "Calculus", notes: 22, videos: 15 },
        { name: "Algebra", notes: 18, videos: 10 },
        { name: "Trigonometry", notes: 12, videos: 8 },
        { name: "Coordinate Geometry", notes: 14, videos: 9 },
        { name: "Vectors & 3D", notes: 10, videos: 6 }
      ]
    },
    {
      id: "biology",
      name: "Biology",
      color: "text-emerald-600",
      chapters: [
        { name: "Cell Biology", notes: 16, videos: 10 },
        { name: "Genetics", notes: 14, videos: 8 },
        { name: "Plant Physiology", notes: 12, videos: 7 },
        { name: "Human Physiology", notes: 18, videos: 11 },
        { name: "Ecology", notes: 10, videos: 6 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary via-primary-light to-primary-dark py-20 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Study Material</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Access comprehensive notes, PDFs, presentations, and video lectures for all subjects
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">PDF Notes</h3>
                <p className="text-sm text-muted-foreground">Chapter-wise detailed notes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Video Lectures</h3>
                <p className="text-sm text-muted-foreground">Topic-wise video explanations</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Practice Papers</h3>
                <p className="text-sm text-muted-foreground">Previous years & model papers</p>
              </CardContent>
            </Card>
          </div>

          {/* Subject Tabs */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Browse Study Material</CardTitle>
              <CardDescription>Select a subject to view available content</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="physics" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                  {subjects.map((subject) => (
                    <TabsTrigger key={subject.id} value={subject.id}>
                      {subject.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {subjects.map((subject) => (
                  <TabsContent key={subject.id} value={subject.id} className="mt-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subject.chapters.map((chapter, index) => (
                        <Card 
                          key={index}
                          className="hover:shadow-lg transition-shadow"
                        >
                          <CardHeader>
                            <CardTitle className={`text-lg ${subject.color}`}>
                              {chapter.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">PDF Notes</span>
                              <span className="font-semibold">{chapter.notes} files</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Video Lectures</span>
                              <span className="font-semibold">{chapter.videos} videos</span>
                            </div>
                            
                            <div className="pt-2 space-y-2">
                              <Button className="w-full gap-2" disabled>
                                <Lock className="h-4 w-4" />
                                View Notes
                              </Button>
                              <p className="text-red-500 text-xs text-center font-semibold mt-2">
                                Study Material Coming Soon!
                              </p>
                              <p className="text-xs text-center text-muted-foreground">
                                Login required to access
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Access Premium Study Material</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get unlimited access to all notes, videos, and practice materials by enrolling in our courses
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/auth?mode=signup">
                  <Button size="lg">
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="lg" variant="outline">
                    Login to Access
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notes;
