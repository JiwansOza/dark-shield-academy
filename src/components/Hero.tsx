
import { Link } from "react-router-dom";
import { Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background with matrix effect */}
      <div className="absolute inset-0 bg-cyber-black bg-matrix-pattern bg-cyber-grid opacity-30 animate-matrix"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-black/90 to-cyber-black"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-2 bg-cyber-red/10 rounded-full mb-6 animate-float">
            <Shield className="h-10 w-10 text-cyber-red" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Empowering</span>
            <span className="text-cyber-red text-glow-red">Digital Defenders</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12">
            Join the revolution in cyber forensic education at India's premier institute for cybersecurity, digital forensics, and crime investigation training.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/courses">
              <Button className="bg-cyber-red hover:bg-cyber-red-dark text-white px-8 py-6 text-lg rounded-md cyber-border transition-all hover:scale-105">
                <Lock className="mr-2 h-5 w-5" />
                Explore Courses
              </Button>
            </Link>
            <Link to="/certifications">
              <Button variant="outline" className="bg-transparent border border-cyber-red text-cyber-red hover:bg-cyber-red/10 px-8 py-6 text-lg rounded-md transition-all hover:scale-105">
                Get Certified
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse"></span>
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse delay-150"></span>
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
