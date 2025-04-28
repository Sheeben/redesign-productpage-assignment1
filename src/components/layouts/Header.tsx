import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  featuresRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  faqRef: React.RefObject<HTMLElement>;
  homeRef: React.RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({ 
  scrollToSection, 
  featuresRef, 
  contactRef, 
  aboutRef,
  faqRef,
  homeRef
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-blue-600 font-bold text-2xl flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(homeRef);
              }}
            >
              <span className="text-teal-500">Go</span>
              <span className="text-blue-600">GetWell</span>
              <span className="text-teal-500 text-xl">-ai</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-600
                      ${scrolled ? 'text-gray-700' : 'text-gray-800'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.label === 'Home') scrollToSection(homeRef);
                      if (item.label === 'Features') scrollToSection(featuresRef);
                      if (item.label === 'About') scrollToSection(aboutRef);
                      if (item.label === 'FAQ') scrollToSection(faqRef);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              onClick={() => scrollToSection(contactRef)} 
              variant="primary"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <Container>
            <ul className="py-4 space-y-4">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-blue-600"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      if (item.label === 'Home') scrollToSection(homeRef);
                      if (item.label === 'Features') scrollToSection(featuresRef);
                      if (item.label === 'About') scrollToSection(aboutRef);
                      if (item.label === 'FAQ') scrollToSection(faqRef);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button 
                  onClick={() => {
                    scrollToSection(contactRef);
                    setIsMenuOpen(false);
                  }} 
                  variant="primary"
                  className="w-full"
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;