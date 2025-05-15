
import { Link } from "react-router-dom";
import { Shield, Linkedin, Instagram, Youtube, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-black-light border-t border-cyber-blue/20 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyber-blue" />
              <span className="text-xl font-bold text-white">CFII</span>
            </Link>
            <p className="text-gray-400 mb-6">
              India's trusted institution for cyber forensics, cybersecurity, and digital crime investigation training.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@cfii.com" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyber-blue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyber-blue transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-400 hover:text-cyber-blue transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyber-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyber-blue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyber-blue transition-colors">Ethical Hacking</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyber-blue transition-colors">Digital Forensics</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyber-blue transition-colors">Network Forensics</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyber-blue transition-colors">Incident Response</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyber-blue transition-colors">All Courses</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Cyber Street, Tech Park</p>
              <p className="mb-2">New Delhi, India - 110001</p>
              <p className="mb-2">Phone: +91 98765 43210</p>
              <p className="mb-2">Email: info@cfii.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Cyber Forensic Institute of India. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-cyber-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-cyber-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
