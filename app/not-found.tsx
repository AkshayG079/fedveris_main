import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function NotFound() {
  return (
    <main className="bg-[#F9F8F6] text-[#2D2D2D] flex items-center justify-center min-h-screen p-6">
      
      <div className="max-w-xl w-full text-center animate-fade-in">

        {/* 404 */}
        <h1
          className={`${serif.className} text-8xl md:text-9xl font-light tracking-tighter mb-8`}
        >
          404
        </h1>

        {/* Text */}
        <section className="mb-12">
          <h2
            className={`${serif.className} italic text-2xl md:text-3xl mb-6 opacity-90`}
          >
            Lost in the quiet spaces.
          </h2>

        </section>

        {/* Button */}
        <nav className="flex justify-center mt-16">
          <Link
            href="/"
            className="group relative inline-block py-2 px-8 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:text-[#8C8476]"
          >
            <span className="relative z-10">Return Home</span>

            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#8C8476] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </Link>
        </nav>

      </div>
    </main>
  );
}