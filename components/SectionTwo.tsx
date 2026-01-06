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
      const scrollDist = -top;
      const maxScroll = containerHeight - viewportHeight;

      if (scrollDist < 0) {
        setTranslateX(0);
      } else if (scrollDist > maxScroll) {
        setTranslateX(-(trackWidth - window.innerWidth));
      } else {
        const percentage = scrollDist / maxScroll;
        setTranslateX(-percentage * (trackWidth - window.innerWidth + 100));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#F3F2ED]">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center">
        
        <div 
          ref={trackRef}
          className="flex items-center whitespace-nowrap will-change-transform pl-10 md:pl-20"
          style={{ transform: `translateX(${translateX}px)` }}
        >
            
            {/* "Creative" */}
            <div className="relative group mr-4 md:mr-10">
                <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                Creative
                </span>
                <div className="absolute top-[10%] right-[10%] w-[12vh] h-[12vh] rotate-12 z-10">
                    <ThumbsUp className="w-full h-full drop-shadow-lg" />
                </div>
            </div>

            {/* "Fatigue" */}
            <div className="relative mr-4 md:mr-10">
                 <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                fatigue
                </span>
                <div className="absolute -top-[30%] -left-[20%] w-[140%] h-[140%] pointer-events-none z-0">
                    <LoopLine className="w-full h-full text-black" />
                </div>
            </div>

            {/* "kills" */}
            <div className="relative mr-4 md:mr-10">
                 <span className="font-sans font-black text-[25vh] leading-none text-[#FF4D00] tracking-tighter">
                kills
                </span>
                 <div className="absolute top-[60%] -left-[10%] w-[12vh] h-[12vh] -rotate-12 z-20">
                    <BlueCursorSplat className="w-full h-full opacity-90" />
                </div>
            </div>

            {/* "growth" */}
             <div className="relative group mr-4 md:mr-10">
                 <span className="font-sans font-black text-[25vh] leading-none text-black tracking-tighter">
                growth.
                </span>
                 <div className="absolute -top-[15%] right-[20%] w-[15vh] h-[15vh] rotate-6 group-hover:-rotate-6 transition-transform z-10">
                    <HandPhone className="w-full h-full drop-shadow-md" />
                </div>
            </div>

            <div className="relative pr-[20vw]">
                 <span className="font-sans font-black text-[25vh] leading-none text-gray-300 tracking-tighter">
                (fix it)
                </span>
            </div>

        </div>

        <div className="absolute bottom-12 left-0 w-full px-6 flex justify-center z-30">
            <p className="max-w-xl text-center font-sans text-lg md:text-xl font-medium text-gray-800 leading-relaxed bg-[#F3F2ED]/80 backdrop-blur-sm p-4 rounded-xl">
                The average ad lifespan is <span className="font-black text-[#FF4D00]">4 days</span>. 
                Sipify generates data-backed variations to keep your ROAS high and your audience engaged.
            </p>
        </div>

      </div>
    </div>
  );
};

export default SectionTwo;