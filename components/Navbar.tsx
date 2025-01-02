// components/Navbar.tsx
import { useScrollSection } from '../hooks/useScrollSection';

export default function Navbar() {
  const currentSection = useScrollSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
        // Add a longer duration for smoother animation
      });

      // Add active state animation
      element.classList.add('scroll-highlight');
      setTimeout(() => {
        element.classList.remove('scroll-highlight');
      }, 1000);
    }
  };

  const getLinkClass = (section: string) => {
    const baseClasses = "transition-colors duration-200 hover:text-blue-400 cursor-pointer";
    return currentSection === section
      ? `${baseClasses} text-blue-400 font-semibold`
      : `${baseClasses} text-white`;
  };

  return (
    <nav className="
      fixed top-0 z-50 w-full
      bg-black/30
      backdrop-blur-md
      text-white
      px-4 py-2
      flex items-center justify-between
    ">
      <div className="text-lg font-bold">Ahmed Abouelnaga</div>
      <div className="space-x-4 text-sm">
        <a onClick={(e) => handleNavClick(e, 'home')} className={getLinkClass('home')}>
          Home
        </a>
        <a onClick={(e) => handleNavClick(e, 'work')} className={getLinkClass('work')}>
          Work
        </a>
        <a onClick={(e) => handleNavClick(e, 'education')} className={getLinkClass('education')}>
          Education
        </a>
        <a onClick={(e) => handleNavClick(e, 'projects')} className={getLinkClass('projects')}>
          Projects
        </a>
        <a onClick={(e) => handleNavClick(e, 'contact')} className={getLinkClass('contact')}>
          Contact
        </a>
      </div>
    </nav>
  );
}
