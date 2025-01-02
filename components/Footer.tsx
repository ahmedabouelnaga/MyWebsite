
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function ProjectsSection() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6 mt-10">Projects</h1>
      {/* Add projects here */}
      {/* Display projects here */}
      <button
        onClick={() => window.open('https://github.com/ahmedabouelnaga', '_blank')}
        className="mt-auto px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 transition flex items-center justify-center"
      >
        <FaGithub className="mr-2" />
        GitHub
      </button>

      <button
        onClick={() => window.open('https://www.linkedin.com/in/ahmedabouelnaga', '_blank')}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition duration-300 ease-in-out flex items-center"
      >
        <FaLinkedin className="mr-2" />
        LinkedIn
      </button>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function ProjectsPage() {
  return <AllSectionsLayout scrollToSection="projects" />;
}