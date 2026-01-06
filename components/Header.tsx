import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
    onNavigate?: (page: 'home' | 'privacy' | 'terms' | 'refund' | 'about' | 'pricing' | 'product' | 'solution') => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Product", "Solution", "Pricing", "Company"];

  const handleLogoClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (onNavigate) onNavigate('home');
  };

  const handleNavClick = (e: React.MouseEvent, item: string) => {
      e.preventDefault();
      if (onNavigate) {
          if (item === 'Company') {
             onNavigate('about');
          } else if (item === 'Pricing') {
             onNavigate('pricing');
          } else if (item === 'Product') {
             onNavigate('product');
          } else if (item === 'Solution') {
             onNavigate('solution');
          } else {
             // For other items that might not have pages yet
             onNavigate('home'); 
          }
          setIsMenuOpen(false);
      }
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-10 md:py-8 flex justify-between items-center pointer-events-none">
        
        {/* Left: Redesigned Sipify Logo (Songo-style Typography) */}
        <div className="pointer-events-auto cursor-pointer select-none z-50" onClick={handleLogoClick}>
           <span className="font-sans font-black text-black text-3xl md:text-4xl tracking-[-0.08em] lowercase leading-none hover:scale-105 transition-transform duration-300 inline-block">
              sipify
           </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex pointer-events-auto items-center gap-8 bg-white/80 backdrop-blur-md px-10 py-4 rounded-full border border-black/10 shadow-sm hover:shadow-md transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => handleNavClick(e, item)}
              className="font-sans font-bold text-sm text-black uppercase tracking-wider hover:text-[#FF4D00] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF4D00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Desktop CTA & Mobile Hamburger */}
        <div className="pointer-events-auto z-50 flex items-center">
            
            {/* Desktop "Try Now" Button */}
            <a href="#" className="hidden md:block bg-black text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#FF4D00] transition-colors shadow-lg hover:scale-105 transform duration-200">
               Try Now
            </a>

            {/* Mobile Hamburger Menu Button */}
            <div 
              className="md:hidden cursor-pointer flex flex-col justify-center items-end p-2 gap-[6px] group z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <motion.div 
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
                  className="w-8 h-[3px] bg-black origin-center transition-all"
                />
                <motion.div 
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-8 h-[3px] bg-black transition-all"
                />
                <motion.div 
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-8 h-[3px] bg-black origin-center transition-all"
                />
            </div>
        </div>

      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-[#F3F2ED] z-40 flex flex-col items-center justify-center pointer-events-auto md:hidden"
              >
                  <div className="flex flex-col gap-8 text-center">
                      {navItems.map((item, i) => (
                          <motion.a
                              key={item}
                              href="#"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + i * 0.1 }}
                              className="font-sans font-black text-4xl text-black uppercase tracking-tight hover:text-[#FF4D00] transition-colors"
                              onClick={(e) => handleNavClick(e, item)}
                          >
                              {item}
                          </motion.a>
                      ))}
                      {/* Mobile Try Now Button Link */}
                      <motion.a
                        href="#"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 bg-black text-white px-8 py-4 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-[#FF4D00] active:scale-95 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                         Try Now
                      </motion.a>
                  </div>
              </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

export default Header;