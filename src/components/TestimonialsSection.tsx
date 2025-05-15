
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  linkedIn?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aditya Sharma",
      position: "Cybersecurity Analyst",
      company: "TechSecure Solutions",
      quote: "The training at CFII transformed my career. The hands-on labs and expert instructors provided practical knowledge that I use daily in my role as a cybersecurity analyst.",
      image: "/placeholder.svg",
      linkedIn: "https://linkedin.com"
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Digital Forensic Investigator",
      company: "National Cyber Cell",
      quote: "CFII's advanced forensics course gave me the expertise needed to excel in complex digital investigations. The curriculum is industry-relevant and constantly updated.",
      image: "/placeholder.svg",
      linkedIn: "https://linkedin.com"
    },
    {
      id: 3,
      name: "Rajiv Mehta",
      position: "IT Security Manager",
      company: "Global Banking Corp.",
      quote: "As a professional looking to enhance my security skills, CFII provided exactly what I needed. Their certifications are recognized industry-wide and helped me advance to a management role.",
      image: "/placeholder.svg",
      linkedIn: "https://linkedin.com"
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "SOC Team Lead",
      company: "InfoGuard Technologies",
      quote: "The incident response training at CFII is top-notch. I gained practical skills that helped me build and lead an effective security operations team at my organization.",
      image: "/placeholder.svg",
      linkedIn: "https://linkedin.com"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Police Inspector",
      company: "Cyber Crime Unit",
      quote: "CFII's specialized law enforcement training provided crucial skills for investigating digital crimes. The instructors' expertise and case studies were invaluable for my role.",
      image: "/placeholder.svg",
      linkedIn: "https://linkedin.com"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-cyber-black relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-cyber-blue/10 rounded-full mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Users className="h-6 w-6 text-cyber-blue" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Success <span className="text-cyber-blue">Stories</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from our alumni and discover how CFII has helped professionals achieve their career goals in the cybersecurity industry.
          </motion.p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-2">
                <motion.div 
                  className="glass-card rounded-lg p-8 h-full border border-cyber-blue/10 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ borderColor: "rgba(30, 174, 219, 0.3)" }}
                  viewport={{ once: true }}
                >
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute transform rotate-45 bg-cyber-blue/10 w-32 h-8 -top-4 -right-16"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <svg className="w-8 h-8 text-cyber-blue/30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8h1v-2h-1c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c1.7 0 3 1.3 3 3v1c0 0.6-0.4 1-1 1s-1-0.4-1-1v-3h-2v3c0 1.7 1.3 3 3 3s3-1.3 3-3v-1c0-2.8-2.2-5-5-5h-3zM22 8c-4.4 0-8 3.6-8 8s3.6 8 8 8h1v-2h-1c-3.3 0-6-2.7-6-6s2.7-6 6-6h3c1.7 0 3 1.3 3 3v1c0 0.6-0.4 1-1 1s-1-0.4-1-1v-3h-2v3c0 1.7 1.3 3 3 3s3-1.3 3-3v-1c0-2.8-2.2-5-5-5h-3z"></path>
                      </svg>
                    </div>
                    
                    <p className="text-gray-300 mb-8 text-lg italic">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-cyber-blue/30" 
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-cyber-blue text-sm">{testimonial.position}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                      {testimonial.linkedIn && (
                        <a 
                          href={testimonial.linkedIn} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-auto text-cyber-blue hover:text-cyber-blue-dark"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
