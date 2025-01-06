import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import AllSectionsLayout from '../components/AllSectionsLayout';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;  // Make longDescription optional
  techStack: string[];
  image: string;
  github?: string;
  demo?: string;
  video?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SmartCrop - AI-Powered Agriculture",
    description: "An AI system that uses computer vision to analyze crop health and optimize watering schedules.",
    longDescription: "Using cutting-edge machine learning algorithms to revolutionize agricultural practices, improving crop yields while reducing water waste.",
    techStack: ["Python", "TensorFlow", "OpenCV", "React", "Node.js"],
    image: "/projects/smartcrop.jpg",
    github: "https://github.com/yourusername/smartcrop"
  },
  {
    id: 2,
    title: "AI Tutor - Personalized Learning",
    description: "Machine learning-driven platform providing personalized education recommendations.",
    longDescription: "Advanced AI algorithms analyze student performance and learning patterns to create tailored educational paths and content recommendations.",
    techStack: ["Python", "PyTorch", "Next.js", "PostgreSQL"],
    image: "/projects/aitutor.jpg",
    github: "https://github.com/yourusername/ai-tutor"
  },
  {
    id: 3,
    title: "MedAssist - Healthcare AI",
    description: "AI-powered health assistant using natural language processing for preliminary health analysis.",
    longDescription: "Leveraging NLP and machine learning to provide initial health assessments and medical information assistance.",
    techStack: ["Python", "TensorFlow", "NLP", "React", "MongoDB"],
    image: "/projects/medassist.jpg",
    github: "https://github.com/yourusername/medassist"
  },
  {
    id: 4,
    title: "AutoBudget - Financial Planning",
    description: "Smart budgeting tool that analyzes spending patterns and provides personalized financial advice.",
    longDescription: "AI-driven financial analysis tool that helps users understand their spending habits and make better financial decisions.",
    techStack: ["Python", "Machine Learning", "React", "Node.js"],
    image: "/projects/autobudget.jpg",
    github: "https://github.com/yourusername/autobudget"
  },
  {
    id: 5,
    title: "EcoTracker - Environmental Monitor",
    description: "IoT-based system for monitoring and analyzing environmental data in real-time.",
    longDescription: "Comprehensive environmental monitoring system using IoT sensors and real-time data analysis.",
    techStack: ["Python", "IoT", "React", "AWS"],
    image: "/projects/ecotracker.jpg",
    github: "https://github.com/yourusername/ecotracker"
  },
  {
    id: 6,
    title: "CodeMentor - Programming Assistant",
    description: "AI-powered coding assistant that helps developers write better code and learn programming concepts.",
    longDescription: "Intelligent coding assistant that provides real-time suggestions, code analysis, and programming concept explanations.",
    techStack: ["Python", "NLP", "TypeScript", "Node.js"],
    image: "/projects/codementor.jpg",
    github: "https://github.com/yourusername/codementor"
  }
];

export function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const allTechnologies = [...new Set(projects.flatMap(p => p.techStack))];
  
  const filteredProjects = selectedTech 
    ? projects.filter(p => p.techStack.includes(selectedTech))
    : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-indigo-950 px-6 py-24 relative overflow-hidden"
    >
      {/* Updated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -right-48 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -left-48 bg-violet-500/5 rounded-full blur-3xl"></div>
        {/* Add diagonal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(99,102,241,0.05)_49%,rgba(99,102,241,0.05)_51%,transparent_52%)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - without GitHub button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of my notable projects showcasing my expertise in AI, web development,
            and software engineering.
          </p>
        </motion.div>

        {/* Tech Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTech === tech 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with enhanced interactivity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-gray-950/30 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 hover:border-indigo-500/20"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-blue-900/50 text-blue-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent flex items-end p-6"
                >
                  <p className="text-gray-200 text-sm line-clamp-3">
                    {project.longDescription}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Button - Moved to bottom */}
        <motion.div className="mt-16 text-center">
          <motion.a
            href="https://github.com/ahmedabouelnaga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:from-blue-700 hover:to-purple-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return <AllSectionsLayout scrollToSection="projects" />;
}
