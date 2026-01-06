import React from 'react';
import { motion } from 'framer-motion';
import { BlueBlob, FingerHeartSticker, ConnectorArrow } from './Stickers';

const partners = [
  { id: 1, color: '#0668E1', domain: 'meta.com', name: 'Meta', textDark: false }, // Meta Blue
  { id: 2, color: '#FFFFFF', domain: 'beminimalist.co', name: 'Minimalist', textDark: true }, // White
  { id: 3, color: '#000000', domain: 'nike.com', name: 'Nike', textDark: false }, // Black
  { id: 4, color: '#FC8019', domain: 'swiggy.com', name: 'Swiggy', textDark: false }, // Swiggy Orange
  { id: 5, color: '#E4002B', domain: 'kwalitywalls.in', name: 'Kwality Walls', textDark: false }, // Kwality Red
  { id: 6, color: '#F5F5F5', domain: 'amul.com', name: 'Amul', textDark: true }, // Amul Light
  { id: 7, color: '#CB202D', domain: 'zomato.com', name: 'Zomato', textDark: false }, // Zomato Red
  { id: 8, color: '#FFD700', domain: 'lego.com', name: 'Lego', textDark: true }, // Lego Yellow (pop)
];

const SectionSeven = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F3EF] flex flex-col md:flex-row overflow-hidden">
      
      {/* --- Left Half: Static Text --- */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative flex flex-col items-center justify-center p-8 z-10">
        
        {/* Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0">
             <BlueBlob className="w-full h-full opacity-100" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center flex flex-col items-center">
            <h2 className="font-sans font-black text-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                proud to have
                <br/>
                worked
            </h2>
            
            <div className="relative mt-2">
                 <span className="font-serif italic font-bold text-[#FF4D00] text-5xl md:text-7xl lg:text-8xl relative z-10">
                    with:
                </span>
                {/* Hand-drawn underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-6 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M5 10 Q 50 18, 95 5" fill="none" stroke="#FF4D00" strokeWidth="4" strokeLinecap="round" />
                </svg>
            </div>

            {/* Sticker: Finger Heart */}
            <div className="absolute -bottom-32 md:-bottom-40 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 z-20">
                <FingerHeartSticker className="w-full h-full rotate-[-10deg]" />
            </div>

             {/* Connector Arrow */}
             <div className="absolute top-[80%] left-[60%] w-[150px] md:w-[250px] h-[100px] z-10 pointer-events-none">
                <ConnectorArrow className="w-full h-full rotate-12" />
             </div>
        </div>

      </div>

      {/* --- Right Half: Infinite Vertical Marquee --- */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen bg-[#F5F3EF] relative overflow-hidden flex justify-center gap-6 px-4 md:px-12 py-4">
        
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F5F3EF] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F5F3EF] to-transparent z-20 pointer-events-none" />


        {/* Column 1: Scrolling UP */}
        <div className="w-1/2 max-w-[240px] h-full overflow-hidden">
            <motion.div 
                className="flex flex-col gap-6"
                animate={{ y: [0, -1600] }} // Increased distance for more items
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 30 // Slower speed
                }}
            >
                {/* Triple render for seamless loop */}
                {[...partners, ...partners, ...partners].map((partner, i) => (
                    <div 
                        key={`col1-${i}`} 
                        className="w-full aspect-square rounded-[24px] flex items-center justify-center shadow-lg relative group overflow-hidden p-8"
                        style={{ backgroundColor: partner.color }}
                    >
                         {/* Logo from Brandfetch */}
                         <img 
                            src={`https://cdn.brandfetch.io/${partner.domain}/w/400`}
                            alt={`${partner.name} logo`}
                            className={`w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110 select-none pointer-events-none`}
                            // Removed filter to show original brand colors and avoid issues with non-transparent images
                         />
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Column 2: Scrolling DOWN */}
        <div className="w-1/2 max-w-[240px] h-full overflow-hidden pt-12"> {/* Offset starting position */}
            <motion.div 
                 className="flex flex-col gap-6"
                 animate={{ y: [-1600, 0] }} // Reverse direction
                 transition={{ 
                     repeat: Infinity, 
                     ease: "linear", 
                     duration: 35 // Different speed
                 }}
            >
                 {[...partners, ...partners, ...partners].reverse().map((partner, i) => (
                     <div 
                        key={`col2-${i}`} 
                        className="w-full aspect-square rounded-[24px] flex items-center justify-center shadow-lg relative group overflow-hidden p-8"
                        style={{ backgroundColor: partner.color }}
                    >
                         <img 
                            src={`https://cdn.brandfetch.io/${partner.domain}/w/400`}
                            alt={`${partner.name} logo`}
                            className={`w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110 select-none pointer-events-none`}
                            // Removed filter
                         />
                    </div>
                ))}
            </motion.div>
        </div>

      </div>

    </div>
  );
};

export default SectionSeven;