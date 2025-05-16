
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Certification {
  id: number;
  name: string;
  organization: string;
  description: string;
  image: string;
  slug: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Certified Ethical Hacker (CEH)",
      organization: "EC-Council Global Services (EGS)",
      description: "Internationally recognized certification for ethical hackers and penetration testers.",
      image: "/placeholder.svg",
      slug: "ceh"
    },
    {
      id: 2,
      name: "CompTIA Security+",
      organization: "CompTIA",
      description: "Foundational certification covering essential security concepts and best practices.",
      image: "/placeholder.svg",
      slug: "security-plus"
    },
    {
      id: 3,
      name: "Certified Forensic Investigator (CFI)",
      organization: "Indian Cyber Security Council",
      description: "Specialized certification for digital forensic investigation techniques.",
      image: "/placeholder.svg",
      slug: "cfi"
    },
    {
      id: 4,
      name: "Certified Network Defender (CND)",
      organization: "EC-Council Global Services (EGS)",
      description: "Certification focused on network security and defense mechanisms.",
      image: "/placeholder.svg",
      slug: "cnd"
    },
    {
      id: 5,
      name: "Certified Incident Handler (CIH)",
      organization: "Indian Cyber Security Council",
      description: "Certification for professionals specializing in incident response and management.",
      image: "/placeholder.svg",
      slug: "cih"
    }
  ];

  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 bg-cyber-black relative">
      <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-cyber-blue/10 rounded-full mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Badge className="h-6 w-6 text-cyber-blue" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recognized <span className="text-cyber-blue">Certifications</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our programs prepare you for industry-leading certifications that boost your career prospects and validate your expertise.
          </motion.p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {certifications.map((cert) => (
              <CarouselItem key={cert.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="glass-card rounded-lg p-6 h-full relative"
                  onMouseEnter={() => setSelectedCert(cert.id)}
                  onMouseLeave={() => setSelectedCert(null)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-24 h-24 mb-4 bg-cyber-blue/10 rounded-full flex items-center justify-center">
                      <img src={cert.image} alt={cert.name} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-cyber-blue text-sm">{cert.organization}</p>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                  
                  <motion.div 
                    className={`absolute inset-0 bg-cyber-black/90 flex items-center justify-center rounded-lg p-6 transition-opacity ${selectedCert === cert.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedCert === cert.id ? 0.98 : 0 }}
                  >
                    <div className="text-center">
                      <h4 className="text-cyber-blue font-bold mb-2">{cert.name}</h4>
                      <p className="text-white mb-4">{cert.description}</p>
                      <Link to={`/certification/${cert.slug}`} className="cyber-button text-cyber-green text-sm inline-block">
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
        
        <div className="text-center mt-12">
          <h3 className="text-xl text-white font-medium mb-4">We partner with leading certification bodies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-cyber-blue font-semibold">EC-Council</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-cyber-blue font-semibold">CompTIA</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-cyber-blue font-semibold">Indian Cyber Security Council</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
