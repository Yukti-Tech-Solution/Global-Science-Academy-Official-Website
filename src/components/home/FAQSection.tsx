import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "What courses does Global Science Academy offer?",
      answer: "We offer comprehensive coaching for JEE Main, JEE Advanced, NEET, CET, and 11th-12th Science (Physics, Chemistry, Mathematics, Biology) with experienced faculty. Our courses include PCM (Physics, Chemistry, Mathematics), PCB (Physics, Chemistry, Biology), and PCMB (all four subjects)."
    },
    {
      question: "Where is Global Science Academy located in Nanded?",
      answer: "We are located in Ardhapur, behind Bole Hospital, Langade Nagar, Nanded - 431704, Maharashtra. Our institute is easily accessible and well-connected to major areas in Nanded district."
    },
    {
      question: "What are the timings of Global Science Academy?",
      answer: "We are open Monday to Saturday from 7:30 AM to 2:30 PM. Sunday is closed. Our classes are scheduled during these hours to accommodate school students."
    },
    {
      question: "What makes Global Science Academy the best coaching institute in Nanded?",
      answer: "We have expert faculty with years of experience, proven track record in JEE and NEET results, comprehensive study materials, regular tests and performance tracking, small batch sizes for personalized attention, and modern teaching methodology with digital tools."
    },
    {
      question: "Do you provide coaching for both JEE and NEET?",
      answer: "Yes, we provide comprehensive coaching for both JEE (JEE Main and JEE Advanced) for engineering aspirants and NEET for medical aspirants. Our PCM course focuses on JEE preparation while PCB course focuses on NEET preparation."
    },
    {
      question: "What is the fee structure for courses?",
      answer: "Please contact us directly at +91-9823745311 or +91-9403745844, or visit our institute to get detailed information about course fees, payment plans, and any available scholarships for meritorious students."
    },
    {
      question: "Do you provide study materials and notes?",
      answer: "Yes, we provide comprehensive study materials, practice papers, and notes as part of our course. We also have a notes section on our website where registered students can access additional resources."
    },
    {
      question: "How can I enroll for the 2025 batch?",
      answer: "You can enroll by visiting our institute in Ardhapur, Nanded, or by calling us at +91-9823745311 or +91-9403745844. You can also fill out the contact form on our website, and we'll get back to you with enrollment details."
    }
  ];

  // Schema.org FAQPage markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our JEE, NEET, and CET coaching programs in Nanded? Find answers to common questions below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;

