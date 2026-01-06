import React from 'react';
import { motion } from 'framer-motion';

const albums = [
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=600",
  "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=600",
  "https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=600",
  "https://images.unsplash.com/photo-1621360841012-780129759c3f?q=80&w=600",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600",
  "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=600",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600",
  "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=600",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600",
  "https://images.unsplash.com/photo-1504898751436-e569ca454dc9?q=80&w=600",
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600",
  "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=600",
];

// Tripling the list to ensure a smooth infinite loop without gaps
const marqueeAlbums = [...albums, ...albums, ...albums];

const SectionFour = () => {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#F3F2ED] overflow-hidden flex flex-col items-center justify-start pt-32 pb-20">
       
       {/* --- Layer 1: Foreground Header --- */}
       <div className="relative z-40 mb-10 text-center px-4 flex flex-col items-center leading-[0.9]">
          <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-black">
            dominate
          </h2>
          <div className="relative inline-block mt-2">
             <span className="font-serif italic font-bold text-[#FF4D00] text-5xl md:text-7xl lg:text-8xl tracking-tighter relative z-10">
                the feed
            </span>
            {/* Hand-drawn underline */}
            <svg className="absolute -bottom-4 left-0 w-full h-8 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M5 12 Q 50 20, 95 8" fill="none" stroke="#FF4D00" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
       </div>

       {/* --- Layer 2: Infinite Diagonal Marquee --- */}
       {/* Positioned absolutely to span width but pushed down to 55% to clear the text above */}
       <div className="absolute top-[55%] left-0 w-full -translate-y-1/2 z-20 rotate-[-6deg] origin-center">
          <div className="flex items-center justify-center">
             
             {/* The Track: Moves continuously to the left */}
             <motion.div
                className="flex items-center pl-10 md:pl-0"
                initial={{ x: 0 }}
                animate={{ x: "-33.33%" }} // Move 1/3 of width (since we have 3 sets of albums)
                transition={{ 
                    duration: 30, // Speed of the stream
                    ease: "linear", 
                    repeat: Infinity 
                }}
                style={{ width: "max-content" }}
             >
                {marqueeAlbums.map((src, i) => {
                    // Create a random-looking rotation pattern
                    const rotation = (i % 5) * 2 - 4; // -4, -2, 0, 2, 4
                    // Stagger vertical offset slightly for "messy" look
                    const yOffset = (i % 3) * 10 - 10; 

                    return (
                        <div 
                            key={i} 
                            className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0 -ml-16 md:-ml-24 first:ml-0"
                            style={{ 
                                zIndex: i, // Ensure right cards sit ON TOP of left cards
                                transform: `translateY(${yOffset}px)`
                            }} 
                        >
                            {/* Card Inner */}
                            <div 
                                className="w-full h-full p-2 bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 transition-transform duration-300 hover:scale-110 hover:-translate-y-4 hover:z-50 hover:shadow-2xl"
                                style={{ transform: `rotate(${rotation}deg)` }}
                            >
                                <img 
                                    src={src} 
                                    alt={`album-cover-${i}`}
                                    className="w-full h-full object-cover rounded-xl select-none pointer-events-none" 
                                />
                            </div>
                        </div>
                    );
                })}
             </motion.div>
          </div>
       </div>

    </section>
  );
};

export default SectionFour;