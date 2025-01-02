import { useEffect } from 'react';

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
    // Single‐page vertical scroll
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden scroll-smooth">
      {/* We do NOT include <Navbar /> here anymore */}
      <main>
        {/* Each section stacked vertically */}
        <section id="home">
          <HomeSection />
        </section>

        <section id="work">
          <WorkSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
