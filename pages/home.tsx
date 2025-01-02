// pages/home.tsx

export function HomeSection() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/public/home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Foreground Content Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Ahmed Abouelnaga
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          CS @ Columbia University
        </p>
        <button className="px-6 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition">
          Find Out More!
        </button>
      </div>
    </div>
  );
}

import AllSectionsLayout from '../components/AllSectionsLayout';

export default function HomePage() {
  return <AllSectionsLayout scrollToSection="home" />;
}
