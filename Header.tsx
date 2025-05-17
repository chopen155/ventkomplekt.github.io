import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            ООО "Комплект"
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#products" className="text-gray-700 hover:text-primary transition-colors">
            Продукция
          </a>
          <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">
            Проекты
          </a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
            О компании
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Проекты
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
