import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AllSectionsLayout from '../components/AllSectionsLayout';

export function HomeSection() {
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const cursor = document.getElementById('cursor-glow');
    if (cursor) {
      cursor.style.transform = `translate(${moveX * 0.1}px, ${moveY * 0.1}px)`;
    }
  };

  return (
    <div id="home" className="min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Cursor glow effect */}
      <div
        id="cursor-glow"
        className="fixed w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-100 ease-out"
        style={{ top: -250, left: -250 }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-gray-400 text-sm tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center relative">
            <motion.div 
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full absolute"
              animate={{
                y: [4, 16, 4]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
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