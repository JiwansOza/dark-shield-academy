
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center p-6 bg-cyber-blue/10 rounded-full mb-8">
            <Shield className="h-16 w-16 text-cyber-blue" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-cyber-blue mb-6">Page Not Found</h2>
          
          <p className="text-xl text-gray-400 max-w-xl mb-10">
            The page you are looking for might have been moved, deleted, or never existed.
          </p>
          
          <Link to="/">
            <Button className="bg-cyber-blue hover:bg-cyber-blue-dark text-white px-8 py-6 text-lg rounded-md cyber-border">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
