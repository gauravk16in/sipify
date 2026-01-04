import React from 'react';
import { HandDrawnOval, Sparkle } from './Stickers';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#C9A52C]">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#C9A52C]/80 mix-blend-multiply z-10" /> {/* Mustard yellow tint overlay */}
        <div className="absolute inset-0 bg-black/10 z-10" /> {/* Slight dim for white text pop */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-80"
          poster="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop"
        >
          <source 
            src="https://videos.pexels.com/video-files/5977274/5977274-hd_1920_1080_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Layer */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end pb-32 md:justify-center md:pb-0 items-center text-center px-2">
        
        {/* Main Headline Container */}
        {/* Using extreme tight leading and tracking for that 'packed' look */}
        <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
          
          {/* Row 1: "we make" "advertising" "for" */}
          <div className="flex flex-wrap justify-center items-baseline gap-x-3 md:gap-x-6 w-full leading-[0.8]">
            
             <span className="font-sans font-black text-white text-[13vw] md:text-[8.5rem] lg:text-[10rem] tracking-[-0.08em] lowercase drop-shadow-lg">
              we make
            </span>

            <span className="font-serif italic font-semibold text-white text-[11vw] md:text-[8rem] lg:text-[9.5rem] tracking-[-0.05em] lowercase drop-shadow-lg z-10">
              advertising
            </span>

             <span className="font-sans font-black text-white text-[13vw] md:text-[8.5rem] lg:text-[10rem] tracking-[-0.08em] lowercase drop-shadow-lg">
              for
            </span>
          </div>

          {/* Row 2: "the new" "mainstream" */}
          <div className="flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6 w-full leading-[0.8] -mt-1 md:-mt-4">
             <span className="font-sans font-black text-white text-[13vw] md:text-[8.5rem] lg:text-[10rem] tracking-[-0.08em] lowercase drop-shadow-lg">
              the new
            </span>
            
            {/* The emphasized word */}
            <div className="relative inline-block mx-2">
                <span className="relative z-10 font-sans font-black text-white text-[13vw] md:text-[8.5rem] lg:text-[10rem] tracking-[-0.08em] lowercase drop-shadow-lg">
                  mainstream
                </span>
                
                {/* Hand-drawn Oval */}
                <HandDrawnOval className="w-[110%] h-[140%] -top-[20%] -left-[5%] z-0" />
                
                {/* Sparkle */}
                <Sparkle className="w-12 h-12 md:w-24 md:h-24 -right-6 -top-2 md:-right-16 md:top-4 animate-pulse z-20" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;