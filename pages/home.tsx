// pages/home.tsx

export function HomeSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <h1 className="text-5xl font-bold text-green-800 mb-4">Home</h1>
      <p className="text-xl max-w-xl text-center text-gray-700">
        Welcome to the Home section!
      </p>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function HomePage() {
  // Scroll to the 'home' ID in AllSectionsLayout
  return <AllSectionsLayout scrollToSection="home" />;
}
