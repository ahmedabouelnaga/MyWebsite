// pages/about.tsx

export function AboutSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        About Me
      </h1>
      <p className="max-w-2xl text-gray-700 text-center">
        Hi! I’m a software engineer with a passion for modern web technologies...
      </p>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function AboutPage() {
  return <AllSectionsLayout scrollToSection="about" />;
}
