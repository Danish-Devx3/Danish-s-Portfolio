import { ul } from "framer-motion/client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/10 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="max-w-8xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#2969ff] via-sky-500 to-[#376deda1] text-transparent bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Danish Ansari
        </a>
        <ul className="hidden text-neutral-800 md:flex gap-10 text-sm md:text-base font-medium">
          <li className="opacity-70 hover:opacity-100 transition-all duration-300">
            <a href="#about">About</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-all duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-all duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <BiMenu className="text-3xl text-indigo-500" />
        </button>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/10  border-b border-gray-800 py-16 text-center">
            <li className="group px-10 opacity-80 hover:opacity-100 transition-all duration-300">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">About</span>
              </a>
            </li>
            <li className="group px-10 opacity-80 hover:opacity-100 transition-all duration-300">
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Projects</span>
              </a>
            </li>
            <li className="group px-10 opacity-80 hover:opacity-100 transition-all duration-300">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Contact</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
