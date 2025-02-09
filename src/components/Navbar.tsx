import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img src="https://i.ibb.co/pnJqFjc/Logo-PNG-01.png" alt="MENA Launcher" className="h-12" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              عن الشركة
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              تواصل معنا
            </button>
            <a
              href="https://tally.so/r/me092e"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90"
            >
              ابدأ الآن
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              خدماتنا
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              عن الشركة
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              تواصل معنا
            </button>
            <a
              href="https://tally.so/r/me092e"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium bg-primary text-white rounded-md"
            >
              ابدأ الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;