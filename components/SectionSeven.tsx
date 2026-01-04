import React from 'react';
import { motion } from 'framer-motion';
import { BlueBlob, FingerHeartSticker, ConnectorArrow } from './Stickers';

// --- Placeholder Logos (SVG Components) ---
// Using simple text/shapes to simulate logos as requested
const LogoGetir = () => (
    <svg viewBox="0 0 100 40" className="w-24 h-auto fill-white">
        <text x="50" y="25" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="24">getir</text>
    </svg>
);
const LogoAceTate = () => (
    <svg viewBox="0 0 100 60" className="w-24 h-auto fill-white">
         <text x="50" y="25" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="18">ace &</text>
         <text x="50" y="45" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="18">tate</text>
    </svg>
);
const LogoOxxio = () => (
    <svg viewBox="0 0 120 40" className="w-28 h-auto fill-none stroke-white stroke-[3]">
        <text x="60" y="30" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="30" fill="none" stroke="white" strokeWidth="2">OXXIO</text>
    </svg>
);
const LogoKFC = () => (
    <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-white rounded-full mb-1 flex items-center justify-center">
             <span className="text-black font-black">KFC</span>
        </div>
    </div>
);
const LogoNetflix = () => (
    <svg viewBox="0 0 100 30" className="w-28 h-auto fill-white">
        <text x="50" y="22" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="24" letterSpacing="1">NETFLIX</text>
    </svg>
);
const LogoANWB = () => (
    <svg viewBox="0 0 100 50" className="w-24 h-auto">
        <ellipse cx="50" cy="25" rx="40" ry="20" fill="none" stroke="white" strokeWidth="3" />
        <text x="50" y="30" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="white">anwb</text>
    </svg>
);

const partners = [
  { id: 1, color: '#2D7A65', logo: <LogoGetir /> }, // Deep Green
  { id: 2, color: '#D9F99D', logo: <LogoAceTate />, textDark: true }, // Lime (Dark Text for contrast)
  { id: 3, color: '#903250', logo: <LogoOxxio /> }, // Burgundy
  { id: 4, color: '#E0Aaff', logo: <LogoKFC /> }, // Purple
  { id: 5, color: '#4D79FF', logo: <LogoNetflix /> }, // Bright Blue
  { id: 6, color: '#9F3E50', logo: <LogoANWB /> }, // Reddish
  // Duplicates for seamless loop
  { id: 11, color: '#2D7A65', logo: <LogoGetir /> },
  { id: 12, color: '#D9F99D', logo: <LogoAceTate />, textDark: true },
  { id: 13, color: '#903250', logo: <LogoOxxio /> },
  { id: 14, color: '#E0Aaff', logo: <LogoKFC /> },
  { id: 15, color: '#4D79FF', logo: <LogoNetflix /> },
  { id: 16, color: '#9F3E50', logo: <LogoANWB /> },
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
                 <span className="font-serif italic font-bold text-black text-5xl md:text-7xl lg:text-8xl relative z-10">
                    with:
                </span>
                {/* Hand-drawn underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-6 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M5 10 Q 50 18, 95 5" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
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
                animate={{ y: [0, -1200] }} // Adjust based on height of items
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 20 // Slow continuous speed
                }}
            >
                {/* Render items twice ensures loop */}
                {[...partners, ...partners].map((partner, i) => (
                    <div 
                        key={`col1-${i}`} 
                        className="w-full aspect-square rounded-[24px] flex items-center justify-center shadow-lg relative group overflow-hidden"
                        style={{ backgroundColor: partner.color }}
                    >
                         {/* Logo */}
                         <div className={`transform transition-transform duration-300 group-hover:scale-110 ${partner.textDark ? 'text-black fill-black' : 'text-white fill-white'}`}>
                            {partner.logo}
                         </div>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Column 2: Scrolling DOWN */}
        <div className="w-1/2 max-w-[240px] h-full overflow-hidden pt-12"> {/* Offset starting position */}
            <motion.div 
                 className="flex flex-col gap-6"
                 animate={{ y: [-1200, 0] }} // Reverse direction
                 transition={{ 
                     repeat: Infinity, 
                     ease: "linear", 
                     duration: 25 // Slightly different speed for dynamic feel
                 }}
            >
                 {[...partners, ...partners].reverse().map((partner, i) => (
                     <div 
                        key={`col2-${i}`} 
                        className="w-full aspect-square rounded-[24px] flex items-center justify-center shadow-lg relative group overflow-hidden"
                        style={{ backgroundColor: partner.color }}
                    >
                         <div className={`transform transition-transform duration-300 group-hover:scale-110 ${partner.textDark ? 'text-black fill-black' : 'text-white fill-white'}`}>
                            {partner.logo}
                         </div>
                    </div>
                ))}
            </motion.div>
        </div>

      </div>

    </div>
  );
};

export default SectionSeven;
