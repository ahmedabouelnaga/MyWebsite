// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
<nav className="
  sticky top-0 z-50
  bg-black/30
  backdrop-blur-md
  text-white
  px-6 py-4
  flex items-center justify-between
">
      <div className="text-xl font-bold">Ahmed Abouelnaga</div>
      <div className="space-x-6">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/work" className="hover:underline">
          Work
        </Link>
        <Link href="/education" className="hover:underline">
          Education
        </Link>
        <Link href="/photos" className="hover:underline">
          Photos
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
