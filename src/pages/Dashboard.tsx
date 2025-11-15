import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Calendar, 
  FileText, 
  Award, 
  Clock, 
  Download,
  BookOpen,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Priya!</h1>
            <p className="text-muted-foreground">Here's your academic progress and updates</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Attendance</p>
                    <p className="text-3xl font-bold text-primary">92%</p>
                  </div>
                  <CheckCircle2 className="h-12 w-12 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. Score</p>
                    <p className="text-3xl font-bold text-primary">87%</p>
                  </div>
                  <TrendingUp className="h-12 w-12 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tests Taken</p>
                    <p className="text-3xl font-bold text-primary">24</p>
                  </div>
                  <FileText className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Rank</p>
                    <p className="text-3xl font-bold text-primary">#7</p>
                  </div>
                  <Award className="h-12 w-12 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Tests */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Recent Test Results</CardTitle>
                  <CardDescription>Your latest performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { subject: "Physics", chapter: "Electromagnetism", score: 92, total: 100 },
                      { subject: "Chemistry", chapter: "Organic Chemistry", score: 85, total: 100 },
                      { subject: "Mathematics", chapter: "Calculus", score: 88, total: 100 }
                    ].map((test, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">{test.subject} - {test.chapter}</p>
                            <p className="text-sm text-muted-foreground">
                              Score: {test.score}/{test.total}
                            </p>
                          </div>
                          <span className="text-2xl font-bold text-primary">
                            {Math.round((test.score / test.total) * 100)}%
                          </span>
                        </div>
                        <Progress value={(test.score / test.total) * 100} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Homework */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Pending Homework</CardTitle>
                  <CardDescription>Complete before the deadline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { subject: "Physics", topic: "Numerical Problems - Chapter 12", due: "2 days" },
                      { subject: "Chemistry", topic: "Reaction Mechanisms Practice", due: "4 days" },
                      { subject: "Mathematics", topic: "Integration Worksheet", due: "5 days" }
                    ].map((hw, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold">{hw.subject}</p>
                          <p className="text-sm text-muted-foreground">{hw.topic}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary">Due in</p>
                          <p className="text-sm text-muted-foreground">{hw.due}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Profile */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Priya Sharma</h3>
                    <p className="text-sm text-muted-foreground">PCM Student</p>
                    <p className="text-sm text-muted-foreground">Roll No: 2024-PCM-047</p>
                  </div>
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Class</span>
                      <span className="font-medium">12th Grade</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Batch</span>
                      <span className="font-medium">Morning A</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Academic Year</span>
                      <span className="font-medium">2024-25</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { event: "Physics Mock Test", date: "Jan 15", time: "9:00 AM" },
                    { event: "Chemistry Practical", date: "Jan 18", time: "10:30 AM" },
                    { event: "Parent-Teacher Meet", date: "Jan 22", time: "3:00 PM" }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 p-3 bg-secondary rounded-lg">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">{item.event}</p>
                        <p className="text-xs text-muted-foreground">{item.date} at {item.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Notes
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Admit Card
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Award className="h-4 w-4 mr-2" />
                    View Certificates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
