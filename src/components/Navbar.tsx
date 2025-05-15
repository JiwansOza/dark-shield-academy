
import * as React from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navbarClasses = `sticky top-0 z-50 backdrop-blur-lg ${
    scrolled 
      ? "bg-cyber-black/95 border-b border-cyber-red/20 shadow-lg" 
      : "bg-cyber-black/80 border-b border-transparent"
  } transition-all duration-300 ease-in-out`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Shield className="h-8 w-8 text-cyber-red" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-white">CFII</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {["Home", "Courses", "Certifications", "About", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link 
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className="relative px-3 py-2 text-white hover:text-cyber-red transition-colors group"
                >
                  <span>{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-red transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link
                to="/courses"
                className="cyber-button text-cyber-red ml-3"
              >
                Get Certified
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-cyber-black border-b border-cyber-red/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-2">
              <motion.div className="flex flex-col space-y-4">
                {["Home", "Courses", "Certifications", "About", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                      className="text-white hover:text-cyber-red transition-colors py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/courses"
                    className="cyber-button text-cyber-red mb-2 w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Certified
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
