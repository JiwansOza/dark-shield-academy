
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you shortly.",
        duration: 5000,
      });
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-cyber-black relative">
      <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center p-2 bg-cyber-blue/10 rounded-full mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Mail className="h-6 w-6 text-cyber-blue" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in <span className="text-cyber-blue">Touch</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions about our programs? Reach out to our team for personalized assistance and information.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="glass-card rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Full Name
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="bg-cyber-black/50 border-cyber-blue/20 text-white placeholder:text-gray-500 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-cyber-black/50 border-cyber-blue/20 text-white placeholder:text-gray-500 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="bg-cyber-black/50 border-cyber-blue/20 text-white placeholder:text-gray-500 focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue transition-all"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full rounded-md bg-cyber-black/50 border border-cyber-blue/20 px-3 py-2 text-white placeholder:text-gray-500 focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-all"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cyber-blue hover:bg-cyber-blue-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="p-3 bg-cyber-blue/10 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-gray-400">
                      123 Cyber Street, Tech Park<br />
                      New Delhi, India - 110001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-cyber-blue/10 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-gray-400">
                      info@cfii.com<br />
                      admissions@cfii.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-cyber-blue/10 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-gray-400">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="glass-card rounded-lg p-2 h-64 mb-4">
              <div className="w-full h-full bg-cyber-black/50 rounded flex items-center justify-center">
                <p className="text-cyber-blue text-center">
                  Interactive Map<br />
                  (Google Maps Embed would go here)
                </p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-400 mb-2">Operating Hours:</p>
              <p className="text-white">Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-white">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
