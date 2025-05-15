
import CertificationsSection from "@/components/CertificationsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Certifications = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-cyber-blue">Certifications</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Gain industry-recognized credentials that validate your expertise and boost your career prospects in the cybersecurity field.
            </p>
          </motion.div>
        </div>
      </section>

      <CertificationsSection />
      
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Certification Process</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyber-blue text-xl font-bold">1</span>
                </div>
                <h3 className="text-white font-medium mb-2">Course Enrollment</h3>
                <p className="text-gray-400 text-sm">Register for a certification program</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyber-blue text-xl font-bold">2</span>
                </div>
                <h3 className="text-white font-medium mb-2">Training</h3>
                <p className="text-gray-400 text-sm">Complete the required training modules</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyber-blue text-xl font-bold">3</span>
                </div>
                <h3 className="text-white font-medium mb-2">Assessment</h3>
                <p className="text-gray-400 text-sm">Pass the certification examination</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyber-blue text-xl font-bold">4</span>
                </div>
                <h3 className="text-white font-medium mb-2">Certification</h3>
                <p className="text-gray-400 text-sm">Receive your industry-recognized certificate</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Why Get Certified with CFII?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400 mb-6">
              <li>Globally recognized certifications from leading cybersecurity organizations</li>
              <li>Expert-led training programs designed for real-world application</li>
              <li>Hands-on practical sessions with advanced cybersecurity tools</li>
              <li>Dedicated support throughout the certification process</li>
              <li>Post-certification career assistance and networking opportunities</li>
            </ul>

            <div className="text-center mt-8">
              <button className="cyber-button text-cyber-blue">
                Download Certification Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Certifications;
