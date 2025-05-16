
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Book, Network, CircuitBoard, Grid2X2, Award, Calendar, UserCircle, Clock, Target, CheckCircle, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Define a type for our course data
interface CourseDetail {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  level: string;
  outcomes: string[];
  longDescription: string;
  curriculum: {
    title: string;
    items: string[];
  }[];
  prerequisites: string[];
  instructor: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
  schedule: string[];
  price: string;
}

// Course data repository
const coursesData: Record<string, CourseDetail> = {
  "ethical-hacking": {
    id: 1,
    title: "Ethical Hacking & Cybersecurity",
    description: "Learn advanced penetration testing techniques and vulnerability assessment.",
    icon: <Shield className="h-8 w-8 text-cyber-blue" />,
    duration: "12 Weeks",
    level: "Intermediate to Advanced",
    outcomes: ["CEH Certification", "Penetration Testing Skills", "Security Assessment"],
    longDescription: "This comprehensive course provides in-depth knowledge of ethical hacking methodologies, tools, and techniques used by security professionals to identify and address vulnerabilities in systems and networks. You'll learn how to think like a hacker while maintaining ethical standards and legal compliance.",
    curriculum: [
      {
        title: "Introduction to Ethical Hacking",
        items: ["Ethical Hacking Fundamentals", "Legal Framework", "Reconnaissance Techniques"]
      },
      {
        title: "Vulnerability Assessment",
        items: ["Scanning Methodologies", "Vulnerability Identification", "Risk Assessment"]
      },
      {
        title: "Exploitation Techniques",
        items: ["Exploitation Frameworks", "Password Attacks", "Client-Side Attacks"]
      },
      {
        title: "Post-Exploitation",
        items: ["Privilege Escalation", "Maintaining Access", "Covering Tracks"]
      },
      {
        title: "Defense Strategies",
        items: ["Building Secure Systems", "Incident Response", "Security Hardening"]
      }
    ],
    prerequisites: [
      "Basic understanding of networking concepts",
      "Familiarity with operating systems (Windows, Linux)",
      "Fundamental programming knowledge"
    ],
    instructor: {
      name: "Dr. Amit Sharma",
      title: "Chief Security Researcher",
      bio: "Dr. Sharma has over 15 years of experience in cybersecurity and has conducted security audits for major financial institutions and government agencies.",
      image: "/placeholder.svg"
    },
    schedule: [
      "Weekday Batch: Mon/Wed/Fri 6:00 PM - 8:00 PM",
      "Weekend Batch: Sat/Sun 10:00 AM - 2:00 PM"
    ],
    price: "₹49,999"
  },
  "digital-forensics": {
    id: 2,
    title: "Digital Forensics Investigation",
    description: "Master the techniques required to investigate digital crimes and collect evidence.",
    icon: <Book className="h-8 w-8 text-cyber-blue" />,
    duration: "10 Weeks",
    level: "All Levels",
    outcomes: ["Evidence Collection", "Data Recovery", "Legal Procedures"],
    longDescription: "This course equips students with the skills needed to investigate digital incidents, collect and preserve digital evidence, and understand the legal aspects of digital forensics. Students will work with industry-standard forensic tools and learn methodologies used by professionals in the field.",
    curriculum: [
      {
        title: "Fundamentals of Digital Forensics",
        items: ["Introduction to Digital Forensics", "Legal Considerations", "Chain of Custody"]
      },
      {
        title: "Evidence Collection & Handling",
        items: ["Digital Evidence Types", "Evidence Collection Procedures", "Evidence Preservation"]
      },
      {
        title: "Disk & File System Analysis",
        items: ["Storage Media Types", "File System Structures", "Data Recovery Techniques"]
      },
      {
        title: "Memory & Log Analysis",
        items: ["Memory Acquisition", "Memory Forensics", "Log Analysis Techniques"]
      },
      {
        title: "Case Investigation",
        items: ["Investigation Methodology", "Case Documentation", "Report Writing"]
      }
    ],
    prerequisites: [
      "Basic IT knowledge",
      "Understanding of operating systems",
      "No prior forensic experience required"
    ],
    instructor: {
      name: "Priya Mehta",
      title: "Forensic Analyst & Consultant",
      bio: "Priya has worked with law enforcement agencies and corporate investigation teams for over a decade, specializing in digital evidence analysis.",
      image: "/placeholder.svg"
    },
    schedule: [
      "Weekday Batch: Tue/Thu 6:30 PM - 9:00 PM",
      "Weekend Batch: Saturday 9:30 AM - 4:30 PM"
    ],
    price: "₹39,999"
  },
  "network-forensics": {
    id: 3,
    title: "Network and Mobile Forensics",
    description: "Specialized training in network traffic analysis and mobile device investigation.",
    icon: <Network className="h-8 w-8 text-cyber-blue" />,
    duration: "8 Weeks",
    level: "Intermediate",
    outcomes: ["Network Analysis", "Mobile Evidence Recovery", "Case Building"],
    longDescription: "This specialized course focuses on the collection and analysis of network traffic and mobile device data in forensic investigations. Students will learn advanced techniques for extracting evidence from network communications and mobile devices while maintaining forensic integrity.",
    curriculum: [
      {
        title: "Network Forensics Fundamentals",
        items: ["Network Traffic Capture", "Protocol Analysis", "Network Evidence Collection"]
      },
      {
        title: "Network Traffic Analysis",
        items: ["Packet Analysis", "Network Flow Analysis", "Traffic Reconstruction"]
      },
      {
        title: "Mobile Device Forensics",
        items: ["Mobile Device Architecture", "Data Extraction Methods", "App Analysis"]
      },
      {
        title: "Cloud & IoT Forensics",
        items: ["Cloud Storage Investigation", "IoT Device Analysis", "Remote Evidence Collection"]
      },
      {
        title: "Case Studies & Practical Applications",
        items: ["Real-world Scenarios", "Evidence Correlation", "Forensic Reporting"]
      }
    ],
    prerequisites: [
      "Basic networking knowledge",
      "Understanding of mobile technologies",
      "Digital forensics fundamentals"
    ],
    instructor: {
      name: "Rajesh Kumar",
      title: "Network Security Specialist",
      bio: "Rajesh has specialized in network security and forensics for 12 years, working with telecom providers and security firms on complex network investigations.",
      image: "/placeholder.svg"
    },
    schedule: [
      "Weekday Batch: Mon/Wed 7:00 PM - 9:30 PM",
      "Weekend Batch: Sunday 10:00 AM - 5:00 PM"
    ],
    price: "₹44,999"
  },
  "incident-response": {
    id: 4,
    title: "Incident Response & Threat Hunting",
    description: "Learn to detect, contain, and remediate cybersecurity incidents effectively.",
    icon: <CircuitBoard className="h-8 w-8 text-cyber-blue" />,
    duration: "6 Weeks",
    level: "Advanced",
    outcomes: ["Threat Detection", "Incident Containment", "Recovery Planning"],
    longDescription: "This advanced course teaches professionals how to respond to cybersecurity incidents, contain threats, and develop recovery strategies. Students will learn threat hunting techniques, incident response procedures, and how to establish effective security operations.",
    curriculum: [
      {
        title: "Incident Response Fundamentals",
        items: ["IR Framework & Planning", "Incident Classification", "Response Team Structure"]
      },
      {
        title: "Threat Detection & Analysis",
        items: ["Threat Intelligence", "IOC Identification", "Malware Analysis"]
      },
      {
        title: "Incident Containment & Eradication",
        items: ["Containment Strategies", "Evidence Collection", "Threat Removal"]
      },
      {
        title: "Recovery & Lessons Learned",
        items: ["System Recovery", "Business Continuity", "Post-Incident Analysis"]
      },
      {
        title: "Threat Hunting Techniques",
        items: ["Proactive Detection", "Threat Hunting Tools", "Advanced Persistent Threats"]
      }
    ],
    prerequisites: [
      "Network security knowledge",
      "Understanding of common attack vectors",
      "Security monitoring experience"
    ],
    instructor: {
      name: "Vikram Singh",
      title: "Security Operations Lead",
      bio: "Vikram has led incident response teams for several Fortune 500 companies and specializes in threat hunting and advanced persistent threat detection.",
      image: "/placeholder.svg"
    },
    schedule: [
      "Weekday Batch: Tue/Thu 6:00 PM - 9:00 PM",
      "Weekend Batch: Sat 10:00 AM - 4:00 PM"
    ],
    price: "₹54,999"
  },
  "cyber-law": {
    id: 5,
    title: "Cyber Law & Compliance",
    description: "Understand legal frameworks, compliance requirements, and cyber law procedures.",
    icon: <Grid2X2 className="h-8 w-8 text-cyber-blue" />,
    duration: "4 Weeks",
    level: "All Levels",
    outcomes: ["Legal Knowledge", "Compliance Skills", "Case Documentation"],
    longDescription: "This course provides comprehensive knowledge of cyber laws, regulations, and compliance requirements relevant to digital investigations and cybersecurity. Students will learn about legal frameworks, evidence handling requirements, and compliance standards in various jurisdictions.",
    curriculum: [
      {
        title: "Introduction to Cyber Law",
        items: ["IT Act Overview", "Digital Crime Categories", "Legal Terminology"]
      },
      {
        title: "Evidence & Admissibility",
        items: ["Digital Evidence Standards", "Chain of Custody Requirements", "Court Presentation"]
      },
      {
        title: "Privacy & Data Protection",
        items: ["Privacy Laws", "Data Protection Regulations", "Compliance Requirements"]
      },
      {
        title: "International Cyber Law",
        items: ["Cross-border Investigations", "International Treaties", "Jurisdiction Challenges"]
      },
      {
        title: "Case Studies & Mock Trials",
        items: ["Real Case Analysis", "Documentation Practice", "Expert Testimony"]
      }
    ],
    prerequisites: [
      "Basic understanding of legal concepts",
      "Interest in cybersecurity",
      "No prior legal experience required"
    ],
    instructor: {
      name: "Adv. Meera Nair",
      title: "Cyber Law Specialist",
      bio: "Advocate Meera is a practicing cyber law attorney with experience in handling digital evidence cases and advising on compliance matters for technology companies.",
      image: "/placeholder.svg"
    },
    schedule: [
      "Weekday Batch: Mon/Wed 6:00 PM - 8:00 PM",
      "Weekend Batch: Sun 10:00 AM - 2:00 PM"
    ],
    price: "₹29,999"
  },
  "advanced-certification": {
    id: 6,
    title: "Advanced Security Certification",
    description: "Prepare for industry-recognized security certifications with expert guidance.",
    icon: <Award className="h-8 w-8 text-cyber-blue" />,
    duration: "16 Weeks",
    level: "Advanced",
    outcomes: ["Industry Certification", "Practical Skills", "Career Advancement"],
    longDescription: "This intensive program prepares candidates for prestigious industry certifications like CISSP, CISM, and CEH. With expert guidance, comprehensive study materials, and hands-on practice labs, students will develop the knowledge and skills required to pass these certification exams.",
    curriculum: [
      {
        title: "Security & Risk Management",
        items: ["Security Governance", "Risk Management", "Security Controls"]
      },
      {
        title: "Asset Security & Engineering",
        items: ["Data Classification", "Security Architecture", "Cryptography"]
      },
      {
        title: "Communications & Network Security",
        items: ["Secure Network Architecture", "Secure Communication Channels", "Network Attacks"]
      },
      {
        title: "Identity & Access Management",
        items: ["Authentication Systems", "Access Control Models", "Identity Management"]
      },
      {
        title: "Security Assessment & Testing",
        items: ["Vulnerability Management", "Penetration Testing", "Security Auditing"]
      }
    ],
    prerequisites: [
      "Minimum 3 years IT/security experience",
      "Basic security knowledge",
      "Commitment to intensive study"
    ],
    instructor: {
      name: "Sanjay Verma",
      title: "Principal Security Architect",
      bio: "Sanjay holds multiple advanced security certifications and has trained over 1000 professionals in his 15-year career as a security architect and trainer.",
      image: "/placeholder.svg"
    },
    schedule: [
      "Weekday Batch: Mon/Wed/Fri 7:00 PM - 9:00 PM",
      "Weekend Batch: Sat/Sun 9:00 AM - 1:00 PM"
    ],
    price: "₹89,999"
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseId ? coursesData[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-cyber-black">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl text-white">Course not found</h1>
          <p className="text-gray-400 mt-4">The course you're looking for doesn't seem to exist.</p>
          <Button className="mt-8 bg-cyber-blue text-white hover:bg-cyber-blue/80" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-cyber-black-light relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-gray-400 text-xl mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-cyber-black/40 px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-cyber-blue mr-2" />
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex items-center bg-cyber-black/40 px-4 py-2 rounded-full">
                  <Target className="h-5 w-5 text-cyber-blue mr-2" />
                  <span className="text-white">{course.level}</span>
                </div>
                <div className="flex items-center bg-cyber-black/40 px-4 py-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-cyber-blue mr-2" />
                  <span className="text-white">Online & Offline</span>
                </div>
              </div>
              
              <Button className="bg-cyber-green text-black hover:bg-cyber-green/90 px-8 py-6 text-lg">
                Enroll Now
              </Button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/3 mb-8 lg:mb-0 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-cyber-black/70 p-8 rounded-lg border border-cyber-blue/20 text-center">
                <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Course Fee</h3>
                <p className="text-cyber-blue text-3xl font-bold mb-4">{course.price}</p>
                <p className="text-gray-400 mb-6">Includes course materials, lab access, and certification exam fee</p>
                <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Course Description */}
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Course Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-8">{course.longDescription}</p>
            
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Key Outcomes</h3>
            <ul className="grid md:grid-cols-3 gap-4 mb-8">
              {course.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyber-green mr-2 flex-shrink-0 mt-1" />
                  <span className="text-white">{outcome}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-bold text-cyber-blue mb-4">Prerequisites</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8 pl-4">
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Curriculum */}
      <section className="py-16 bg-cyber-black-light relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Course <span className="text-cyber-blue">Curriculum</span></h2>
          
          <div className="space-y-6">
            {course.curriculum.map((module, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-cyber-blue mb-3">Module {index + 1}: {module.title}</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-cyber-blue rounded-full mr-3"></div>
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instructor */}
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Your <span className="text-cyber-blue">Instructor</span></h2>
          
          <div className="glass-card p-8 rounded-lg flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-blue/20 bg-cyber-black/50 flex items-center justify-center">
                <UserCircle className="h-32 w-32 text-cyber-blue/50" />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-2xl font-bold text-white mb-1">{course.instructor.name}</h3>
              <p className="text-cyber-blue mb-4">{course.instructor.title}</p>
              <p className="text-gray-300 leading-relaxed">{course.instructor.bio}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schedule & Enrollment */}
      <section className="py-16 bg-cyber-black-light relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Schedule & <span className="text-cyber-blue">Enrollment</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-cyber-blue mr-3" />
                <h3 className="text-xl font-bold text-white">Upcoming Batches</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                {course.schedule.map((schedule, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-cyber-blue rounded-full mr-3 mt-2"></div>
                    <span>{schedule}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Enrollment Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-cyber-blue/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-cyber-blue font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Apply Online</h4>
                    <p className="text-gray-400 text-sm">Complete the online application form</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyber-blue/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-cyber-blue font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Assessment</h4>
                    <p className="text-gray-400 text-sm">Complete a brief technical assessment (if applicable)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyber-blue/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-cyber-blue font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Payment</h4>
                    <p className="text-gray-400 text-sm">Complete fee payment (installment options available)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyber-blue/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-cyber-blue font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Course Access</h4>
                    <p className="text-gray-400 text-sm">Receive course materials and start learning</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-cyber-green text-black hover:bg-cyber-green/90 px-8 py-6 text-lg">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
