import React, { useRef, useEffect, useState } from 'react';
import { ThumbsUp, HandPhone, LoopLine, BlueCursorSplat } from './Stickers';

const SectionTwo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const track = trackRef.current;
      
      const { top } = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const trackWidth = track.scrollWidth;

      // Calculate how far down we are in the container
      // We start "scrolling" the horizontal part when the container hits the top of the viewport
      // The scrollable distance is containerHeight - viewportHeight
      const scrollDist = -top;
      const maxScroll = containerHeight - viewportHeight;

      if (scrollDist < 0) {
        setTranslateX(0);
      } else if (scrollDist > maxScroll) {
        // We ensure we show the end of the content
        setTranslateX(-(trackWidth - window.innerWidth));
      } else {
        // Calculate the percentage of scroll
        const percentage = scrollDist / maxScroll;
        // Move the track based on percentage * (total track width - viewport width)
        // Adding a bit of padding (100px) so it doesn't hit the edge exactly
        setTranslateX(-percentage * (trackWidth - window.innerWidth + 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // The Container: Height determines how long the user has to scroll to get through the content.
    // 300vh means the horizontal scroll lasts for 2 screen heights.
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#F3F2ED]">
      
      {/* The Sticky Window: Stays fixed while parent scrolls */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Horizontal Track */}
        <div 
          ref={trackRef}
          className="flex items-center whitespace-nowrap will-change-transform pl-10 md:pl-20"
          style={{ transform: `translateX(${translateX}px)` }}
        >
            
            {/* "we wanna" */}
            <div className="relative group mr-4 md:mr-10">
                <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                we wanna
                </span>
                {/* Sticker: Thumbs Up on 'wanna' */}
                <div className="absolute top-[10%] right-[10%] w-[12vh] h-[12vh] rotate-12 z-10">
                    <ThumbsUp className="w-full h-full drop-shadow-lg" />
                </div>
            </div>

            {/* "be" */}
            <div className="relative mr-4 md:mr-10">
                 <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                be
                </span>
                {/* Sticker: Loop on 'be' */}
                <div className="absolute -top-[30%] -left-[20%] w-[140%] h-[140%] pointer-events-none z-0">
                    <LoopLine className="w-full h-full text-black" />
                </div>
            </div>

            {/* "where" */}
            <div className="relative mr-4 md:mr-10">
                 <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                where
                </span>
                {/* Sticker: Blue Splat under/near 'where' */}
                 <div className="absolute top-[60%] -left-[10%] w-[12vh] h-[12vh] -rotate-12 z-20">
                    <BlueCursorSplat className="w-full h-full opacity-90" />
                </div>
            </div>

            {/* "the people" */}
             <div className="relative group mr-4 md:mr-10">
                 <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                the people
                </span>
                 {/* Sticker: Hand Phone on 'people' */}
                 <div className="absolute -top-[15%] right-[20%] w-[15vh] h-[15vh] rotate-6 group-hover:-rotate-6 transition-transform z-10">
                    <HandPhone className="w-full h-full drop-shadow-md" />
                </div>
            </div>

            {/* "are" */}
             <div className="relative pr-[20vw]">
                 <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                are
                </span>
            </div>

        </div>

        {/* Static Footer Content */}
        {/* This stays centered at the bottom while the text scrolls behind/above it */}
        <div className="absolute bottom-12 left-0 w-full px-6 flex justify-center z-30">
            <p className="max-w-xl text-center font-sans text-lg md:text-xl font-medium text-gray-800 leading-relaxed bg-[#F3F2ED]/80 backdrop-blur-sm p-4 rounded-xl">
                Audiences are more scattered <span className="font-serif italic font-normal">and</span> more reachable
                than ever. We help brands become leaders on the
                channels of the new mainstream.
            </p>
        </div>

      </div>
    </div>
  );
};

export default SectionTwo;