import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import AllSectionsLayout from '../components/AllSectionsLayout';
import SlideInWhenVisible from '../components/animation/SlideInWhenVisible';

type SkillItem = {
  name: string;
  years: number;
};

const languagesData: SkillItem[] = [
  { name: 'Java', years: 4 },
  { name: 'Python', years: 3 },
  { name: 'JavaScript', years: 3 },
  { name: 'TypeScript', years: 3 },
  { name: 'HTML/CSS', years: 3 },
  { name: 'SQL(MySQL, Postgres)', years: 2 },
  { name: 'Node.js', years: 2 },
  { name: 'React.js', years: 3 },
  { name: 'MATLAB', years: 2 },
  { name: 'C++', years: 2 },
  { name: 'C', years: 1 },
  { name: 'Swift (iOS)', years: 1 },
  { name: 'Go', years: 1 },
  { name: 'X86 Assembly', years: 1 },
];

const frameworksData: SkillItem[] = [
  { name: 'ReactJS', years: 3 },
  { name: 'PostgreSQL', years: 2 },
  { name: 'Spring Boot', years: 2 },
  { name: 'GCP', years: 2 },
  { name: 'Postman', years: 2 },
  { name: 'Natural Language Processing', years: 1 },
  { name: 'Bash', years: 2 },
  { name: 'Large Language Models', years: 1 },
  { name: 'UNIX/LINUX', years: 2 },
  { name: 'Git', years: 2 },
  { name: 'Bootstrap', years: 2 },
  { name: 'AWS', years: 1 },
];

// Add type for skill logos
type SkillLogoType = {
  [key: string]: string;
} & {
  Python: string;
  JavaScript: string;
  'HTML/CSS': string;
  SQL: string;
  'Node.js': string;
  Go: string;
  'Spring Boot': string;
  PostgreSQL: string;
  ReactJS: string;
  Bootstrap: string;
  AWS: string;
  VueJS: string;
};

// Updated skillLogos with type
const skillLogos: SkillLogoType = {
  // Languages
  Python: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  JavaScript: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'HTML/CSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  SQL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  Go: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',  // Added GoLang logo
  // Frameworks & Tech
  'Spring Boot': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
  PostgreSQL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  ReactJS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  Bootstrap: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
  AWS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  VueJS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
};

export function AboutMeSection() {
  const [showLanguages, setShowLanguages] = useState(true);

  const getCubeFaces = () => {
    const availableSkills = showLanguages
      ? ['Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Node.js', 'Go']
      : ['PostgreSQL', 'Spring Boot', 'ReactJS', 'Bootstrap', 'AWS', 'VueJS'];

    // Fixed type guard by ensuring types align properly
    const faces = availableSkills.filter(
      (skill): skill is Extract<keyof SkillLogoType, string> => 
        Object.hasOwn(skillLogos, skill)
    );

    while (faces.length < 6) {
      faces.push(faces[0]);
    }

    return faces;
  };

  const renderSkills = (skills: SkillItem[]) => {
    const maxYears = Math.max(...skills.map((s) => s.years));

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full space-y-4"
      >
        {skills.map((skill, index) => {
          const widthPercentage = (skill.years / maxYears) * 100;
          return (
            <motion.div
              key={skill.name}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <div className="w-24 text-sm font-medium text-blue-200">
                {skill.name}
              </div>
              <div className="flex-1 bg-blue-900/30 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${widthPercentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-blue-400 rounded-full"
                />
              </div>
              <div className="w-16 text-sm text-blue-200">
                {skill.years} yr(s)
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 px-6 py-24 relative overflow-hidden"
    >
      {/* Updated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        {/* Add tech-inspired particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SlideInWhenVisible direction="top">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            About Me
          </h1>
        </SlideInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text and Skills */}
          <div className="space-y-8">
            <SlideInWhenVisible direction="left">
              <p className="text-blue-100 text-lg leading-relaxed">
                I am a very ambitious software developer with a unique background
                that has prepared me to be a team player who communicates effectively,
                faces problems analytically, and has the technical skills to tackle
                any challenge.
              </p>
            </SlideInWhenVisible>

            <div className="space-y-6">
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLanguages(true)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    showLanguages
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-900/50 text-blue-200'
                  }`}
                >
                  Languages
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLanguages(false)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    !showLanguages
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-900/50 text-blue-200'
                  }`}
                >
                  Frameworks & Tech
                </motion.button>
              </div>

              {renderSkills(showLanguages ? languagesData : frameworksData)}
            </div>
          </div>

          {/* Right Column - Animated Cube */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
                times: [0, 1],
              }}
              className="cube"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '2000px', // Increased for larger cube
                transformOrigin: 'center center',
              }}
            >
              {getCubeFaces().map((face, index) => {
                const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
                return (
                  <motion.div
                    key={`${face}-${index}`}
                    className={`face ${faces[index]}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    style={{
                      backfaceVisibility: 'visible',
                      WebkitBackfaceVisibility: 'visible',
                      transform: `${faces[index]} translateZ(2px)`,
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src={skillLogos[face]}
                      alt={face}
                      width={80}
                      height={80}
                      className="object-contain"
                      unoptimized
                      priority
                      style={{
                        imageRendering: 'crisp-edges',
                        WebkitFontSmoothing: 'antialiased',
                        transform: 'translateZ(2px)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutMePage() {
  return <AllSectionsLayout scrollToSection="about" />;
}
