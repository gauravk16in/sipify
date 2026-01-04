import React from 'react';
import { HandsHeart, UnderlineLine } from './Stickers';

const SectionThree = () => {
  return (
    <div className="w-full bg-[#F3F2ED] flex flex-col items-center justify-center py-32 md:py-48 px-4 overflow-hidden">
      
      {/* Container for the text block */}
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center leading-[0.9]">
        
        {/* Part 1: Sans-Serif Block */}
        {/* "an agency built for the future." */}
        <h2 className="flex flex-col items-center">
            <span className="font-sans font-black text-[10vw] md:text-[6.5rem] lg:text-[8rem] tracking-tighter text-black">
            We are Sipify
            </span>
            <span className="font-sans font-black text-[10vw] md:text-[6.5rem] lg:text-[8rem] tracking-tighter text-black">
            from the future.
            </span>
        </h2>

        {/* Part 2: Serif Block with Decorations */}
        {/* "from TV to TikTok." */}
        <div className="relative mt-2 md:mt-8">
            <span className="font-serif italic text-[11vw] md:text-[7.5rem] lg:text-[9rem] text-black tracking-[-0.02em] relative z-10 leading-[1.1]">
                we make brands.
            </span>

            {/* Decoration: Hand-drawn Underline */}
            <div className="absolute top-[85%] left-0 w-full h-4 md:h-12 pointer-events-none z-0">
                <UnderlineLine className="w-full h-full opacity-90" />
            </div>

            {/* Sticker: Hands Heart */}
            {/* Positioned at the end of the line, overlapping "TikTok" */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-12 md:-right-16 w-20 h-20 md:w-40 md:h-40 rotate-12 z-20">
                <HandsHeart className="w-full h-full" />
            </div>
        </div>

      </div>

    </div>
  );
};

export default SectionThree;