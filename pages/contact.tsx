import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SlideInWhenVisible from '../components/animation/SlideInWhenVisible';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Add scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedbackMessage('Sending message...');
    setIsError(false);
    
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setFeedbackMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsError(false);
      } else {
        setFeedbackMessage(`Error: ${data.error || 'Failed to send message'}`);
        setIsError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFeedbackMessage('Error sending message. Please try again later.');
      setIsError(true);
    }
  };

  const formControls = {
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

  const formItemVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
      transition: { type: "spring", stiffness: 300, damping: 17 }
    },
    tap: { scale: 0.98 },
    hover: {
      y: -2,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    }
  };

  const labelVariants = {
    focus: {
      color: "#3B82F6",
      x: 5,
      transition: { type: "spring", stiffness: 300, damping: 17 }
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center p-4">
      <SlideInWhenVisible direction="top">
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-2"
        >
          Contact Me!
        </motion.h1>
        <p className="text-red-500 text-sm mb-4 text-center">(Not Active)</p>
      </SlideInWhenVisible>

      <SlideInWhenVisible direction="left" delay={0.2}>
        <h2 className="text-xl font-semibold text-gray-500 mb-4"></h2>
        <p className="mb-6 text-gray-600 text-center">
          I&apos;d love to hear from you! Fill out the form below
        </p>
      </SlideInWhenVisible>

      <SlideInWhenVisible direction="right" delay={0.4}>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
        >
          <motion.div className="mb-4">
            <motion.label
              variants={labelVariants}
              animate="normal"
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </motion.label>
            <motion.input
              variants={formItemVariants}
              whileFocus="focus"
              whileTap="tap"
              whileHover="hover"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </motion.div>
          <motion.div className="mb-4">
            <motion.label
              variants={labelVariants}
              animate="normal"
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </motion.label>
            <motion.input
              variants={formItemVariants}
              whileFocus="focus"
              whileTap="tap"
              whileHover="hover"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </motion.div>
          <motion.div className="mb-4">
            <motion.label
              variants={labelVariants}
              animate="normal"
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </motion.label>
            <motion.textarea
              variants={formItemVariants}
              whileFocus="focus"
              whileTap="tap"
              whileHover="hover"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </motion.div>
          
          {feedbackMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mb-4 p-3 rounded ${
                isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}
            >
              {feedbackMessage}
            </motion.div>
          )}
          
          <motion.button
            variants={formControls}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-full shadow-lg"
          >
            Contact Ahmed
          </motion.button>
        </motion.form>
      </SlideInWhenVisible>

      <SlideInWhenVisible direction="bottom" delay={0.6}>
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            background: "linear-gradient(to right, #4f46e5, #7c3aed)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://www.linkedin.com/in/ahmed-abouelnaga-2a8017208/', '_blank')}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg flex items-center justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, 0, -10, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <FaLinkedin className="mr-2" />
          </motion.div>
          LinkedIn
        </motion.button>
      </SlideInWhenVisible>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function ContactPage() {
  return <AllSectionsLayout scrollToSection="contact" />;
}