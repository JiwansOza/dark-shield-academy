
import { Link } from "react-router-dom";
import { Shield, Lock, ChevronDown, Database, Code, Terminal, Fingerprint, Eye, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

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

  // Advanced animation controls for hackerish effect
  useEffect(() => {
    const interval = setInterval(() => {
      const glitchElements = document.querySelectorAll('.animate-glitch');
      const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
      if (randomElement) {
        randomElement.classList.add('glitching');
        setTimeout(() => {
          randomElement.classList.remove('glitching');
        }, 200);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Binary data pattern effect
  const binaryPatterns = Array(12).fill(0).map((_, i) => (
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
      style={{ left: `${i * 8}%` }}
    >
      {Array(40).fill(0).map(() => Math.round(Math.random())).join('')}
    </motion.div>
  ));

  // Floating forensic evidence elements
  const forensicElements = [
    { icon: <Fingerprint className="h-6 w-6 text-cyber-red" />, title: "Analysis" },
    { icon: <Database className="h-6 w-6 text-cyber-red" />, title: "Digital" },
    { icon: <Lock className="h-6 w-6 text-cyber-red" />, title: "Security" },
    { icon: <Terminal className="h-6 w-6 text-cyber-red" />, title: "Code" },
    { icon: <Server className="h-6 w-6 text-cyber-red" />, title: "Network" },
    { icon: <Eye className="h-6 w-6 text-cyber-red" />, title: "Monitor" }
  ];

  // Animated logos that float in the background
  const logoElements = [
    { src: "/assets/logo-shield.svg", alt: "Shield Logo", size: "w-16 h-16" },
    { src: "/assets/logo-lock.svg", alt: "Lock Logo", size: "w-12 h-12" },
    { src: "/assets/logo-fingerprint.svg", alt: "Fingerprint Logo", size: "w-14 h-14" },
    { src: "/assets/logo-data.svg", alt: "Data Logo", size: "w-10 h-10" },
  ];

  return (
    <div ref={scrollRef} className="relative min-h-[92vh] flex items-center overflow-hidden noise-bg">
      {/* Animated cyber attack defense simulation */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="rgba(234, 56, 76, 0.3)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <motion.path
            d="M0,30 Q25,50 50,30 T100,30"
            stroke="rgba(234, 56, 76, 0.2)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 0.5 }}
          />
          <motion.path
            d="M0,70 Q25,50 50,70 T100,70"
            stroke="rgba(234, 56, 76, 0.2)"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
          />
        </svg>
      </div>

      {/* Parallax Background with matrix effect */}
      <motion.div 
        className="absolute inset-0 cybersecurity-grid bg-matrix-pattern opacity-30"
        style={{ y: backgroundY }}
      />
      
      {/* Binary data flow effect */}
      <div className="absolute inset-0 overflow-hidden">
        {binaryPatterns}
      </div>
      
      {/* Digital Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <motion.line 
              key={`h-line-${i}`}
              x1="0" 
              y1={12.5 * i} 
              x2="100" 
              y2={12.5 * i}
              stroke="rgba(234, 56, 76, 0.5)"
              strokeWidth="0.1"
              strokeDasharray="1,3"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <motion.line 
              key={`v-line-${i}`}
              x1={12.5 * i} 
              y1="0" 
              x2={12.5 * i} 
              y2="100"
              stroke="rgba(234, 56, 76, 0.5)"
              strokeWidth="0.1"
              strokeDasharray="1,4"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
            />
          ))}
        </svg>
      </div>

      {/* Animated logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {logoElements.map((logo, i) => (
          <motion.div
            key={`logo-${i}`}
            className="absolute bg-cyber-black/40 backdrop-blur-sm rounded-full p-2 border border-cyber-red/20"
            initial={{ 
              x: 100 + (i * 220) + Math.random() * 100,
              y: 100 + Math.random() * 400,
              opacity: 0
            }}
            animate={{ 
              y: ["-10%", "10%"],
              x: [(i * 20) + "%", ((i * 20) + 5) + "%"],
              opacity: 0.7,
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10 + i * 2,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <div className={`${logo.size} relative`}>
              <Shield className={`absolute inset-0 w-full h-full text-cyber-red/80`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cyber network nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
              scale: 0.8,
              opacity: 0
            }}
            animate={{ 
              y: ["0%", "5%", "0%", "-5%", "0%"],
              scale: [0.8, 1, 0.8],
              opacity: 0.9
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + i,
              ease: "easeInOut",
              delay: i * 0.3
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
            className="inline-flex items-center justify-center p-6 bg-cyber-red/10 rounded-full mb-8 cyber-glow relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            <Shield className="h-16 w-16 text-cyber-red relative z-10" />
            <motion.div 
              className="absolute inset-0 bg-cyber-red/5 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span 
              className="block glitch-wrapper"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="animate-glitch">Empowering</span>
            </motion.span>
            <motion.span 
              className="text-cyber-red text-glow-red animate-glitch relative"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Digital Defenders
              <motion.span 
                className="absolute -inset-x-1 top-0 bottom-0 bg-cyber-red/10"
                animate={{ 
                  scaleX: [1, 1.02, 0.98, 1],
                  scaleY: [1, 1.01, 0.99, 1],
                  x: [0, 1, -1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5, 
                  ease: "easeInOut" 
                }}
              />
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
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button className="bg-cyber-red hover:bg-cyber-red-dark text-white px-8 py-6 text-lg rounded-md cyber-border transition-all relative overflow-hidden group">
                  <motion.span 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                  <Lock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-all" />
                  Explore Courses
                </Button>
              </motion.div>
            </Link>
            <Link to="/certifications">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button 
                  variant="outline" 
                  className="bg-transparent border border-cyber-red text-cyber-red hover:bg-cyber-red/10 px-8 py-6 text-lg rounded-md transition-all relative overflow-hidden group"
                >
                  <motion.span 
                    className="absolute inset-0 bg-cyber-red/10"
                    initial={{ y: "100%", opacity: 0 }}
                    whileHover={{ y: "0%", opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-all" />
                  Get Certified
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Digital fingerprint scan effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
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
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-red/30 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity
          }}
        />
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
    </div>
  );
};

export default Hero;
