import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// pages/work.tsx

export function WorkSection() {
  const router = useRouter();

  const handleEducationClick = () => {
    const educationSection = document.getElementById('education');
    if (educationSection) {
      // Add highlight effect
      educationSection.scrollIntoView({ behavior: 'smooth' });
      educationSection.classList.add('scroll-highlight');
      setTimeout(() => {
        educationSection.classList.remove('scroll-highlight');
      }, 1000);
    } else {
      // If section not found, navigate and then scroll
      router.push('/education').then(() => {
        setTimeout(() => {
          const newEducationSection = document.getElementById('education');
          if (newEducationSection) {
            newEducationSection.scrollIntoView({ behavior: 'smooth' });
            newEducationSection.classList.add('scroll-highlight');
            setTimeout(() => {
              newEducationSection.classList.remove('scroll-highlight');
            }, 1000);
          }
        }, 100);
      });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
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
    <div id="work" className="min-h-screen flex flex-col justify-start items-center bg-blue-50 px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="text-5xl font-bold text-blue-800 mt-16 mb-8"
      >
        Work
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col space-y-12"
      >
        {/* TA @ Columbia */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-blue-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2.5M12 14l3.5 2.5"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-blue-800 mt-4">
            TA @ Columbia Dept. of Computer Science
          </h2>
          <p className="text-gray-700">January 2025 - Current</p>
        </motion.div>

        {/* Google CSSI */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-blue-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* Google Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-12 w-12"
            >
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-blue-800 mt-4">
            CSSI Intern @ Google
          </h2>
          <p className="text-gray-700">June 2020 – Aug 2020</p>
          <p className="text-gray-600 max-w-2xl mt-2">
            Developed an interactive travel recommendation website, improving
            user engagement by 40%.
          </p>
        </motion.div>

        {/* Design The Future */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-blue-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* App Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v4m0 2v.01" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-blue-800 mt-4">
            App Development Intern @ Design The Future
          </h2>
          <p className="text-gray-700">June 2021 – Aug 2021</p>
          <p className="text-gray-600 max-w-2xl mt-2">
            Built &quot;Task Breaker&quot; app to improve user task organization by 70%.
          </p>
        </motion.div>

        {/* NYU Tisch */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center text-center"
        >
          <div className="bg-blue-100 p-4 rounded-full shadow-md flex justify-center items-center">
            {/* Better Gaming Controller Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <circle cx="8" cy="12" r="1.5" />
              <circle cx="16" cy="12" r="1.5" />
              <path d="M6 10h4" />
              <path d="M8 8v4" />
              <path d="M14 10h4" />
              <path d="M6 16l2-2" />
              <path d="M16 16l2-2" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-blue-800 mt-4">
            Game Designer Intern @ NYU Tisch
          </h2>
          <p className="text-gray-700">Feb 2021 – June 2021</p>
          <p className="text-gray-600 max-w-2xl mt-2">
            Created &quot;Just Keep Rolling&quot; video game, receiving 85% positive
            reviews.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Default Export
import AllSectionsLayout from "../components/AllSectionsLayout";

export default function WorkPage() {
  return <AllSectionsLayout scrollToSection="work" />;
}
