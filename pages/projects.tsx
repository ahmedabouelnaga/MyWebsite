import { FaGithub } from 'react-icons/fa';

export function ProjectsSection() {
  const projects = [
    {
      title: "SmartCrop - AI-Powered Agriculture",
      description: "An AI system that uses computer vision to analyze crop health, optimize watering schedules, and predict yields, helping farmers improve productivity and reduce waste.",
    },
    {
      title: "AI Tutor - Personalized Learning Assistant",
      description: "A machine learning-driven platform that provides personalized learning recommendations, quizzes, and study plans tailored to individual students' needs.",
    },
    {
      title: "MedAssist - AI Health Diagnosis",
      description: "An AI-powered health assistant that uses natural language processing to provide preliminary diagnoses based on symptoms, improving early detection of diseases.",
    },
    {
      title: "AutoBudget - Financial Planner",
      description: "An AI-based tool that tracks spending, predicts financial trends, and helps users budget effectively by analyzing transaction data and offering personalized recommendations.",
    },
    {
      title: "Future Project 1",
      description: "Placeholder for a future project.",
    },
    {
      title: "Future Project 2",
      description: "Placeholder for a future project.",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 mt-10">Featured Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Main GitHub Button */}
      <button
        onClick={() => window.open('https://github.com/ahmedabouelnaga', '_blank')}
        className="mt-12 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center"
      >
        <FaGithub className="mr-2" />
        GitHub
      </button>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function ProjectsPage() {
  return <AllSectionsLayout scrollToSection="projects" />;
}
