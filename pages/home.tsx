// pages/home.tsx

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useRouter } from 'next/router';

export function HomeSection() {
  const router = useRouter();

  const handleWorkClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
      // Add highlight effect
      workSection.classList.add('scroll-highlight');
      setTimeout(() => {
        workSection.classList.remove('scroll-highlight');
      }, 1000);
    } else {
      router.push('/work').then(() => {
        setTimeout(() => {
          const newWorkSection = document.getElementById('work');
          if (newWorkSection) {
            newWorkSection.scrollIntoView({ behavior: 'smooth' });
            newWorkSection.classList.add('scroll-highlight');
            setTimeout(() => {
              newWorkSection.classList.remove('scroll-highlight');
            }, 1000);
          }
        }, 100);
      });
    }
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
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1500}
          scale={1.02}
          className="cursor-pointer"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold font-Volkswagen-Bold mb-4"
            style={{
              color: '#FFFFFF',
              textShadow: '3px 3px 0px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.3)',
            }}
            animate={{
              textShadow: [
                '3px 3px 0px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.3)',
                '3px 3px 0px rgba(0,0,0,0.3), 0 0 50px rgba(255,255,255,0.5)',
                '3px 3px 0px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.3)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            AHMED ABOUELNAGA
          </motion.h1>
        </Tilt>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1500}
          scale={1.02}
          className="cursor-pointer"
        >
          <motion.p
            className="text-xl md:text-2xl mb-6 font-Volkswagen-Bold relative"
            style={{
              color: '#FFFFFF',
            }}
            animate={{
              textShadow: [
                '0 0 5px rgba(255,255,255,0.3)',
                '0 0 15px rgba(255,255,255,0.5)',
                '0 0 5px rgba(255,255,255,0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            CS @ Columbia University
          </motion.p>
        </Tilt>

        {/* Blue button linking to the Work page */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWorkClick}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-lg hover:from-blue-600 hover:to-indigo-700 shadow-lg transform transition duration-300 ease-in-out"
        >
          My Work!
        </motion.button>
      </div>
    </div>
  );
}

// Keep your existing default export
import AllSectionsLayout from '../components/AllSectionsLayout';

export default function HomePage() {
  return <AllSectionsLayout scrollToSection="home" />;
}
