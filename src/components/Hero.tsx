
import { Link } from "react-router-dom";
import { Shield, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToNextSection = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[92vh] flex items-center overflow-hidden noise-bg">
      {/* Background with matrix effect */}
      <div className="absolute inset-0 cybersecurity-grid bg-matrix-pattern opacity-30"></div>
      
      {/* Animated cyber nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-red rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.4 + Math.random() * 0.6
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8 + Math.random() * 12,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-black/90 to-cyber-black"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="inline-flex items-center justify-center p-4 bg-cyber-red/10 rounded-full mb-8 cyber-glow"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            <Shield className="h-12 w-12 text-cyber-red" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span 
              className="block"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Empowering
            </motion.span>
            <motion.span 
              className="text-cyber-red text-glow-red animate-glitch"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Digital Defenders
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Join the revolution in cyber forensic education at India's premier institute for 
            cybersecurity, digital forensics, and crime investigation training.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link to="/courses">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-cyber-red hover:bg-cyber-red-dark text-white px-8 py-6 text-lg rounded-md cyber-border transition-all">
                  <Lock className="mr-2 h-5 w-5" />
                  Explore Courses
                </Button>
              </motion.div>
            </Link>
            <Link to="/certifications">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="bg-transparent border border-cyber-red text-cyber-red hover:bg-cyber-red/10 px-8 py-6 text-lg rounded-md transition-all">
                  Get Certified
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer" 
          onClick={scrollToNextSection}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-cyber-red text-sm mb-2">Explore</span>
          <ChevronDown className="h-6 w-6 text-cyber-red" />
        </motion.div>
      </motion.div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-cyber-red/5"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-cyber-red/5"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-cyber-red/5"></div>
        <div className="absolute top-1/4 left-0 right-0 h-px bg-cyber-red/5"></div>
        <div className="absolute top-2/4 left-0 right-0 h-px bg-cyber-red/5"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-cyber-red/5"></div>
      </div>
    </div>
  );
};

export default Hero;
