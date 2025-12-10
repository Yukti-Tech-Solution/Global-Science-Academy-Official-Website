import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });
  const { toast } = useToast();
  const statusRef = useRef<HTMLDivElement | null>(null);
  const statusTimeoutRef = useRef<number | undefined>(undefined);

  const EMAILJS_SERVICE_ID = "service_zhlizg8";
  const EMAILJS_TEMPLATE_ID = "template_rkd0369";
  const EMAILJS_PUBLIC_KEY = "Ag2m3wGfq9I3sATgm";

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    return () => {
      if (statusTimeoutRef.current) {
        window.clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

  const scrollToStatus = () => {
    if (statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    const cleanedPhone = data.phone.replace(/\D/g, "").slice(0, 10);
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone_number: cleanedPhone,
      message: data.message,
      submission_date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    console.log("Submitting contact form", templateParams);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      setStatus({
        type: "success",
        text: "✓ Thank you! Your message has been sent. We'll contact you soon.",
      });
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        text: "✗ Failed to send message. Please try again or call us at 9823745311",
      });
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      scrollToStatus();
      if (statusTimeoutRef.current) {
        window.clearTimeout(statusTimeoutRef.current);
      }
      statusTimeoutRef.current = window.setTimeout(() => {
        setStatus({ type: null, text: "" });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about JEE, NEET, or CET coaching in Nanded? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in contact-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <Form {...form}>
                <form
                  id="contactForm"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            aria-label="Full Name"
                            required
                            minLength={2}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            aria-label="Email"
                            required
                            pattern="^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            inputMode="numeric"
                            placeholder="9876543210"
                            {...field}
                            aria-label="Phone Number"
                            required
                            minLength={10}
                            maxLength={10}
                            onChange={(event) => {
                              const cleaned = event.target.value.replace(/\D/g, "").slice(0, 10);
                              field.onChange(cleaned);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your requirements, course interest, or any questions..."
                            rows={4}
                            {...field}
                            aria-label="Message"
                            required
                            minLength={10}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="w-full submit-button"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                  <div
                    id="formStatus"
                    ref={statusRef}
                    className={`form-status ${
                      status.type === "success"
                        ? "form-status-success"
                        : status.type === "error"
                          ? "form-status-error"
                          : ""
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status.text}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-muted-foreground text-sm">
                      Global Science Academy<br />
                      Behind Bole hospital, Langade Nagar<br />
                      Ardhapur, 431704<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+919823745311" className="hover:text-primary transition-colors">
                        Raju B Salunke: +91-9823745311
                      </a>
                      <br />
                      <a href="tel:+919403745844" className="hover:text-primary transition-colors">
                        Balaji T Sawant: +91-9403745844
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      <a 
                        href="mailto:globalscienceacademyadp@gmail.com" 
                        className="hover:text-primary transition-colors break-all"
                      >
                        globalscienceacademyadp@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-muted-foreground text-sm space-y-1">
                      <span>Monday - Saturday: 7:30 AM – 2:30 PM</span><br />
                      <span>Sunday: Closed</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Hours verified via Google Maps.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.86495765334!2d77.3776586!3d19.2817083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1dbeee5db0cb1%3A0xf7010cdea40f360e!2sGlobal%20Science%20Academy!5e0!3m2!1sen!2sin!4v1732470000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Global Science Academy location"
                />
              </div>
              <div className="p-4 border-t bg-muted/30 flex flex-wrap gap-3 justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Prefer Google Maps? Open the shared location link below.
                </p>
                <Button asChild size="sm" variant="outline">
                  <a
                    href="https://maps.app.goo.gl/azSenQJWWfxWQMZW8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Shared Location
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
