
import { useState } from "react";
import { Shield, Book, Network, CircuitBoard, Grid2X2, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  outcomes: string[];
  slug: string;
}

const CoursesSection = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  
  const courses: Course[] = [
    {
      id: 1,
      title: "Ethical Hacking & Cybersecurity",
      description: "Learn advanced penetration testing techniques and vulnerability assessment.",
      icon: <Shield className="h-8 w-8 text-cyber-blue" />,
      duration: "12 Weeks",
      level: "Intermediate to Advanced",
      outcomes: ["CEH Certification", "Penetration Testing Skills", "Security Assessment"],
      slug: "ethical-hacking"
    },
    {
      id: 2,
      title: "Digital Forensics Investigation",
      description: "Master the techniques required to investigate digital crimes and collect evidence.",
      icon: <Book className="h-8 w-8 text-cyber-blue" />,
      duration: "10 Weeks",
      level: "All Levels",
      outcomes: ["Evidence Collection", "Data Recovery", "Legal Procedures"],
      slug: "digital-forensics"
    },
    {
      id: 3,
      title: "Network and Mobile Forensics",
      description: "Specialized training in network traffic analysis and mobile device investigation.",
      icon: <Network className="h-8 w-8 text-cyber-blue" />,
      duration: "8 Weeks",
      level: "Intermediate",
      outcomes: ["Network Analysis", "Mobile Evidence Recovery", "Case Building"],
      slug: "network-forensics"
    },
    {
      id: 4,
      title: "Incident Response & Threat Hunting",
      description: "Learn to detect, contain, and remediate cybersecurity incidents effectively.",
      icon: <CircuitBoard className="h-8 w-8 text-cyber-blue" />,
      duration: "6 Weeks",
      level: "Advanced",
      outcomes: ["Threat Detection", "Incident Containment", "Recovery Planning"],
      slug: "incident-response"
    },
    {
      id: 5,
      title: "Cyber Law & Compliance",
      description: "Understand legal frameworks, compliance requirements, and cyber law procedures.",
      icon: <Grid2X2 className="h-8 w-8 text-cyber-blue" />,
      duration: "4 Weeks",
      level: "All Levels",
      outcomes: ["Legal Knowledge", "Compliance Skills", "Case Documentation"],
      slug: "cyber-law"
    },
    {
      id: 6,
      title: "Advanced Security Certification",
      description: "Prepare for industry-recognized security certifications with expert guidance.",
      icon: <Award className="h-8 w-8 text-cyber-blue" />,
      duration: "16 Weeks",
      level: "Advanced",
      outcomes: ["Industry Certification", "Practical Skills", "Career Advancement"],
      slug: "advanced-certification"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-cyber-black-light relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-cyber-blue">Expert Courses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive training programs designed by industry experts to prepare you for the challenges of the digital security landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="glass-card rounded-lg p-6 h-full relative overflow-hidden"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: course.id * 0.1 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-cyber-blue/10 rounded-lg mr-3">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 flex-grow">{course.description}</p>
                
                <motion.div
                  className="bg-cyber-black/40 p-4 rounded-md border border-cyber-blue/10"
                  initial={{ opacity: 0, height: 0, padding: 0 }}
                  animate={{ 
                    opacity: hoveredCourse === course.id ? 1 : 0,
                    height: hoveredCourse === course.id ? 'auto' : 0,
                    padding: hoveredCourse === course.id ? 16 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-cyber-blue">{course.duration}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-cyber-blue">{course.level}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-400">Key Outcomes:</span>
                    </div>
                    <ul className="list-disc list-inside text-cyber-blue">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="ml-2">{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <Link to={`/course/${course.slug}`} className="mt-4 cyber-button w-full text-center text-cyber-blue block">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/courses" className="cyber-button px-8 py-3 text-cyber-green">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
