import React from 'react';
import { motion } from 'framer-motion';
import { GoodVibesSticker, FistBumpSticker, GreenAbstractFlower } from './Stickers';

const SectionFive = () => {
  return (
    <div className="relative w-full min-h-[150vh] bg-black flex flex-col items-center pt-24 md:pt-40 overflow-hidden">
      
      {/* Background Element: Green Abstract Flower */}
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] z-0 opacity-80 pointer-events-none">
        <GreenAbstractFlower className="w-full h-full rotate-12" />
      </div>

      {/* --- Part 1: Typography Block --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        
        {/* "we are a" + "young" (circled) + ", future-proof" */}
        <div className="flex flex-wrap justify-center items-end gap-x-3 md:gap-x-5 leading-[0.9] mb-2 md:mb-6">
          <span className="font-sans font-black text-white text-[9vw] md:text-[6rem] lg:text-[7.5rem] tracking-tight">
            we are a
          </span>
          
          <div className="relative">
             <span className="relative z-10 font-serif italic text-white text-[9vw] md:text-[6rem] lg:text-[7.5rem] tracking-tight">
              young
            </span>
            {/* Draw-on-scroll Circle */}
            <svg className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] z-0 pointer-events-none" viewBox="0 0 200 100" preserveAspectRatio="none">
              <motion.path 
                d="M20,50 C20,20 90,5 150,20 C190,30 190,70 150,85 C100,95 20,80 20,50" 
                fill="none" 
                stroke="white" 
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <span className="font-sans font-black text-white text-[9vw] md:text-[6rem] lg:text-[7.5rem] tracking-tight">
            , future-proof
          </span>
        </div>

        {/* "team of 49 digitally native" */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 mb-2 md:mb-6">
          <span className="font-sans font-black text-white text-[9vw] md:text-[6rem] lg:text-[7.5rem] tracking-tight leading-[0.9]">
            team of 49 digitally native
          </span>
        </div>

        {/* "wunderkinder" (underlined) + ". not to brag!" */}
        <div className="flex flex-wrap justify-center items-baseline gap-x-3 md:gap-x-5 leading-[0.9]">
           <div className="relative">
             <span className="font-serif italic text-white text-[9vw] md:text-[6rem] lg:text-[7.5rem] tracking-tight">
              wunderkinder.
            </span>
            {/* Draw-on-scroll Underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-8 z-20 pointer-events-none" viewBox="0 0 300 30" preserveAspectRatio="none">
               <motion.path 
                d="M5 15 Q 150 25, 290 5" 
                fill="none" 
                stroke="white" 
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              />
            </svg>
          </div>
          
          <span className="font-sans font-black text-white text-[9vw] md:text-[6rem] lg:text-[7.5rem] tracking-tight">
            not to brag!
          </span>
        </div>

      </div>


      {/* --- Part 2: Image Grid with Connecting Arrow --- */}
      <div className="relative w-full max-w-7xl mx-auto h-[800px] mt-20 md:mt-32">
        
        {/* Draw-on-scroll Connector Arrow */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 1000 800" preserveAspectRatio="none">
           <motion.path 
            d="M 250 350 C 300 500, 500 500, 500 700 C 500 800, 800 600, 850 450" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
           />
           {/* Arrowhead */}
           <motion.path 
             d="M 840 460 L 850 450 L 830 440"
             fill="none"
             stroke="white"
             strokeWidth="2"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1.9, duration: 0.2 }}
           />
        </svg>


        {/* Image 1: Top Left/Center - Bald Man */}
        <div className="absolute top-0 left-[5%] md:left-[15%] w-[250px] h-[350px] md:w-[320px] md:h-[420px] z-10">
            <div className="w-full h-full rounded-[30px] overflow-hidden border-4 border-transparent hover:border-white transition-all duration-300 transform -rotate-3">
                <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" 
                    alt="Team Member" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
            {/* Sticker */}
            <GoodVibesSticker className="absolute -bottom-10 -right-10 w-32 h-24 rotate-12 z-20" />
        </div>

        {/* Image 2: Bottom Center - Curly Hair (Cropped) */}
        <div className="absolute bottom-0 left-[30%] md:left-[40%] w-[200px] h-[250px] md:w-[280px] md:h-[350px] z-10 translate-y-10">
             <div className="w-full h-full rounded-t-[100px] rounded-b-[20px] overflow-hidden border-2 border-white/20 transform rotate-2">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                    alt="Team Member" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
             {/* Name Tag (Simulated) */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full">
                <span className="font-script text-black text-sm font-bold">truus</span>
             </div>
        </div>

        {/* Image 3: Right Side - Woman */}
        <div className="absolute top-[20%] right-[5%] md:right-[10%] w-[250px] h-[350px] md:w-[320px] md:h-[420px] z-10">
            <div className="w-full h-full rounded-[40px] overflow-hidden border-4 border-transparent hover:border-white transition-all duration-300 transform rotate-6">
                 <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" 
                    alt="Team Member" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
             {/* Sticker */}
            <FistBumpSticker className="absolute top-1/2 -right-12 w-28 h-28 -rotate-12 z-20" />
        </div>

      </div>

    </div>
  );
};

export default SectionFive;
