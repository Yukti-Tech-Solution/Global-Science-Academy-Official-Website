import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, IndianRupee, CheckCircle2 } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="fee-structure" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Fee Structure</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Investment in Your Future
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for comprehensive education programs
          </p>
        </div>

        {/* Section 1: Complete Program Fees */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">Complete Program Fees (Classes 11 & 12)</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-center">
            <strong>Welcome to our comprehensive full-year programs!</strong> Enroll in our complete academic packages that include all subjects (Physics, Chemistry, Maths/Bio), comprehensive study materials, and full access to our exclusive test series designed to maximize your success.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Class 11 Program */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Class 11 (2-Year Comprehensive Program)</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Program Duration</p>
                    <p className="text-lg font-semibold">2 Years (Class 11 & 12 Combined)</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Total Fee</p>
                    <div className="flex items-baseline gap-2">
                      <IndianRupee className="h-5 w-5 text-primary" />
                      <span className="text-3xl font-bold">45,000</span>
                      <span className="text-muted-foreground">for the complete 2-year course</span>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">What's Included:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• All subjects: Physics, Chemistry, Mathematics/Biology</li>
                      <li>• Complete study materials and notes</li>
                      <li>• Full test series access</li>
                      <li>• Regular doubt clearing sessions</li>
                      <li>• Weekly mock tests</li>
                      <li>• Expert faculty guidance</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Program Brochure
                </Button>
              </CardContent>
            </Card>

            {/* Class 12 Program */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-500/10 p-2 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-indigo-800" />
                  </div>
                  <h4 className="text-xl font-bold">Class 12 (1-Year Focused Program)</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Program Duration</p>
                    <p className="text-lg font-semibold">1 Year (Intensive Class 12 Preparation)</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Total Fee</p>
                    <div className="flex items-baseline gap-2">
                      <IndianRupee className="h-5 w-5 text-indigo-800" />
                      <span className="text-3xl font-bold">32,000</span>
                      <span className="text-muted-foreground">for the 1-year course</span>
                    </div>
                  </div>

                  <div className="bg-indigo-500/5 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">What's Included:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• All subjects: Physics, Chemistry, Mathematics/Biology</li>
                      <li>• Complete study materials and notes</li>
                      <li>• Full test series access</li>
                      <li>• Intensive doubt clearing sessions</li>
                      <li>• Bi-weekly mock tests</li>
                      <li>• Expert faculty guidance</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full" size="lg" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Program Brochure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 2: Per-Subject Modular Fees */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Per-Subject Modular Enrollment</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-center">
            <strong>Prefer focused learning?</strong> Choose individual subject enrollment. These rates are for single-subject coaching only, perfect for students who want to strengthen specific areas.
          </p>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Physics */}
                  <div className="flex items-center justify-between p-4 bg-indigo-500/5 rounded-lg border border-indigo-200/20">
                    <div>
                      <p className="font-semibold text-lg mb-1">Physics</p>
                      <p className="text-sm text-muted-foreground">Class 11th: ₹6,000</p>
                      <p className="text-sm text-muted-foreground">Class 12th: ₹8,000</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <IndianRupee className="h-4 w-4 text-indigo-800" />
                      <span className="text-2xl font-bold text-indigo-800">14,000</span>
                    </div>
                  </div>

                  {/* Chemistry */}
                  <div className="flex items-center justify-between p-4 bg-indigo-500/5 rounded-lg border border-indigo-200/20">
                    <div>
                      <p className="font-semibold text-lg mb-1">Chemistry</p>
                      <p className="text-sm text-muted-foreground">Class 11th: ₹6,000</p>
                      <p className="text-sm text-muted-foreground">Class 12th: ₹8,000</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <IndianRupee className="h-4 w-4 text-indigo-800" />
                      <span className="text-2xl font-bold text-indigo-800">14,000</span>
                    </div>
                  </div>

                  {/* Mathematics */}
                  <div className="flex items-center justify-between p-4 bg-purple-500/5 rounded-lg border border-purple-200/20">
                    <div>
                      <p className="font-semibold text-lg mb-1">Mathematics</p>
                      <p className="text-sm text-muted-foreground">Class 11th: ₹6,000</p>
                      <p className="text-sm text-muted-foreground">Class 12th: ₹8,000</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <IndianRupee className="h-4 w-4 text-purple-600" />
                      <span className="text-2xl font-bold text-purple-600">14,000</span>
                    </div>
                  </div>

                  {/* Biology */}
                  <div className="flex items-center justify-between p-4 bg-emerald-500/5 rounded-lg border border-emerald-200/20">
                    <div>
                      <p className="font-semibold text-lg mb-1">Biology</p>
                      <p className="text-sm text-muted-foreground">Class 11th: ₹6,000</p>
                      <p className="text-sm text-muted-foreground">Class 12th: ₹8,000</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <IndianRupee className="h-4 w-4 text-emerald-600" />
                      <span className="text-2xl font-bold text-emerald-600">14,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground italic">
                    <strong>*</strong> Subject fees are annual/per course and may not include full test series benefits. Contact the office for detailed subject inclusions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Information */}
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="font-bold text-xl mb-4">Get More Information</h4>
              <p className="text-muted-foreground mb-6">
                For scholarship details, installment plans, and final pricing, please contact us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-primary hover:underline font-medium">
                  Phone: +91 98765 43210
                </a>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <a href="mailto:info@globalscienceacademy.com" className="flex items-center gap-2 text-primary hover:underline font-medium">
                  Email: info@globalscienceacademy.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

