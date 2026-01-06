import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#F3F2ED] flex flex-col items-center justify-center overflow-hidden px-6 md:px-12">
      
      <div className="relative z-10 flex flex-col items-center text-center mt-24">
        
        {/* --- Headline Row 1 --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 md:flex-nowrap">
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="font-sans font-normal text-[10vw] md:text-5xl lg:text-[5.5rem] tracking-tight text-[#0F172A] leading-[0.9] whitespace-nowrap"
          >
            Welcome
          </motion.h1>
          
          {/* Robot Card */}
          <motion.div
             initial={{ scale: 0, rotate: -10 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
             className="relative w-[18vw] h-[18vw] md:w-28 md:h-28 lg:w-36 lg:h-36 bg-[#E2E2E2] rounded-[20%] overflow-hidden flex items-center justify-center shadow-inner flex-shrink-0"
          >
              <img 
                src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=400&auto=format&fit=crop" 
                alt="Robot Icon" 
                className="w-[120%] h-[120%] object-cover object-center mix-blend-multiply opacity-90"
              />
          </motion.div>

          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="font-sans font-normal text-[10vw] md:text-5xl lg:text-[5.5rem] tracking-tight text-[#0F172A] leading-[0.9] whitespace-nowrap"
          >
            to the AI era
          </motion.h1>
        </div>

        {/* --- Headline Row 2 --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-2 md:mt-4 md:flex-nowrap">
             <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                 className="font-sans font-normal text-[10vw] md:text-5xl lg:text-[5.5rem] tracking-tight text-[#0F172A] leading-[0.9] whitespace-nowrap"
              >
                of advertising
              </motion.h1>

              {/* Shoe Card */}
              <motion.div
                 initial={{ scale: 0, rotate: 10 }}
                 animate={{ scale: 1, rotate: 0 }}
                 transition={{ delay: 0.4, type: "spring", stiffness: 150, damping: 15 }}
                 className="relative w-[40vw] h-[20vw] md:w-56 md:h-28 lg:w-64 lg:h-32 bg-[#F0A6FF]/30 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
              >
                   {/* Pink Background Shape */}
                   <div className="absolute inset-0 bg-[#F5D0FE]" />
                   <img 
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop" 
                    alt="Shoe" 
                    className="relative z-10 w-[90%] h-auto object-contain -rotate-12 translate-y-2 drop-shadow-xl"
                  />
              </motion.div>
        </div>

        {/* --- Subtitle --- */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 md:mt-12 max-w-[90%] md:max-w-2xl text-center text-lg md:text-xl text-[#475569] font-sans font-medium leading-relaxed tracking-wide"
        >
            A complete, AI-powered advertising solution helping consumer brands improve ad performance and streamline workflows
        </motion.p>

      </div>

    </section>
  );
};

export default Hero;