
import { Link } from "react-router-dom";
import { Shield, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const scrollToNextSection = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Binary data pattern effect
  const binaryPatterns = Array(8).fill(0).map((_, i) => (
    <motion.div 
      key={`binary-${i}`}
      className="absolute text-cyber-red/10 text-xs font-mono whitespace-nowrap select-none"
      initial={{
        x: Math.random() * 100 - 50 + "%",
        y: Math.random() * 100 + "%",
        opacity: 0.2 + Math.random() * 0.3
      }}
      animate={{
        y: ["0%", "100%"],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 20 + Math.random() * 30,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ left: `${i * 12.5}%` }}
    >
      {Array(40).fill(0).map(() => Math.round(Math.random())).join('')}
    </motion.div>
  ));

  // Floating forensic evidence elements
  const forensicElements = [
    { icon: "🔍", title: "Analysis" },
    { icon: "🖥️", title: "Digital" },
    { icon: "🔒", title: "Security" },
    { icon: "📊", title: "Data" },
    { icon: "⚖️", title: "Evidence" }
  ];

  return (
    <div ref={scrollRef} className="relative min-h-[92vh] flex items-center overflow-hidden noise-bg">
      {/* Parallax Background with matrix effect */}
      <motion.div 
        className="absolute inset-0 cybersecurity-grid bg-matrix-pattern opacity-30"
        style={{ y: backgroundY }}
      />
      
      {/* Binary data flow effect */}
      <div className="absolute inset-0 overflow-hidden">
        {binaryPatterns}
      </div>

      {/* Cyber network nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${2 + Math.floor(Math.random() * 3)} h-${2 + Math.floor(Math.random() * 3)} bg-cyber-red rounded-full`}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0.4 + Math.random() * 0.6,
              scale: 0.8 + Math.random() * 0.4
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8 + Math.random() * 12,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Connecting lines for network simulation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path 
          d="M100,100 C200,200 300,100 400,300" 
          stroke="rgba(234, 56, 76, 0.2)" 
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path 
          d="M500,200 C300,300 200,400 100,500" 
          stroke="rgba(234, 56, 76, 0.2)" 
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.path 
          d="M700,100 C600,300 500,200 400,400" 
          stroke="rgba(234, 56, 76, 0.2)" 
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </svg>
      
      {/* Floating forensic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {forensicElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center"
            initial={{ 
              x: 100 + (i * 200) + Math.random() * 100, 
              y: 100 + Math.random() * 400,
              scale: 0.8
            }}
            animate={{ 
              y: ["0%", "5%", "0%", "-5%", "0%"],
              scale: [0.8, 1, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + i,
              ease: "easeInOut"
            }}
          >
            <div className="bg-cyber-black/70 border border-cyber-red/20 rounded-full p-4 backdrop-blur-sm">
              <div className="text-2xl">{element.icon}</div>
              <div className="text-xs text-cyber-red mt-1 text-center">{element.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-black/90 to-cyber-black"></div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y: textY }}
      >
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
      </motion.div>
      
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
      
      {/* Grid lines with parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        style={{ opacity: gridOpacity }}
      >
        <motion.div className="absolute left-1/4 top-0 bottom-0 w-px bg-cyber-red/5"></motion.div>
        <motion.div className="absolute left-2/4 top-0 bottom-0 w-px bg-cyber-red/5"></motion.div>
        <motion.div className="absolute left-3/4 top-0 bottom-0 w-px bg-cyber-red/5"></motion.div>
        <motion.div className="absolute top-1/4 left-0 right-0 h-px bg-cyber-red/5"></motion.div>
        <motion.div className="absolute top-2/4 left-0 right-0 h-px bg-cyber-red/5"></motion.div>
        <motion.div className="absolute top-3/4 left-0 right-0 h-px bg-cyber-red/5"></motion.div>
      </motion.div>

      {/* Digital fingerprint scan effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20 bg-gradient-to-r from-transparent via-cyber-red/30 to-transparent">
        <motion.div 
          className="h-full w-1 bg-cyber-red"
          animate={{ 
            x: ["0%", "100%", "0%"],
          }}
          transition={{ 
            duration: 8, 
            ease: "linear", 
            repeat: Infinity 
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
