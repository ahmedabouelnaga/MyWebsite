// pages/home.tsx

import Link from 'next/link';

export function HomeSection() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image container */}
      <div
        className="
          absolute inset-0 
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: "url('/home.jpg')", // Correct path to your background image
        }}
      >
        {/* Semi-transparent cyan overlay */}
        <div className="absolute inset-0 bg-cyan-500/10"></div>
      </div>

      {/* Foreground content, centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Ahmed Abouelnaga
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          CS @ Columbia University
        </p>
        {/* Blue button linking to the Work page */}
        <Link href="/work">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition">
            There's More!
          </button>
        </Link>
      </div>
    </div>
  );
}

// Keep your existing default export
import AllSectionsLayout from '../components/AllSectionsLayout';

export default function HomePage() {
  return <AllSectionsLayout scrollToSection="home" />;
}
