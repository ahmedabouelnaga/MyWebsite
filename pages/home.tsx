// pages/home.tsx

import Link from 'next/link';

export function HomeSection() {
  return (
    <div id="home" className="relative h-screen w-full">
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
        <h1 className="text-5xl md:text-6xl font-bold font-Volkswagen-Bold mb-4">
          AHMED ABOUELNAGA
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-Volkswagen-Bold">
          CS @ Columbia University
        </p>
        {/* Blue button linking to the Work page */}
        <Link href="/work">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-lg hover:from-blue-600 hover:to-indigo-700 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            My Work!
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
