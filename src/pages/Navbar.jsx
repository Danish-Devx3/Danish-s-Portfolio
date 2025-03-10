import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-16 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-[#121212]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="nav-left">
        <h1 className="text-white text-xl md:text-2xl font-semibold m-0">Danish Ansari</h1>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#121212]/95 md:hidden p-4 flex flex-col gap-4">
          <a href="#about" className="text-white hover:text-[#00bfff] transition-colors duration-300">About Me</a>
          <a href="#projects" className="text-white hover:text-[#00bfff] transition-colors duration-300">Projects</a>
          <a href="#skills" className="text-white hover:text-[#00bfff] transition-colors duration-300">My Skills</a>
          <a href="#contact" className="text-white hover:text-[#00bfff] transition-colors duration-300">Contact Me</a>
        </div>
      )}

      {/* Desktop Menu */}
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
