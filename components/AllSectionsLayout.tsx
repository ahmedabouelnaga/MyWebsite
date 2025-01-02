import { useEffect } from 'react';
import Navbar from './Navbar';

// Named exports from my pages
import { HomeSection } from '../pages/home';
import { WorkSection } from '../pages/work';
import { EducationSection } from '../pages/education';
import { ProjectsSection } from '../pages/projects';
import { ContactSection } from '../pages/contact';

interface AllSectionsLayoutProps {
  scrollToSection?: string; // e.g. "home", "work", etc.
}

export default function AllSectionsLayout({ scrollToSection }: AllSectionsLayoutProps) {
  useEffect(() => {
    if (scrollToSection) {
      const el = document.getElementById(scrollToSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [scrollToSection]);

  return (
    <div className="relative">
      <Navbar />
      <section id="home"><HomeSection /></section>
      <section id="work"><WorkSection /></section>
      <section id="education"><EducationSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
}