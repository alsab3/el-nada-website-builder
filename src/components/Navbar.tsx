
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { name: t('team'), path: '/team' },
    { name: t('equipment'), path: '/equipment' },
    { name: t('projects'), path: '/projects' },
    { name: t('quality'), path: '/quality' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl md:text-2xl text-construction">
              El Nada <span className="text-construction-gold">Group</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-construction-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={toggleLanguage}
              variant="outline" 
              size="sm"
              className="ml-4 border-construction hover:bg-construction hover:text-white"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button 
              onClick={toggleLanguage}
              variant="outline" 
              size="sm"
              className="mr-2 border-construction hover:bg-construction hover:text-white"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-construction-accent"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-construction-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
