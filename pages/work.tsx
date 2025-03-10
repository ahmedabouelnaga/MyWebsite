import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { ReactNode } from 'react';

interface WorkExperience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  image?: string;  // Make image optional since we're using icons
  companyUrl?: string;
  icon: ReactNode;
  bgColor: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Google(CSSI)",
    role: "Web Developer Intern",
    period: "June 2020 - August 2020",
    description: [
      "Selected as top 3% of applicants for Google's prestigious Computer Science Summer Institute from 1000+ candidates.",
      "Developed \"TravelSphere,\" a travel app using React.js, Tailwind CSS, and Python APIs on Google App Engine, driving 60% user growth and 40% higher engagement through analytics insights.",
      "Implemented data analytics that enabled 500+ users to make informed travel decisions, improving trip planning efficiency by 25% and reducing time costs by 10%"
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
      <div className="flex items-center justify-center w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[64px] h-[64px] text-blue-700" // Adjusted size to match others
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      </div>
    ),
    bgColor: "bg-blue-100 flex items-center justify-center min-w-[88px] min-h-[88px]", // Added min-width and min-height
    companyUrl: "https://www.cs.columbia.edu"
  },
  {
    id: 3,
    company: "Techie Youth",
    role: "Software Engineer Intern",
    period: "July 2021 - September 2021",
    description: [
      "Developed “EduSpark,” a mobile app for 2,000+ student.",
      "  Featuring 50+ interactive lessons on digital literacy and programming.",
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
    period: "September 2021 - December 2021",
    description: [
      "Built Task Breaker, an app to support 50+ individuals with disabilities in managing daily tasks, appointments, doctor visits, and medications.",
      " Implemented 10+ key features resulting in 85% user satisfaction rate.",
      " Reduced app loading time by 45% ",
      " Through code optimization and caching.Integrated 5 third-party APIs to enhance app functionality and user experience."
    ],
    skills: ["React Native", "Node.js", "UI/UX Design", "APIs"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-purple-700">
        <path
          fill="currentColor"
          d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2
             2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 19a1 1 0
             1 1 0-2 1 1 0 0 1 0 2zm5-4H7V5h10v12z"
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
      "Developed Just Keep Rolling, a game achieving 85% positive reviews from 500+ players.",
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
  },
  {
    id: 6,
    company: "Cita Marketplace",
    role: "Software Engineer Intern",
    period: "June 2023 - August 2023",
    description: [
      "Developed a full-stack web application using React.js, Express.js, and MongoDB for managing a marketplace platform.",
      "Implemented real-time notifications and chat features using Socket.IO, improving user engagement by 45%.",
      "Built RESTful APIs and integrated authentication using JWT, handling 1000+ daily user requests.",
      "Optimized database queries and implemented caching, reducing load times by 60%."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Express.js", "REST APIs"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-green-600">
        <path
          fill="currentColor"
          d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10
             0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm-10.83-2l1.1-2h9.45c.75
             0 1.41-.41 1.75-1.03l3.58-6.49a.997.997 0 0 0-.86-1.48H5.21l-.94-2H1v2h2l3.6
             7.59-1.35 2.44C5.09 14.28 5 14.62 5 15c0
             1.1.9 2 2 2h12v-2H7c-.13 0-.25-.07-.31-.17l.03-.06z"
        />
      </svg>
    ),
    bgColor: "bg-green-100"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

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
    <div
      id="work"
      className="min-h-screen bg-gradient-to-tr from-gray-900 via-blue-900 to-emerald-900 px-6 py-24 relative overflow-hidden"
    >
      {/* Add animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-0 left-1/4 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 right-1/4 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Here&apos;s a brief overview of my professional journey and the amazing companies
            I&apos;ve had the opportunity to work with.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {workExperiences.map((exp) => (
            <motion.div
              variants={itemVariants}
              key={exp.id}
              whileHover={{ y: -4 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-colors"
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
