const Navbar = () => {
  return (
    <div className="flex justify-center py-6">
      <nav className="flex gap-6 text-sm font-medium text-neutral-400">
        <a href="#about" className="hover:text-neutral-100 transition-colors">Home</a>
        <a href="#projects" className="hover:text-neutral-100 transition-colors">Projects</a>
        <a href="#experience" className="hover:text-neutral-100 transition-colors">Experience</a>
        <a href="#contact" className="hover:text-neutral-100 transition-colors">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;


