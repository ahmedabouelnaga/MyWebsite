import Link from 'next/link';

export function EducationSection() {
  return (
    <div id="education" className="min-h-screen bg-purple-50 flex flex-col justify-center items-center px-6">
      {/* Section Title */}
      <h1 className="text-5xl font-bold text-purple-800 mb-8">
        Education
      </h1>

      {/* Education Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Degree */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* New Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2.5M12 14l3.5 2.5"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-purple-800 mt-4">
            Degree
          </h2>
          <p className="text-gray-700">
            Pursuing BS in Computer Science from{" "}
            <a
              href="https://www.columbia.edu"
              className="text-purple-600 underline"
            >
              Columbia University
            </a>
          </p>
        </div>

        {/* Year */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* New Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 11h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-purple-800 mt-4">
            Year
          </h2>
          <p className="text-gray-700">Aug 2022 - Present</p>
        </div>

        {/* Current Project */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* New Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-purple-800 mt-4">
            Current Project
          </h2>
          <p className="text-gray-700">
            AI-Based Predictive Model for Software Systems
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-col items-center">
          <div className="bg-purple-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* New Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-700"
              fill="none"
              viewBox="0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3m6 0a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-purple-800 mt-4">
            Skills
          </h2>
          <p className="text-gray-700">Full-Stack Development, AI Research</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12">
        <Link href="/projects">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-lg shadow-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition duration-300 ease-in-out">
            My Projects!
          </button>
        </Link>
      </div>
    </div>
  );
}

import AllSectionsLayout from "../components/AllSectionsLayout";

export default function EducationPage() {
  return <AllSectionsLayout scrollToSection="education" />;
}
