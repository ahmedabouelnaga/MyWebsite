import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface WorkExperience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  image: string;
  companyUrl?: string;
}

const workExperiences = [
  {
    id: 1,
    company: "Google",
    role: "CSSI Intern",
    period: "June 2020 - August 2020",
    description: [
      "Selected as top 3% of applicants for Google's prestigious Computer Science Summer Institute from 1000+ candidates.",
      " Developed a travel recommendation platform that increased user engagement by 40% and daily active users by 25%.",
      " Led a team of 5 engineers to implement 15+ new features using Google Cloud Platform.",
      " Achieved 98% test coverage and reduced page load time by 35% through optimization."
    ],
    skills: ["Python", "JavaScript", "Machine Learning", "Google Cloud", "APIs"],
    icon: (
      <svg viewBox="0 0 48 48" className="h-16 w-16">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
      </svg>
    ),
    bgColor: "bg-white",  // White background for Google logo
    companyUrl: "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute"
  },
  {
    id: 2,
    company: "Columbia University",
    role: "Teaching Assistant - Computer Science",
    period: "January 2025 - Present",
    description: [
      "Selected as one of 8 TAs from 100+ applicants for Python Course at Columbia University.",
      " Supporting 150+ students in mastering Python.",
      " Maintained 95% student satisfaction rate while conducting weekly office hours and review sessions.",
      " Reduced average assignment grading time by 30% through automated testing implementation."
    ],
    skills: ["Java", "Python", "Data Structures", "Algorithms", "Teaching"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-blue-700"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14v6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l-3.5 2M12 14l3.5 2"
        />
      </svg>
    ),
    bgColor: "bg-blue-100",
    companyUrl: "https://www.cs.columbia.edu"
  },
  {
    id: 3,
    company: "Techie Youth",
    role: "Software Engineer Intern",
    period: "August 2021 - September 2021",
    description: [
      "Developed “EduSpark,” a mobile app for 2,000+ student.",
      "  featuring 50+ interactive lessons on digital literacy and programming.",
      " Implemented responsive design resulting in 40% increase in mobile user engagement.",
      " Created 20+ reusable components reducing development time by 35%."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "AWS"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-teal-600">
        <path
          fill="currentColor"
          d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5V7c0-.55-.45-1-1-1z M20 4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9v-2h4V7h2v4h4v2z"
        />
      </svg>
    ),
    bgColor: "bg-teal-100"
  },
  {
    id: 4,
    company: "Design The Future",
    role: "App Development Intern",
    period: "June 2021 - August 2021",
    description: [
      "Built 'Task Breaker' app to support 50+ individuals with disabilities in managing daily tasks, appointments, doctor visits, and medications.",
      " Implemented 10+ key features resulting in 85% user satisfaction rate.",
      " Reduced app loading time by 45% ",
      " through code optimization and caching.Integrated 5 third-party APIs to enhance app functionality and user experience."
    ],
    skills: ["React Native", "Node.js", "UI/UX Design", "APIs"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-purple-700">
        <path
          fill="currentColor"
          d="M17,2 C19.2,2 21,3.8 21,6 L21,18 C21,20.2 19.2,22 17,22 L7,22 C4.8,22 3,20.2 3,18 L3,6 C3,3.8 4.8,2 7,2 L17,2 Z M12,18 C11.4,18 11,17.6 11,17 C11,16.4 11.4,16 12,16 C12.6,16 13,16.4 13,17 C13,17.6 12.6,18 12,18 Z"
        />
      </svg>
    ),
    bgColor: "bg-purple-100"
  },
  {
    id: 5,
    company: "NYU Tisch",
    role: "Game Designer Intern",
    period: "February 2021 - June 2021",
    description: [
      "Developed 'Just Keep Rolling' game achieving 85% positive reviews from 500+ players.",
      " Optimized game performance resulting in 60% reduction in loading times.",
      " Implemented 12 unique game mechanics leading to 30% increase in player retention.",
      " Collaborated with 3 artists and 2 sound designers to create immersive gaming experience."
    ],
    skills: ["Unity", "C++", "Game Design", "3D Modeling"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-indigo-700">
        <path
          fill="currentColor"
          d="M7.97,16L5,19C4.67,19.3 4.23,19.5 3.75,19.5A1.75,1.75 0 0,1 2,17.75V17.5L3,10.12C3.21,7.81 5.14,6 7.5,6H16.5C18.86,6 20.79,7.81 21,10.12L22,17.5V17.75A1.75,1.75 0 0,1 20.25,19.5C19.77,19.5 19.33,19.3 19,19L16.03,16H7.97M7,8V10H5V8H7M19,8V10H17V8H19M16.5,8A2.5,2.5 0 0,1 14,10.5A2.5,2.5 0 0,1 11.5,8A2.5,2.5 0 0,1 14,5.5A2.5,2.5 0 0,1 16.5,8Z"
        />
      </svg>
    ),
    bgColor: "bg-indigo-100"
  }
];

export function WorkSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  return (
    <div id="work" className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">
            Work Experience
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here's a brief overview of my professional journey and the amazing companies
            I've had the opportunity to work with.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {workExperiences.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-center p-6">
                {/* Icon Container */}
                <div className={`${exp.bgColor} p-8 rounded-full mb-6 lg:mb-0 lg:mr-8`}>
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-blue-400 text-lg mb-1">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <ul className={`space-y-2 mb-6 ${expandedId === exp.id ? 'hidden' : 'block'}`}>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {exp.description[0]}
                    </li>
                  </ul>

                  {/* Expanded Description */}
                  {expandedId === exp.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 mb-6"
                    >
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {/* Toggle Button */}
                  <motion.button
                    onClick={() => toggleExpand(exp.id)}
                    className="mb-6 px-4 py-2 bg-blue-900/50 text-blue-200 rounded-full text-sm flex items-center space-x-2 hover:bg-blue-800/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedId === exp.id ? (
                      <>
                        <FaChevronUp className="h-4 w-4" />
                        <span>Show Less</span>
                      </>
                    ) : (
                      <>
                        <FaChevronDown className="h-4 w-4" />
                        <span>Learn More</span>
                      </>
                    )}
                  </motion.button>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

import AllSectionsLayout from "../components/AllSectionsLayout";

export default function WorkPage() {
  return <AllSectionsLayout scrollToSection="work" />;
}
