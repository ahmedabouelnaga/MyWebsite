// components/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  const getLinkClass = (path: string) => {
    const baseClasses = "transition-colors duration-200 hover:text-blue-400";
    return currentPath === path
      ? `${baseClasses} text-blue-400 font-semibold`
      : `${baseClasses} text-white`;
  };

  return (
    <nav className="
      sticky top-0 z-50
      bg-black/30
      backdrop-blur-md
      text-white
      px-4 py-2
      flex items-center justify-between
    ">
      <div className="text-lg font-bold">Ahmed Abouelnaga</div>
      <div className="space-x-4 text-sm">
        <Link href="/home" className={getLinkClass('/home')}>
          Home
        </Link>
        <Link href="/work" className={getLinkClass('/work')}>
          Work
        </Link>
        <Link href="/education" className={getLinkClass('/education')}>
          Education
        </Link>
        <Link href="/projects" className={getLinkClass('/projects')}>
          Projects
        </Link>
        <Link href="/contact" className={getLinkClass('/contact')}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
