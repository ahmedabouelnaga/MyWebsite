// pages/home.tsx

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect } from 'react';
import Image from 'next/image';
import SlideInWhenVisible from '../components/animation/SlideInWhenVisible';
import AllSectionsLayout from '../components/AllSectionsLayout';

export function HomeSection() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-emerald-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name and Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
              Ahmed Abouelnaga
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-8">
            Software Engineer & AI Enthusiast
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at Columbia University, passionate about building intelligent systems 
            and creating meaningful software solutions.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-500 rounded-full mt-2" />
          </div>
        </motion.div>
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