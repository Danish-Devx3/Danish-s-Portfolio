import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-[#121212]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="nav-left">
        <h1 className="text-white text-2xl font-semibold m-0">Danish Ansari</h1>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-white hover:text-[#00bfff] transition-colors duration-300">About Me</a>
        <a href="#projects" className="text-white hover:text-[#00bfff] transition-colors duration-300">Projects</a>
        <a href="#skills" className="text-white hover:text-[#00bfff] transition-colors duration-300">My Skills</a>
        <a href="#contact" className="text-white hover:text-[#00bfff] transition-colors duration-300">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
