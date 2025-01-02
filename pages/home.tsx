// pages/home.tsx

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AllSectionsLayout from '../components/AllSectionsLayout';

export function HomeSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();

  const handleWorkClick = () => {
    router.push('/work').then(() => {
      setTimeout(() => {
        const workSection = document.getElementById('work');
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' });
          workSection.classList.add('scroll-highlight');
          setTimeout(() => {
            workSection.classList.remove('scroll-highlight');
          }, 1000);
        }
      }, 100);
    });
  };

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
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            background: "linear-gradient(to right, #3b82f6, #4f46e5)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWorkClick}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-lg shadow-lg transform transition duration-300 ease-in-out"
        >
          My Work!
        </motion.button>
      </div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <AllSectionsLayout scrollToSection="home" />;
}