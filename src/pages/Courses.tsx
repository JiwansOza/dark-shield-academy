
import CoursesSection from "@/components/CoursesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, BookOpen, Users } from "lucide-react";

const Courses = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-cyber-blue">Courses</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive training programs designed by industry experts to prepare you for the challenges of the digital security landscape.
            </p>
          </motion.div>
        </div>
      </section>

      <CoursesSection />
      
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Expert Instructors</h3>
              </div>
              <p className="text-gray-400">
                Learn from seasoned professionals with extensive experience in cybersecurity operations, digital forensics, and threat intelligence.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Practical Learning</h3>
              </div>
              <p className="text-gray-400">
                Gain hands-on experience with real-world scenarios, case studies, and lab exercises designed to build practical skills.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <Users className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Industry Network</h3>
              </div>
              <p className="text-gray-400">
                Connect with fellow professionals, join our alumni network, and access exclusive job opportunities in the cybersecurity field.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Course Formats</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cyber-black/40 p-6 rounded-lg border border-cyber-blue/10">
                <h3 className="text-xl font-bold text-cyber-blue mb-3">In-Person Training</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                  <li>Immersive classroom experience</li>
                  <li>Direct interaction with instructors</li>
                  <li>Access to physical lab equipment</li>
                  <li>Networking with peers</li>
                </ul>
                <p className="text-white font-medium">Duration: Full-time & Part-time options</p>
              </div>
              
              <div className="bg-cyber-black/40 p-6 rounded-lg border border-cyber-blue/10">
                <h3 className="text-xl font-bold text-cyber-blue mb-3">Online Live</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                  <li>Real-time virtual classrooms</li>
                  <li>Interactive Q&A sessions</li>
                  <li>Remote lab access</li>
                  <li>Digital study materials</li>
                </ul>
                <p className="text-white font-medium">Duration: Flexible scheduling</p>
              </div>
              
              <div className="bg-cyber-black/40 p-6 rounded-lg border border-cyber-blue/10">
                <h3 className="text-xl font-bold text-cyber-blue mb-3">Self-Paced</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                  <li>Learn at your own speed</li>
                  <li>On-demand video content</li>
                  <li>24/7 virtual lab environment</li>
                  <li>Forum support</li>
                </ul>
                <p className="text-white font-medium">Duration: Up to 12 months access</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
            <button className="cyber-button text-cyber-green px-8 py-4">
              Apply Now
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
