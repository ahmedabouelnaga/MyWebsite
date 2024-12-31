import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
      <section className="text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-4 transition">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          I’m a passionate software engineer eager to build innovative solutions.
        </p>
        <Link href="/projects">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            View My Projects
          </button>
        </Link>
      </section>
    </main>
  );
}
