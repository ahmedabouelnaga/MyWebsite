import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import AllSectionsLayout from '../components/AllSectionsLayout';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
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
    techStack: ["Python", "PyTorch", "Next.js", "PostgreSQL"],
    image: "/projects/aitutor.jpg",
    github: "https://github.com/yourusername/ai-tutor"
  },
  {
    id: 3,
    title: "MedAssist - Healthcare AI",
    description: "AI-powered health assistant using natural language processing for preliminary health analysis.",
    techStack: ["Python", "TensorFlow", "NLP", "React", "MongoDB"],
    image: "/projects/medassist.jpg",
    github: "https://github.com/yourusername/medassist"
  },
  {
    id: 4,
    title: "AutoBudget - Financial Planning",
    description: "Smart budgeting tool that analyzes spending patterns and provides personalized financial advice.",
    techStack: ["Python", "Machine Learning", "React", "Node.js"],
    image: "/projects/autobudget.jpg",
    github: "https://github.com/yourusername/autobudget"
  },
  {
    id: 5,
    title: "EcoTracker - Environmental Monitor",
    description: "IoT-based system for monitoring and analyzing environmental data in real-time.",
    techStack: ["Python", "IoT", "React", "AWS"],
    image: "/projects/ecotracker.jpg",
    github: "https://github.com/yourusername/ecotracker"
  },
  {
    id: 6,
    title: "CodeMentor - Programming Assistant",
    description: "AI-powered coding assistant that helps developers write better code and learn programming concepts.",
    techStack: ["Python", "NLP", "TypeScript", "Node.js"],
    image: "/projects/codementor.jpg",
    github: "https://github.com/yourusername/codementor"
  }
];

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
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

                {/* GitHub Link Only */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return <AllSectionsLayout scrollToSection="projects" />;
}
