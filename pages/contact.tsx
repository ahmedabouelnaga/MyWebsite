import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SlideInWhenVisible from '../components/animation/SlideInWhenVisible';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Add scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add alert for now since form is inactive
    alert("Contact form is currently inactive");
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <SlideInWhenVisible direction="top">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Let&apos;s Connect
            </h1>
            <p className="text-gray-300 text-lg">
              Have a question or want to work together?
            </p>
            <p className="text-red-400 text-sm mt-2">(Contact Form Currently Inactive)</p>
          </div>
        </SlideInWhenVisible>

        <SlideInWhenVisible direction="right">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-indigo-500/20"
          >
            {/* Form Fields */}
            <motion.div className="space-y-6">
              {/* Name Input */}
              <div>
                <motion.label
                  className="block text-indigo-300 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </motion.label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <motion.label
                  className="block text-indigo-300 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </motion.label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <motion.label
                  className="block text-indigo-300 font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </motion.label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-lg"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </SlideInWhenVisible>

        {/* LinkedIn Button */}
        <SlideInWhenVisible direction="left" delay={0.2}>
          <motion.button
            onClick={() => window.open('https://www.linkedin.com/in/ahmed-abouelnaga-2a8017208/', '_blank')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 mx-auto flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </motion.button>
        </SlideInWhenVisible>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 mt-12"
        >
          Ahmed Abouelnaga © {new Date().getFullYear()}
        </motion.p>
      </div>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function ContactPage() {
  return <AllSectionsLayout scrollToSection="contact" />;
}