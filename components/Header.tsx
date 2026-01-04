import React from 'react';
import { FilledScribbleCircle, Sparkle, WhatsappIcon } from './Stickers';

const Header = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-10 md:py-8 flex justify-between items-start pointer-events-none">
      
      {/* Left: Reimagined Sipify Logo */}
      <div className="pointer-events-auto cursor-pointer group relative -ml-2 -mt-2">
         {/* Background Sticker Shape */}
         <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-300">
             <FilledScribbleCircle className="w-28 h-28 md:w-36 md:h-36 text-[#FF4D00] drop-shadow-md" />
         </div>
         
         {/* Logo Text Layer */}
         <div className="relative w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-300">
             <div className="flex items-baseline -space-x-1">
                <span className="font-sans font-black text-white text-3xl md:text-4xl tracking-tighter">sip</span>
                <span className="font-serif italic font-bold text-white text-3xl md:text-4xl tracking-tighter">ify</span>
             </div>
             {/* Small decorations inside */}
             <Sparkle className="absolute top-6 right-4 w-5 h-5 text-yellow-300 animate-pulse" />
         </div>
      </div>

    </nav>
  );
};

export default Header;