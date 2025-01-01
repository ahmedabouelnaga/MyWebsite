// pages/projects.tsx

export function ProjectsSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">My Projects</h1>
      {/* Display your projects here */}
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function ProjectsPage() {
  return <AllSectionsLayout scrollToSection="projects" />;
}
