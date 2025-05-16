
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const AboutSection = () => {
  const [animationsLoaded, setAnimationsLoaded] = useState(false);

  useEffect(() => {
    // Ensure animations are visible after component mounts
    const timer = setTimeout(() => {
      setAnimationsLoaded(true);
      console.log("Animations should be visible now");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const timelineItems: TimelineItem[] = [
    {
      year: "2010",
      title: "Foundation of CFII",
      description: "Established as a small training center focused on basic cybersecurity education."
    },
    {
      year: "2014",
      title: "Government Recognition",
      description: "Received official recognition from the Indian government for cybersecurity training excellence."
    },
    {
      year: "2017",
      title: "EC-Council Partnership",
      description: "Formed strategic partnership with EC-Council to offer international certifications."
    },
    {
      year: "2019",
      title: "Research Lab Inauguration",
      description: "Launched state-of-the-art cyber forensics research laboratory with advanced tools."
    },
    {
      year: "2022",
      title: "National Excellence Award",
      description: "Recognized with National Excellence Award in Cyber Forensics Education."
    },
    {
      year: "Present",
      title: "Leading the Industry",
      description: "India's premier institution for cyber forensics and security training with global recognition."
    }
  ];

  const statsItems = [
    { value: "5000+", label: "Certified Professionals" },
    { value: "25+", label: "Expert Instructors" },
    { value: "15+", label: "Industry Partners" },
    { value: "98%", label: "Placement Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-cyber-black-light relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-cyber-blue/10 rounded-full mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: animationsLoaded ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="h-6 w-6 text-cyber-blue" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animationsLoaded ? 1 : 0, y: animationsLoaded ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About <span className="text-cyber-blue">CFII</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animationsLoaded ? 1 : 0, y: animationsLoaded ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Cyber Forensic Institute of India (CFII) is India's trusted institution for cyber forensics, cybersecurity, and digital crime investigation training. Our mission is to build a safer digital India by empowering professionals with cutting-edge skills.
          </motion.p>
        </div>
        
        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            Our <span className="text-cyber-blue">Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-cyber-blue/20"></div>
            
            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className={`mb-12 flex flex-col md:flex-row relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: animationsLoaded ? 1 : 0, y: animationsLoaded ? 0 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: Math.min(0.1 + index * 0.1, 0.8) }}
              >
                <div className="md:w-1/2 p-4"></div>
                
                <div className="flex items-center justify-center z-10">
                  <div className="bg-cyber-blue w-4 h-4 rounded-full border-4 border-cyber-black-light"></div>
                </div>
                
                <div className={`md:w-1/2 p-4 glass-card rounded-lg ${index % 2 === 0 ? 'text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-cyber-blue/10 inline-block px-3 py-1 rounded-full text-cyber-blue text-sm font-medium mb-2">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats Section - With immediate fallback display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {statsItems.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-lg text-center relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: animationsLoaded ? 1 : 0, scale: animationsLoaded ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(0.1 + index * 0.1, 0.5) }}
              style={{ 
                opacity: animationsLoaded ? undefined : 1, // Fallback opacity
                transform: animationsLoaded ? undefined : 'scale(1)' // Fallback scale
              }}
            >
              <h4 className="text-3xl md:text-4xl font-bold text-cyber-blue mb-2">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Mission & Vision - With immediate fallback display */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          <motion.div 
            className="glass-card p-8 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: animationsLoaded ? 1 : 0, x: animationsLoaded ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ 
              opacity: animationsLoaded ? undefined : 1, // Fallback opacity
              transform: animationsLoaded ? undefined : 'translateX(0)' // Fallback position
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To create a cyber-secure India by producing world-class professionals equipped with advanced cybersecurity and forensics skills through cutting-edge education, research, and industry collaboration.
            </p>
          </motion.div>
          
          <motion.div 
            className="glass-card p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: animationsLoaded ? 1 : 0, x: animationsLoaded ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ 
              opacity: animationsLoaded ? undefined : 1, // Fallback opacity
              transform: animationsLoaded ? undefined : 'translateX(0)' // Fallback position
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To become the global leader in cyber forensic education, setting standards of excellence, innovation, and ethical practice in the rapidly evolving digital security landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
