// components/Navbar.tsx
import { useScrollSection } from '../hooks/useScrollSection';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const currentSection = useScrollSection();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLinkClass = (section: string) => {
    const baseClasses = "transition-all duration-300 hover:text-emerald-400 cursor-pointer relative px-2 py-1";
    return currentSection === section
      ? `${baseClasses} text-emerald-400 font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-emerald-400 before:to-transparent`
      : `${baseClasses} text-gray-300`;
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={isScrolled ? "visible" : "hidden"}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400"
        >
          Ahmed Abouelnaga
        </motion.div>
        
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="space-x-6 text-sm">
            {['home', 'about', 'work', 'education', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                onClick={(e) => handleNavClick(e, section)}
                className={getLinkClass(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/ahmedabouelnaga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/ahmed-abouelnaga-2a8017208/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}