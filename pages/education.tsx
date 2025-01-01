// pages/education.tsx

export function EducationSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-50">
      <h1 className="text-5xl font-bold text-purple-800 mb-4">Education</h1>
      <p className="text-xl max-w-xl text-center text-gray-700">
        Your academic background, degrees, certifications, etc.
      </p>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function EducationPage() {
  return <AllSectionsLayout scrollToSection="education" />;
}
