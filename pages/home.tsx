// pages/home.tsx

import { motion } from 'framer-motion';
// Remove unused import
// import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import SlideInWhenVisible from '../components/animation/SlideInWhenVisible';
import AllSectionsLayout from '../components/AllSectionsLayout';

export function HomeSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center relative">
      {/* Main container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        {/* Left side - Image without animations */}
        <div className="w-full md:w-[500px] h-[500px] relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
          <Image 
            src="/home.jpg"
            alt="Profile Image"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, 500px"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <SlideInWhenVisible direction="right">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-Volkswagen-Bold"
            >
              AHMED ABOUELNAGA
            </motion.h1>
          </SlideInWhenVisible>

          <SlideInWhenVisible direction="right" delay={0.2}>
            <motion.p className="text-xl md:text-3xl text-blue-200 mb-8 font-Volkswagen-Bold">
              CS @ Columbia University
            </motion.p>
          </SlideInWhenVisible>
        </div>
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