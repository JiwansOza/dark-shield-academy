
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useInView } from "framer-motion";
import { Users, Building, GraduationCap } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const About = () => {
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Ensure all animations become visible after component mounts
    const timer = setTimeout(() => {
      setAnimationsLoaded(true);
      console.log("About page animations should be visible now");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      
      <section className="py-12 bg-cyber-black-light relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            ref={headingRef}
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView || animationsLoaded ? 1 : 0, y: isInView || animationsLoaded ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            style={{ 
              opacity: animationsLoaded ? undefined : 1, // Fallback opacity
              transform: animationsLoaded ? undefined : 'translateY(0)' // Fallback position
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-cyber-blue">CFII</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              India's premier institution for cyber forensics and security training with a mission to create a safer digital India.
            </p>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our <span className="text-cyber-blue">Leadership</span></h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Rajesh Kumar",
                  role: "Director & Chief Instructor",
                  bio: "Former cyber advisor to government agencies with over 20 years of experience in digital forensics."
                },
                {
                  name: "Priya Sharma",
                  role: "Technical Head",
                  bio: "Certified ethical hacker and security researcher specializing in malware analysis and reverse engineering."
                },
                {
                  name: "Prof. Amit Verma",
                  role: "Academic Dean",
                  bio: "Former university professor with extensive experience in cybersecurity education and curriculum development."
                }
              ].map((leader, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: animationsLoaded ? 1 : 0, y: animationsLoaded ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ 
                    opacity: animationsLoaded ? undefined : 1, // Fallback opacity
                    transform: animationsLoaded ? undefined : 'translateY(0)' // Fallback position
                  }}
                >
                  <div className="w-24 h-24 bg-cyber-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img src="/placeholder.svg" alt={leader.name} className="w-20 h-20 rounded-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-cyber-blue mb-3">{leader.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{leader.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Users className="h-6 w-6 text-cyber-blue" />,
                title: "Our Team",
                description: "Our faculty comprises industry veterans, certified security professionals, and academic experts dedicated to providing world-class training.",
                items: ["Certified instructors", "Industry practitioners", "Research specialists", "Academic professionals"]
              },
              {
                icon: <Building className="h-6 w-6 text-cyber-blue" />,
                title: "Our Facilities",
                description: "State-of-the-art training centers equipped with advanced technology and specialized forensic laboratories.",
                items: ["Digital forensic labs", "Cybersecurity SOC", "Hardware hacking lab", "Mobile forensics station"]
              },
              {
                icon: <GraduationCap className="h-6 w-6 text-cyber-blue" />,
                title: "Our Methodology",
                description: "Holistic approach combining theoretical knowledge with practical applications and real-world case studies.",
                items: ["Hands-on training", "Case-based learning", "Industry internships", "Continuous assessment"]
              }
            ].map((section, index) => (
              <motion.div 
                key={index}
                className="glass-card p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: animationsLoaded ? 1 : 0, y: animationsLoaded ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ 
                  opacity: animationsLoaded ? undefined : 1, // Fallback opacity
                  transform: animationsLoaded ? undefined : 'translateY(0)' // Fallback position
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{section.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="glass-card p-8 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: animationsLoaded ? 1 : 0, y: animationsLoaded ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ 
              opacity: animationsLoaded ? undefined : 1, // Fallback opacity
              transform: animationsLoaded ? undefined : 'translateY(0)' // Fallback position
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Partners & Collaborations</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["EC-Council", "CompTIA", "Indian Cyber Security Council", "NASSCOM"].map((partner, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg flex items-center justify-center">
                  <p className="text-cyber-blue font-semibold">{partner}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
