import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">MyPortfolio</Link>
        </div>

        <div className="space-x-6">
          <Link href="/">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition">
              About
            </span>
          </Link>
          <Link href="/projects">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition">
              Projects
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

