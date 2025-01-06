// components/Navbar.tsx
import { useScrollSection } from '../hooks/useScrollSection';

export default function Navbar() {
  const currentSection = useScrollSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getLinkClass = (section: string) => {
    const baseClasses = "transition-colors duration-200 hover:text-blue-400 cursor-pointer";
    return currentSection === section
      ? `${baseClasses} text-blue-400 font-semibold border-b-2 border-blue-400`
      : `${baseClasses} text-white`;
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-bold text-white">Ahmed Abouelnaga</div>
        <div className="space-x-8 text-sm">
          {['home', 'about', 'work', 'education', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              onClick={(e) => handleNavClick(e, section)}
              className={getLinkClass(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}