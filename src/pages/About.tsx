
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Building, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      
      <section className="py-12 bg-cyber-black-light relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-cyber-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Director" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-cyber-blue mb-3">Director & Chief Instructor</p>
                <p className="text-gray-400 text-sm mb-4">Former cyber advisor to government agencies with over 20 years of experience in digital forensics.</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-cyber-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Technical Head" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Priya Sharma</h3>
                <p className="text-cyber-blue mb-3">Technical Head</p>
                <p className="text-gray-400 text-sm mb-4">Certified ethical hacker and security researcher specializing in malware analysis and reverse engineering.</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-cyber-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Academic Dean" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Prof. Amit Verma</h3>
                <p className="text-cyber-blue mb-3">Academic Dean</p>
                <p className="text-gray-400 text-sm mb-4">Former university professor with extensive experience in cybersecurity education and curriculum development.</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <Users className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Team</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Our faculty comprises industry veterans, certified security professionals, and academic experts dedicated to providing world-class training.
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Certified instructors</li>
                <li>Industry practitioners</li>
                <li>Research specialists</li>
                <li>Academic professionals</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <Building className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Facilities</h3>
              </div>
              <p className="text-gray-400 mb-4">
                State-of-the-art training centers equipped with advanced technology and specialized forensic laboratories.
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Digital forensic labs</li>
                <li>Cybersecurity SOC</li>
                <li>Hardware hacking lab</li>
                <li>Mobile forensics station</li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Methodology</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Holistic approach combining theoretical knowledge with practical applications and real-world case studies.
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Hands-on training</li>
                <li>Case-based learning</li>
                <li>Industry internships</li>
                <li>Continuous assessment</li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Partners & Collaborations</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 p-6 rounded-lg flex items-center justify-center">
                <p className="text-cyber-blue font-semibold">EC-Council</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg flex items-center justify-center">
                <p className="text-cyber-blue font-semibold">CompTIA</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg flex items-center justify-center">
                <p className="text-cyber-blue font-semibold">Indian Cyber Security Council</p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg flex items-center justify-center">
                <p className="text-cyber-blue font-semibold">NASSCOM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
