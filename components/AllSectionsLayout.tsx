import { useEffect } from 'react';
import Navbar from './Navbar';

// Named exports from my pages
import { HomeSection } from '../pages/home';
import { AboutMeSection } from '../pages/aboutme';
import { WorkSection } from '../pages/work';
import { EducationSection } from '../pages/education';
import { ProjectsSection } from '../pages/projects';
import { ContactSection } from '../pages/contact';

interface AllSectionsLayoutProps {
  scrollToSection?: string; // e.g. "home", "work", etc.
}

export default function AllSectionsLayout({ scrollToSection = 'home' }: AllSectionsLayoutProps) {
  useEffect(() => {
    const element = document.getElementById(scrollToSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToSection]);

  return (
    <main className="overflow-y-auto scroll-smooth">
      <Navbar />
      <section id="home"><HomeSection /></section>
      <section id="about"><AboutMeSection /></section>
      <section id="work"><WorkSection /></section>
      <section id="education"><EducationSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}