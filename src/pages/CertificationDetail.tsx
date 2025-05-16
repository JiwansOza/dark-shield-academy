
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge, Award, Clock, CheckCircle, FileCheck, BookOpen, Building, ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// Define a type for our certification data
interface CertificationDetail {
  id: number;
  name: string;
  organization: string;
  description: string;
  image: string;
  longDescription: string;
  benefits: string[];
  examDetails: {
    format: string;
    duration: string;
    passingScore: string;
    questions: string;
  };
  topics: string[];
  prerequisites: string[];
  validity: string;
  cost: string;
}

// Certification data repository
const certificationsData: Record<string, CertificationDetail> = {
  "ceh": {
    id: 1,
    name: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council Global Services (EGS)",
    description: "Internationally recognized certification for ethical hackers and penetration testers.",
    image: "/placeholder.svg",
    longDescription: "The Certified Ethical Hacker (CEH) certification is the most trusted ethical hacking certification and accomplishment recommended by employers globally. It is a respected certification that demonstrates to employers that you have the knowledge and skills required to be an ethical hacker or penetration tester.",
    benefits: [
      "Internationally recognized credential in ethical hacking",
      "Comprehensive understanding of hacking techniques",
      "Knowledge of security tools and countermeasures",
      "Access to EC-Council resources and community",
      "Career advancement opportunities in cybersecurity"
    ],
    examDetails: {
      format: "Multiple choice questions",
      duration: "4 hours",
      passingScore: "70%",
      questions: "125 questions"
    },
    topics: [
      "Introduction to Ethical Hacking",
      "Footprinting and Reconnaissance",
      "Scanning Networks",
      "Enumeration",
      "Vulnerability Analysis",
      "System Hacking",
      "Malware Threats",
      "Sniffing",
      "Social Engineering",
      "Denial-of-Service",
      "Session Hijacking",
      "Evading IDS, Firewalls, and Honeypots",
      "Hacking Web Servers",
      "Hacking Web Applications",
      "SQL Injection",
      "Hacking Wireless Networks",
      "Hacking Mobile Platforms",
      "IoT Hacking",
      "Cloud Computing",
      "Cryptography"
    ],
    prerequisites: [
      "Basic understanding of networking concepts",
      "Familiarity with security principles",
      "Experience with operating systems (Windows, Linux)"
    ],
    validity: "3 years (requires continuing education credits for renewal)",
    cost: "₹34,999 (includes exam voucher and training materials)"
  },
  "security-plus": {
    id: 2,
    name: "CompTIA Security+",
    organization: "CompTIA",
    description: "Foundational certification covering essential security concepts and best practices.",
    image: "/placeholder.svg",
    longDescription: "CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career. It establishes the core knowledge required of any cybersecurity role and provides a springboard to intermediate-level cybersecurity jobs.",
    benefits: [
      "Vendor-neutral security certification",
      "Globally recognized credential",
      "Fulfills DoD 8570 compliance requirements",
      "Foundation for advanced security certifications",
      "Validates hands-on troubleshooting skills"
    ],
    examDetails: {
      format: "Multiple choice and performance-based questions",
      duration: "90 minutes",
      passingScore: "750 (on a scale of 100-900)",
      questions: "Maximum of 90 questions"
    },
    topics: [
      "Threats, Attacks, and Vulnerabilities",
      "Technologies and Tools",
      "Architecture and Design",
      "Identity and Access Management",
      "Risk Management",
      "Cryptography and PKI"
    ],
    prerequisites: [
      "Network+ certification recommended but not required",
      "Minimum of 2 years experience in IT administration",
      "Basic understanding of security concepts"
    ],
    validity: "3 years (renewal requires continuing education or retaking the exam)",
    cost: "₹29,999 (includes exam voucher and training materials)"
  },
  "cfi": {
    id: 3,
    name: "Certified Forensic Investigator (CFI)",
    organization: "Indian Cyber Security Council",
    description: "Specialized certification for digital forensic investigation techniques.",
    image: "/placeholder.svg",
    longDescription: "The Certified Forensic Investigator (CFI) certification validates professionals in the field of digital forensics. It covers methodologies for investigating cybercrime, collecting digital evidence, and analyzing data from various sources including computers, networks, and mobile devices.",
    benefits: [
      "Recognition as a qualified forensic investigator",
      "Skills in collecting and analyzing digital evidence",
      "Knowledge of legal procedures for evidence handling",
      "Understanding of advanced forensic tools",
      "Credentials recognized by law enforcement and corporate investigators"
    ],
    examDetails: {
      format: "Multiple choice questions and practical exercises",
      duration: "3 hours",
      passingScore: "75%",
      questions: "100 questions and 2 practical scenarios"
    },
    topics: [
      "Digital Forensics Process",
      "Evidence Collection and Handling",
      "Computer Forensics",
      "File System Analysis",
      "Data Acquisition Techniques",
      "Memory Forensics",
      "Log Analysis",
      "Timeline Analysis",
      "Artifact Analysis",
      "Mobile Forensics",
      "Network Forensics",
      "Report Writing and Testimony",
      "Case Studies and Scenarios"
    ],
    prerequisites: [
      "Basic knowledge of operating systems and file systems",
      "Understanding of digital investigation principles",
      "Familiarity with common digital forensic tools"
    ],
    validity: "2 years (requires continuing education for renewal)",
    cost: "₹32,999 (includes exam voucher and training materials)"
  },
  "cnd": {
    id: 4,
    name: "Certified Network Defender (CND)",
    organization: "EC-Council Global Services (EGS)",
    description: "Certification focused on network security and defense mechanisms.",
    image: "/placeholder.svg",
    longDescription: "The Certified Network Defender (CND) certification program focuses on creating network security professionals who can protect, detect, and respond to network attacks. It covers network defense fundamentals, security policies, and various network defense tools and techniques.",
    benefits: [
      "Comprehensive understanding of network security",
      "Hands-on experience with defense tools",
      "Knowledge of network traffic analysis",
      "Skills in network vulnerability assessment",
      "Ability to implement security controls"
    ],
    examDetails: {
      format: "Multiple choice questions",
      duration: "4 hours",
      passingScore: "70%",
      questions: "100 questions"
    },
    topics: [
      "Network Security Fundamentals",
      "Network Defense Technologies",
      "Administrative Network Security",
      "Technical Network Security",
      "Network Traffic Monitoring",
      "Network Defense Tools",
      "Virtual Private Networks",
      "Wireless Network Defense",
      "Network Security Policies",
      "Physical Security",
      "Disaster Recovery",
      "Risk Management",
      "Network Security Controls",
      "Secure Network Design",
      "Network Authentication Systems"
    ],
    prerequisites: [
      "Basic networking knowledge",
      "Understanding of network security concepts",
      "Familiarity with common network protocols"
    ],
    validity: "3 years (requires continuing education credits for renewal)",
    cost: "₹36,999 (includes exam voucher and training materials)"
  },
  "cih": {
    id: 5,
    name: "Certified Incident Handler (CIH)",
    organization: "Indian Cyber Security Council",
    description: "Certification for professionals specializing in incident response and management.",
    image: "/placeholder.svg",
    longDescription: "The Certified Incident Handler (CIH) certification validates professionals who can effectively respond to and manage security incidents. It covers incident response methodologies, containment strategies, eradication techniques, and recovery procedures to maintain business continuity.",
    benefits: [
      "Recognition as a qualified incident handler",
      "Knowledge of incident response frameworks",
      "Skills in threat containment and eradication",
      "Understanding of business continuity principles",
      "Expertise in post-incident activities"
    ],
    examDetails: {
      format: "Multiple choice questions and scenario-based questions",
      duration: "3 hours",
      passingScore: "70%",
      questions: "100 questions"
    },
    topics: [
      "Incident Response Concepts",
      "Incident Response Process",
      "Incident Preparation",
      "Detection and Analysis",
      "Containment Strategies",
      "Eradication Techniques",
      "Recovery Methods",
      "Post-Incident Activities",
      "Incident Documentation",
      "Communication During Incidents",
      "Threat Intelligence",
      "Incident Response Tools",
      "Legal and Regulatory Considerations",
      "Incident Response Planning"
    ],
    prerequisites: [
      "Basic understanding of cybersecurity concepts",
      "Knowledge of network and system administration",
      "Familiarity with security monitoring tools"
    ],
    validity: "2 years (requires continuing education for renewal)",
    cost: "₹30,999 (includes exam voucher and training materials)"
  }
};

const CertificationDetail = () => {
  const { certId } = useParams();
  const certification = certId ? certificationsData[certId] : null;

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [certId]);

  if (!certification) {
    return (
      <div className="min-h-screen bg-cyber-black">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-3xl text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Certification not found
          </motion.h1>
          <motion.p 
            className="text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The certification you're looking for doesn't seem to exist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="mt-8 bg-cyber-blue text-white hover:bg-cyber-blue/80" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  const slideIn = {
    initial: { opacity: 0, x: -30 },
    animate: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <section className="py-16 bg-cyber-black-light relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        
        {/* Animated binary code particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-cyber-blue text-opacity-30 text-xs font-mono"
                initial={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`,
                  opacity: 0.3
                }}
                animate={{ 
                  top: `${Math.random() * 100}%`,
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5 + Math.random() * 10,
                  ease: "linear"
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-2/3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 }
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="p-2 bg-cyber-blue/10 rounded-lg mr-4 cyber-glow"
                  variants={fadeIn}
                  custom={1}
                >
                  <Badge className="h-8 w-8 text-cyber-blue" />
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold text-white"
                  variants={slideIn}
                  custom={2}
                >
                  {certification.name}
                </motion.h1>
              </div>
              
              <motion.p 
                className="text-gray-400 text-xl mb-4"
                variants={fadeIn}
                custom={3}
              >
                Issued by: <span className="text-cyber-blue">{certification.organization}</span>
              </motion.p>
              
              <motion.p 
                className="text-gray-300 mb-6"
                variants={fadeIn}
                custom={4}
              >
                {certification.longDescription}
              </motion.p>
              
              <motion.div 
                variants={fadeIn} 
                custom={5}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-cyber-green text-black hover:bg-cyber-green/90 px-8 py-6 text-lg">
                  Get Certified
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/3 p-6 mt-8 lg:mt-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-cyber-black/70 p-8 rounded-lg border border-cyber-blue/20 text-center backdrop-blur-lg cyber-border">
                <motion.div 
                  className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Award className="h-10 w-10 text-cyber-blue" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Certification Details</h3>
                <div className="space-y-3 text-left">
                  <motion.div 
                    className="flex justify-between"
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={1}
                  >
                    <span className="text-gray-400">Fee:</span>
                    <span className="text-cyber-blue font-medium">{certification.cost}</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={2}
                  >
                    <span className="text-gray-400">Validity:</span>
                    <span className="text-white">{certification.validity}</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={3}
                  >
                    <span className="text-gray-400">Format:</span>
                    <span className="text-white">{certification.examDetails.format}</span>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={4}
                  >
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{certification.examDetails.duration}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Certification <span className="text-cyber-blue">Benefits</span></h2>
            <div className="w-24 h-1 bg-cyber-blue mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="glass-card p-8 rounded-lg backdrop-blur-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certification.benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-cyber-green mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Exam Information */}
      <section className="py-16 bg-cyber-black-light relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              initial={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                rotate: Math.random() * 360
              }}
              animate={{ 
                top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                rotate: [0, 360]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 15 + Math.random() * 20,
                ease: "linear"
              }}
            >
              <Shield className="h-16 w-16 text-cyber-blue" />
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.h2 
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Exam <span className="text-cyber-blue">Information</span>
              </motion.h2>
              
              <motion.div 
                className="glass-card p-8 rounded-lg mb-8 hover:shadow-lg hover:shadow-cyber-blue/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-cyber-blue mb-2">Format</h3>
                    <p className="text-gray-300">{certification.examDetails.format}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-cyber-blue mb-2">Duration</h3>
                    <p className="text-gray-300">{certification.examDetails.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-cyber-blue mb-2">Questions</h3>
                    <p className="text-gray-300">{certification.examDetails.questions}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-cyber-blue mb-2">Passing Score</h3>
                    <p className="text-gray-300">{certification.examDetails.passingScore}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-card p-8 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
                <ul className="space-y-2">
                  {certification.prerequisites.map((prerequisite, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="h-2 w-2 bg-cyber-blue rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-300">{prerequisite}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div>
              <motion.h2 
                className="text-3xl font-bold text-white mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Exam <span className="text-cyber-blue">Topics</span>
              </motion.h2>
              
              <motion.div 
                className="glass-card p-8 rounded-lg hover:shadow-lg hover:shadow-cyber-blue/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ul className="grid gap-3">
                  {certification.topics.map((topic, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    >
                      <FileCheck className="h-5 w-5 text-cyber-blue mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Preparation */}
      <section className="py-16 bg-cyber-black relative">
        <div className="absolute inset-0 bg-matrix-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Certification <span className="text-cyber-blue">Preparation</span></h2>
            <div className="w-32 h-1 bg-cyber-blue mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="glass-card p-6 rounded-lg cyber-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Training Course</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Our comprehensive training program covers all exam topics with hands-on exercises and practice tests.
              </p>
              <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90 group">
                View Course Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-lg cyber-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Boot Camp</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Intensive 5-day training with mock exams and exam-focused instruction for last-minute preparation.
              </p>
              <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90 group">
                Boot Camp Schedule
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="glass-card p-6 rounded-lg cyber-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-cyber-blue/10 rounded-full mr-4">
                  <Building className="h-6 w-6 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Enterprise Training</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Customized training solutions for organizations looking to certify multiple team members.
              </p>
              <Button className="w-full bg-cyber-blue hover:bg-cyber-blue/90 group">
                Enterprise Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-cyber-black-light relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get <span className="text-cyber-blue">Certified?</span></h2>
            <p className="text-gray-400 mb-8">
              Take the next step in your cybersecurity career with the {certification.name} certification. Our expert instructors and comprehensive training will prepare you for exam success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-cyber-green text-black hover:bg-cyber-green/90 px-8 py-3">
                  Enroll Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-cyber-blue/20 text-cyber-blue hover:bg-cyber-blue/30 px-8 py-3">
                  Download Syllabus
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CertificationDetail;
