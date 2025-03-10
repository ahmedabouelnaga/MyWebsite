import { motion } from 'framer-motion';
import SlideInWhenVisible from '../components/animation/SlideInWhenVisible';
import { useState } from 'react';

export function EducationSection() {
  const [isHovered, setIsHovered] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div
      id="education"
      className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-purple-950 px-6 py-24 relative overflow-hidden"
    >
      {/* Add animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-0 left-1/4 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 right-1/4 bg-pink-500/5 rounded-full blur-3xl"></div>
        {/* Add floating academic symbols */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-500/10 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {["🎓", "📚", "💡", "🔬"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <SlideInWhenVisible direction="top">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Education
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Pursuing excellence in Computer Science at one of the world&apos;s leading institutions
            </p>
          </div>
        </SlideInWhenVisible>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Main Degree Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="col-span-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Columbia University</h2>
                <p className="text-purple-400">Bachelor of Science in Computer Science</p>
                <p className="text-gray-400">Aug 2022 - Present</p>
              </div>
              <motion.div 
                animate={isHovered ? { rotateY: 360 } : {}}
                transition={{ duration: 1 }}
                className="hidden md:block"
              >
                <svg className="w-24 h-24 text-purple-500/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2.5M12 14l3.5 2.5"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Card - Updated */}
          <motion.div
            variants={item}
            whileHover={{ y: -8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                AI & Machine Learning
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Full Stack Development
              </li>
            </ul>
          </motion.div>

          {/* Current Project Card - Updated with Loading Bar */}
          <motion.div
            variants={item}
            whileHover={{ y: -8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Current Project</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-300">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span>AI-Based Predictive Models</span>
                </div>
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden ml-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

import AllSectionsLayout from "../components/AllSectionsLayout";

export default function EducationPage() {
  return <AllSectionsLayout scrollToSection="education" />;
}