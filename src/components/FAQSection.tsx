
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the prerequisites for enrolling in CFII courses?",
      answer: "Most of our introductory courses require basic computer knowledge and an interest in cybersecurity. Advanced courses may have specific prerequisites such as prior experience or foundational certifications. Each course page details specific requirements."
    },
    {
      question: "Are CFII certifications recognized internationally?",
      answer: "Yes, CFII collaborates with global certification bodies like EC-Council and CompTIA to offer internationally recognized certifications. Our programs follow global standards and are designed to prepare you for worldwide employment opportunities."
    },
    {
      question: "Do you offer online learning options?",
      answer: "Absolutely! We offer flexible learning formats including fully online, hybrid, and in-person training. Our online platform provides live instructor-led sessions, hands-on virtual labs, and comprehensive learning materials."
    },
    {
      question: "What career opportunities are available after completing CFII programs?",
      answer: "Graduates can pursue various roles including Cybersecurity Analyst, Digital Forensic Investigator, Network Security Specialist, Incident Responder, and Security Consultant. Our placement cell actively connects students with industry opportunities."
    },
    {
      question: "Does CFII provide placement assistance?",
      answer: "Yes, we offer comprehensive placement support including resume building, interview preparation, and direct connections with our industry partners. Our 98% placement rate reflects our commitment to student career success."
    },
    {
      question: "How often are course materials updated?",
      answer: "Our curriculum undergoes quarterly reviews and updates to incorporate the latest threats, technologies, and industry best practices. This ensures our students learn relevant, current skills that meet evolving market demands."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-cyber-black-light relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-cyber-blue/10 rounded-full mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Info className="h-6 w-6 text-cyber-blue" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="text-cyber-blue">Questions</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about our courses, certifications, and career opportunities.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-cyber-blue/20">
                    <AccordionTrigger className="text-white hover:text-cyber-blue py-4 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Couldn't find the answer you're looking for? Feel free to reach out to us directly.
            </p>
            <a href="#contact" className="cyber-button text-cyber-green">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
