import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LimeBurst, WhiteSquiggle, CameraIcon, SocialBadge, PinkTag } from './Stickers';

// Data for the Fanned Cards
const projects = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1549416878-b9ca95e9238e?q=80&w=1887&auto=format&fit=crop",
    alt: "Street Scene",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=1887&auto=format&fit=crop",
    alt: "Concert Crowd",
  },
  {
    id: 3, // Center Card (Main Focus)
    src: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop", // Festival vibe
    alt: "Festival People",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop",
    alt: "Girl Sunglasses",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1769&auto=format&fit=crop",
    alt: "Event Lighting",
  }
];

const SectionFour = () => {
  return (
    <div className="relative w-full h-[120vh] bg-black overflow-hidden flex flex-col items-center justify-center pt-32 md:pt-20">
      
      {/* --- Background Decorations --- */}
      
      {/* Top Left White Squiggle */}
      <div className="absolute top-20 left-10 md:top-32 md:left-32 w-24 h-24 md:w-32 md:h-32 opacity-90 z-0">
        <WhiteSquiggle className="w-full h-full rotate-[-15deg]" />
      </div>

      {/* Bottom Right Lime Burst */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] z-0 pointer-events-none">
        <LimeBurst className="w-full h-full" />
      </div>


      {/* --- The Fan Deck --- */}
      <div className="relative z-10 w-full max-w-6xl h-[60vh] flex items-center justify-center mt-10 md:mt-0">
        
        {/* Card 1: Far Left */}
        <motion.div 
            className="absolute w-[220px] h-[380px] md:w-[280px] md:h-[500px] border-4 border-white rounded-[20px] overflow-hidden bg-gray-800 shadow-2xl origin-bottom"
            style={{ 
                rotate: -20, 
                x: -240, 
                y: 60, // Increased Y to push down
                zIndex: 10 
            }}
            whileHover={{ scale: 1.05, zIndex: 50 }}
        >
            <img src={projects[0].src} alt={projects[0].alt} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Card 2: Mid Left */}
        <motion.div 
            className="absolute w-[220px] h-[380px] md:w-[280px] md:h-[500px] border-4 border-white rounded-[20px] overflow-hidden bg-gray-800 shadow-2xl origin-bottom"
            style={{ 
                rotate: -10, 
                x: -120, 
                y: 20, // Increased Y to push down
                zIndex: 20 
            }}
            whileHover={{ scale: 1.05, zIndex: 50 }}
        >
            <img src={projects[1].src} alt={projects[1].alt} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Card 5: Far Right */}
        <motion.div 
            className="absolute w-[220px] h-[380px] md:w-[280px] md:h-[500px] border-4 border-white rounded-[20px] overflow-hidden bg-gray-800 shadow-2xl origin-bottom"
            style={{ 
                rotate: 20, 
                x: 240, 
                y: 60, // Increased Y to push down
                zIndex: 10 
            }}
            whileHover={{ scale: 1.05, zIndex: 50 }}
        >
            <img src={projects[4].src} alt={projects[4].alt} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Card 4: Mid Right */}
        <motion.div 
            className="absolute w-[220px] h-[380px] md:w-[280px] md:h-[500px] border-4 border-white rounded-[20px] overflow-hidden bg-gray-800 shadow-2xl origin-bottom"
            style={{ 
                rotate: 10, 
                x: 120, 
                y: 20, // Increased Y to push down
                zIndex: 20 
            }}
            whileHover={{ scale: 1.05, zIndex: 50 }}
        >
            <img src={projects[3].src} alt={projects[3].alt} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Card 3: CENTER (Main) */}
        <motion.div 
            className="absolute w-[240px] h-[420px] md:w-[320px] md:h-[560px] border-[6px] border-white rounded-[24px] bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] origin-center z-40"
            style={{ 
                rotate: 0, 
                x: 0, 
                y: 0 
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
        >
            {/* Image */}
            <div className="w-full h-full overflow-hidden rounded-[18px]">
                 <img src={projects[2].src} alt={projects[2].alt} className="w-full h-full object-cover" draggable={false} />
            </div>

            {/* Subtitle inside video (simulated) */}
            <div className="absolute bottom-16 left-0 w-full text-center px-4">
                <p className="font-sans font-bold text-white text-lg leading-tight drop-shadow-md">
                    Gaan jullie het<br/>weer laat maken vandaag?
                </p>
            </div>

            {/* Sticker: Social Badge */}
            <div className="absolute top-8 right-4 rotate-[5deg]">
                <SocialBadge />
            </div>

            {/* Sticker: Camera Icon */}
            <div className="absolute bottom-20 -left-12 rotate-[-12deg] w-20 h-20 text-white drop-shadow-md">
                <CameraIcon className="w-full h-full" />
            </div>

        </motion.div>

      </div>

      {/* --- Footer Content --- */}
      <div className="relative z-50 flex flex-col items-center mt-24 md:mt-32">
        
        {/* Pink Tag */}
        <div className="mb-4">
            <PinkTag text="douwe egberts" />
        </div>

        {/* Headline */}
        <h2 className="text-center font-sans font-black text-white text-3xl md:text-5xl leading-[0.9] tracking-tight">
            feestje bouwe?<br/>
            app douwe
        </h2>

      </div>

    </div>
  );
};

export default SectionFour;