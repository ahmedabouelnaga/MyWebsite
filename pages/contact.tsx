import { useState, ChangeEvent, FormEvent } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Form submission error:', error); // Log submission errors
      alert('Error sending message.');
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

  return (
    <div id="contact" className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="text-3xl font-bold text-blue-700 mb-4"
      >
        Contact Me
      </motion.h1>
      <h2 className="text-xl font-semibold text-gray-500 mb-4">(Not Active)</h2>
      <p className="mb-6 text-gray-600 text-center">
        I’d love to hear from you! Fill out the form below
        <a href="mailto:yourname@example.com" className="text-blue-600 underline">
        </a>
      </p>
      <motion.form
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <motion.div variants={formControls} className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </motion.div>
        <motion.div variants={formControls} className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </motion.div>
        <motion.div variants={formControls} className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </motion.div>
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
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
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
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function ContactPage() {
  return <AllSectionsLayout scrollToSection="contact" />;
}