import { useState, ChangeEvent, FormEvent } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SlideInWhenVisible from '../components/animation/SlideInWhenVisible';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('Missing EmailJS configuration');
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-tl from-black via-gray-900 to-emerald-950 px-6 py-24 relative overflow-hidden"
    >
      {/* Add animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/3 -right-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/3 -left-48 bg-teal-500/5 rounded-full blur-3xl"></div>
        {/* Add connecting lines animation */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        <SlideInWhenVisible direction="top">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Let&apos;s Connect
            </h1>
            <p className="text-gray-300 text-lg">
              Have a question or want to work together?
            </p>
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
                disabled={status === 'loading'}
                className={`w-full py-4 ${
                  status === 'loading' 
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                } text-white rounded-lg font-medium`}
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-400 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-red-400 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.div>
          </motion.form>
        </SlideInWhenVisible>

        {/* LinkedIn Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.linkedin.com/in/ahmed-abouelnaga-2a8017208/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

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