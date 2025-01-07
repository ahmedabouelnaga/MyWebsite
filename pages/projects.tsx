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
    title: "HTTP-Server",
    description: "A lightweight HTTP server for static content or APIs.",
    longDescription: "Handles requests/responses effectively for easy deployment of static sites or web apps.",
    techStack: ["C", "Sockets", "UNIX", "Linux"],
    image: "/projects/httpserver.jpg",
    demo: "https://gist.github.com/ahmedabouelnaga/1d70f295d98bf8511d056564233d54c8"
  },
  {
    id: 2,
    title: "Personalized AI Tutor",
    description: "Machine learning-driven platform providing personalized education recommendations.",
    longDescription: "Advanced AI algorithms analyze student performance and learning patterns to create tailored educational paths and content recommendations.",
    techStack: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
    image: "/projects/aitutor.jpg",
    github: "https://github.com/yourusername/ai-tutor"
  },
  {
    id: 3,
    title: "AI Powered Grocery Optimizer",
    description: "An AI system that helps optimize grocery shopping for cost and health.",
    longDescription: "Using advanced data analytics to minimize waste and manage nutritional goals effectively.",
    techStack: ["Python", "TensorFlow","React", "Node.js", "Flask"],
    image: "/projects/aipoweredgroceryoptimizer.jpg",
    github: "https://github.com/yourusername/smartcrop"
  }
];

export function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

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

                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-medium transition-colors
                               hover:bg-blue-500 pointer-events-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project!
                  </motion.a>
                )}

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-medium transition-colors
                               hover:bg-blue-500 pointer-events-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project!
                  </motion.a>
                )}
              </div>
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
