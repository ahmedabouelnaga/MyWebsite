// pages/work.tsx

export function WorkSection() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-800 mt-16 mb-4">Work</h1>
      <p className="text-xl max-w-xl text-center text-gray-700">
        Showcase your professional experience, projects, or achievements here.
      </p>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function WorkPage() {
  return <AllSectionsLayout scrollToSection="work" />;
}
