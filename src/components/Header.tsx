
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Venue', href: '#venue' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-lg bg-background/90 shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="z-50">
          <h2 className="text-2xl font-display font-semibold">
            Walpole <span className="text-gold">Summit</span>
          </h2>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a 
            href="#" 
            className="ml-2 luxury-button"
          >
            <span>Register</span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="z-50 md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-background backdrop-blur-lg transition-opacity duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-display"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              className="mt-4 luxury-button"
              onClick={toggleMenu}
            >
              <span>Register</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
