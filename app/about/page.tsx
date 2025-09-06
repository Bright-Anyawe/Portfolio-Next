"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import { PersonalImage } from "@/app/components/PersonalImage";
import "@/app/styles/about.css"; // Keep your custom styles if needed
import TypewriterComponent from "@/app/components/TypeWriter";
import QuoteButton from "@/app/components/QuoteButton";

import {
  FaGraduationCap,
  FaBriefcase,
  FaShieldAlt,
  FaLock,
  FaUserCheck,
} from "react-icons/fa";

const educationData = [
  {
    institution: "High School Graduate",
    degree: "Expert in IT",
    years: "2021 - 2023",
    description:
      "Focused on Network, Security, Excel, database principles, algorithms, and data structures. Completed a final year project on Css and Html Landing page.",
  },
  {
    institution: "Online Course Platform-The Odin Project",
    degree: "Advanced Frontend Development",
    years: "2023-present",
    description:
      "Acquired Knowledge and Skill in Javascript, React, Next.js, state management, and modern CSS frameworks like Tailwind.",
  },
];

const experienceData = [
  {
    company: "Yottanet Technologies",
    role: "Frontend Free lancer",
    years: "June, 2023 - October,2023",
    description: [
      "Developed and transform Figma design into responsive and functional user interfaces for  client using React, Tailwind and CSS3.",
      "Integrated third-party APIs and managed application state effectively.",
      "Built projects like Todo List apps, Website builder, E-commerce sites, and CV Builders.",
    ],
  
  },
  {
    company: "Internship For Universal Phoenix Group(UPG)",
    role: "Frontend Developer",
    years: "March, 2024 - May,2024",
    description: [
      "Improve old toast component into modern responsive and animated notification by exploring new technologies and refine skills.",
      "Implement a function that allows user to update the Roadmap and reflect in real-time ",
    ],
    
  },
  {
    company: "Personal Projects",
    role: "Developer",
    years: "Ongoing",
    description: [
      "Continuously building projects to explore new technologies and refine skills.",
      "Built projects like Todo List apps, Church Website, Website builder prototype,  E-commerce sites, and CV Builder.",

    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<
    "about" | "education" | "experience" | "security"
  >("about");

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Stagger delay based on index
        duration: 0.4,
      },
    }),
  };

  return (
    <section className="container mx-auto h-full py-12 xl:py-24 px-4  ">
      {" "}
      {/* Added horizontal padding */}
      <div className="flex flex-col xl:flex-row items-start justify-between gap-6">
      
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            width: '100%',
            maxWidth: '300px',
            marginLeft: 'auto',
            marginRight: 'auto',
            order: 2,
            marginBottom: '2rem',
            top: '6rem',
            alignSelf: 'center',
          }}
        >
          <PersonalImage />
        </motion.div>

        {/* Text & Tabs Section */}
        <div className="flex-1 text-center xl:text-left order-1 xl:order-none max-w-2xl">
          {" "}
          {/* Increased max-width */}
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="GetToKnow h1 mb-4 font-medium text-4xl md:text-5xl" // Responsive font size
          >
            Get to know <br />{" "}
            <span className="text-accent text-red-500">Anyawe :)</span>
          </motion.h1>
          {/* Typewriter */}
          <div className="mb-8">
            {" "}
            {/* Added margin bottom */}
            <TypewriterComponent />
          </div>
          {/* Tabs Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center xl:justify-start gap-4 mb-8 border-b border-gray-700 pb-4"
          >
            <TabButton
              label="About Me"
              isActive={activeTab === "about"}
              onClick={() => setActiveTab("about")}
            />
            <TabButton
              label="Education"
              icon={<FaGraduationCap />}
              isActive={activeTab === "education"}
              onClick={() => setActiveTab("education")}
            />
            <TabButton
              label="Experience"
              icon={<FaBriefcase />}
              isActive={activeTab === "experience"}
              onClick={() => setActiveTab("experience")}
            />
            <TabButton
              label="Security Focus"
              icon={<FaShieldAlt />}
              isActive={activeTab === "security"}
              onClick={() => setActiveTab("security")}
            />
          </motion.div>
          {/* Tab Content */}
          <div className="min-h-[400px] mb-8">
            {" "}
            {/* Set min-height to prevent layout jumps */}
            {/* --- About Me Content --- */}
            {activeTab === "about" && (
              <motion.div
                key="about" // Add key for proper animation switching
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6 text-white/80 text-lg leading-relaxed" // Adjusted text color/size
              >
                <p>
                  My name is{" "}
                  <span className="identity font-semibold text-white">
                    Anyawe Bright
                  </span>
                  , and I am a passionate front-end developer based in Ghana. I
                  am dedicated to continuously improving my skills through study
                  and practical application, using code to solve real-world
                  problems—a pursuit that brings me immense satisfaction.
                </p>
                <p>
                  From a young age, I have been fascinated by how modern
                  software and games function. This curiosity drove me to ask
                  questions, conduct research, and leverage available resources,
                  ultimately leading me to pursue a career in web development.
                </p>
                <p>
                  I aim to master JavaScript and modern frameworks to craft
                  unique, creative, and innovative solutions that address
                  real-world challenges through code. If you&apos;re intrigued
                  by my portfolio or seeking an enthusiastic developer to join
                  your team, I&apos;m open to opportunities and ready to
                  contribute.
                </p>
                <p className="mt-4 font-semibold text-accent">
                  I thrive on challenges and enjoy turning complex ideas into
                  intuitive user experiences.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <QuoteButton
                    service="web-development"
                    variant="secondary"
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
                  >
                    Let's Work Together
                  </QuoteButton>
                  <a
                    href="/Resume.v2.4.docx.pdf"
                    download
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </motion.div>
            )}
            {/* --- Education Content --- */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8" // Add space between education items
              >
                <h3 className="text-2xl font-semibold text-accent mb-6 flex items-center gap-2">
                  <FaGraduationCap /> My Educational Journey
                </h3>
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index} // Pass index to variants for stagger
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-800/50 p-6 rounded-lg shadow-md border-l-4 border-accent" // Card-like style
                  >
                    <p className="text-sm text-white/60 mb-1">{item.years}</p>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-lg text-white/90 mb-2">
                      {item.institution}
                    </p>
                    {item.description && (
                      <p className="text-white/70 text-base">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
            {/* --- Experience Content --- */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <h3 className="text-2xl font-semibold text-accent mb-6 flex items-center gap-2">
                  <FaBriefcase /> Professional Experience
                </h3>
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-800/50 p-6 rounded-lg shadow-md border-l-4 border-accent"
                  >
                    <p className="text-sm text-white/60 mb-1">{item.years}</p>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {item.role}
                    </h4>
                    <p className="text-lg text-white/90 mb-3">{item.company}</p>
                    {item.description && (
                      <ul className="list-disc list-inside space-y-1 text-white/70 text-base">
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
            {/* --- Security Assurance Content --- */}
            {activeTab === "security" && (
              <motion.div
                key="security"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6 text-white/80 text-lg leading-relaxed"
              >
                <h3 className="text-2xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <FaShieldAlt /> My Approach to Security
                </h3>
                <p className="text-red-500 font-semibold">
                  Important Note: No website can be guaranteed 100%
                  &ldquo;unhackable&ldquo; However, I prioritize building secure
                  applications by following industry best practices.
                </p>
                <p>
                  Creating secure web applications is paramount. While the
                  threat landscape constantly evolves, I am committed to
                  implementing robust security measures throughout the
                  development lifecycle. Here&apos;s how I approach it:
                </p>
                <motion.ul className="space-y-4 pl-4">
                  { [
                    {
                      icon: <FaLock className="text-accent" />,
                      text: "Secure Coding Practices: Writing clean, validated code to prevent common vulnerabilities like Cross-Site Scripting (XSS) and SQL Injection (where applicable).",
                    },
                    {
                      icon: <FaUserCheck className="text-accent" />,
                      text: "Input Validation: Rigorously validating and sanitizing all user inputs on both the client-side and server-side (when building full-stack apps) to prevent malicious data injection.",
                    },
                    {
                      icon: <FaShieldAlt className="text-accent" />,
                      text: "Dependency Management: Keeping libraries and frameworks up-to-date to patch known security vulnerabilities.",
                    },
                    {
                      icon: <FaLock className="text-accent" />,
                      text: "HTTPS Enforcement: Ensuring data transmission is encrypted using HTTPS.",
                    },
                    {
                      icon: <FaUserCheck className="text-accent" />,
                      text: "Authentication & Authorization: Implementing secure methods for user login and ensuring users can only access appropriate resources (relevant for apps with user accounts).",
                    },
                    {
                      icon: <FaShieldAlt className="text-accent" />,
                      text: "Staying Informed: Continuously learning about new threats and security best practices to adapt my development approach.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1">{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <p>
                  My goal is to build applications that are not only functional
                  and user-friendly but also resilient against common web
                  threats, giving you peace of mind.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Helper TabButton Component ---
interface TabButtonProps {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md text-sm md:text-base font-medium flex items-center gap-2
        transition-all duration-300 ease-in-out group relative
        ${
          isActive
            ? "bg-accent text-white shadow-md"
            : "bg-transparent text-white/70 hover:text-white hover:bg-white/10"
        }
      `}
    >
      {icon}
      {label}
      {/* Animated underline effect */}
      <span
        className={`
        absolute bottom-0 left-0 right-0 h-0.5 bg-accent
        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
        ${isActive ? "scale-x-100" : ""}
      `}
      ></span>
    </button>
  );
};
