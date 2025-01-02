// components/Navbar.tsx
import Link from 'next/link';
import { useScrollSection } from '../hooks/useScrollSection';

export default function Navbar() {
  const currentSection = useScrollSection();

  const getLinkClass = (section: string) => {
    const baseClasses = "transition-colors duration-200 hover:text-blue-400";
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
        <Link href="#home" className={getLinkClass('home')}>
          Home
        </Link>
        <Link href="#work" className={getLinkClass('work')}>
          Work
        </Link>
        <Link href="#education" className={getLinkClass('education')}>
          Education
        </Link>
        <Link href="#projects" className={getLinkClass('projects')}>
          Projects
        </Link>
        <Link href="#contact" className={getLinkClass('contact')}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
