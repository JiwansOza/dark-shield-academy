
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact <span className="text-cyber-blue">Us</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reach out to our team for inquiries, admissions information, or to schedule a visit to our campus.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-cyber-blue mb-2">How can I enroll in a course?</h3>
                <p className="text-gray-400">
                  You can enroll through our online application portal, by visiting our campus in person, or by contacting our admissions team via phone or email.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-cyber-blue mb-2">What are the payment options available?</h3>
                <p className="text-gray-400">
                  We accept various payment methods including credit/debit cards, net banking, UPI, and installment plans for eligible candidates.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-cyber-blue mb-2">Do you offer scholarships?</h3>
                <p className="text-gray-400">
                  Yes, we offer merit-based scholarships and financial assistance programs for deserving candidates. Contact our admissions office for details.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-cyber-blue mb-2">Is there a placement assistance program?</h3>
                <p className="text-gray-400">
                  Absolutely! We have an active placement cell that connects our students with leading companies in the cybersecurity industry.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Visit Our Campus</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Experience our state-of-the-art facilities and meet with our expert instructors. Schedule a campus tour today!
            </p>
            <button className="cyber-button text-cyber-blue px-8 py-3">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
