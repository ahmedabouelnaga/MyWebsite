import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-6 py-4">
      <div className="text-xl font-bold text-blue-700">My Portfolio</div>
      <div className="space-x-6">
        <Link href="/home" className="text-blue-700 hover:text-blue-900 transition">
          Home
        </Link>
        <Link href="/education" className="text-blue-700 hover:text-blue-900 transition">
          Education
        </Link>
        <Link href="/work" className="text-blue-700 hover:text-blue-900 transition">
          Work
        </Link>
        <Link href="/about" className="text-blue-700 hover:text-blue-900 transition">
          About
        </Link>
        <Link href="/projects" className="text-blue-700 hover:text-blue-900 transition">
          Projects
        </Link>
        <Link href="/contact" className="text-blue-700 hover:text-blue-900 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
