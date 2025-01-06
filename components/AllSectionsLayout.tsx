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
    <main className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <Navbar />
      <section id="home" className="snap-start h-screen"><HomeSection /></section>
      <section id="about" className="snap-start h-screen"><AboutMeSection /></section>
      <section id="work" className="snap-start h-screen"><WorkSection /></section>
      <section id="education" className="snap-start h-screen"><EducationSection /></section>
      <section id="projects" className="snap-start h-screen"><ProjectsSection /></section>
      <section id="contact" className="snap-start h-screen"><ContactSection /></section>
    </main>
  );
}