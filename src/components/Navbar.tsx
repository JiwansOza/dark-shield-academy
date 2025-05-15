
import * as React from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-cyber-black/80 border-b border-cyber-red/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyber-red" />
            <span className="text-xl font-bold tracking-tight text-white">CFII</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyber-red transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-white hover:text-cyber-red transition-colors">
              Courses
            </Link>
            <Link to="/certifications" className="text-white hover:text-cyber-red transition-colors">
              Certifications
            </Link>
            <Link to="/about" className="text-white hover:text-cyber-red transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-cyber-red transition-colors">
              Contact
            </Link>
            <Link
              to="/courses"
              className="cyber-button text-cyber-red"
            >
              Get Certified
            </Link>
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-black border-b border-cyber-red/20">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-cyber-red transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/courses" className="text-white hover:text-cyber-red transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                Courses
              </Link>
              <Link to="/certifications" className="text-white hover:text-cyber-red transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                Certifications
              </Link>
              <Link to="/about" className="text-white hover:text-cyber-red transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-cyber-red transition-colors py-2"
                onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link
                to="/courses"
                className="cyber-button text-cyber-red mb-2"
                onClick={() => setIsOpen(false)}
              >
                Get Certified
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
