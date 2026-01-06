import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GlovedHandCursor, HundredSticker } from './Stickers';
import { Share2, TrendingUp, Link } from 'lucide-react';

const SectionFive = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- Animation Phases ---
  
  // Phase 1: Text "Sync your assets"
  // Extended exit slightly to bridge gap to card reveal
  const text1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.3, 0.45], ["0%", "-50%"]);
  const text1Scale = useTransform(scrollYProgress, [0.3, 0.45], [1, 0.9]);

  // Phase 2: Removed (was "dominate the feed")

  // Phase 3: Ad Card Reveal
  // Starts slightly earlier now to follow "Sync your assets"
  const cardScale = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const cardRotate = useTransform(scrollYProgress, [0.4, 0.55], [-10, 0]);
  
  // Phase 4: Interaction
  const handX = useTransform(scrollYProgress, [0.55, 0.65], ["100%", "0%"]);
  const handY = useTransform(scrollYProgress, [0.55, 0.65], ["100%", "0%"]);
  const handScale = useTransform(scrollYProgress, [0.65, 0.7, 0.75], [1, 0.9, 1]); 

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#F3F2ED]">
      
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* --- Phase 1 Text --- */}
        <motion.div 
            style={{ opacity: text1Opacity, y: text1Y, scale: text1Scale }}
            className="absolute z-20 text-center px-4"
        >
            <div className="inline-flex items-center gap-2 mb-4 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300">
                <Link className="w-5 h-5 text-gray-500" />
                <span className="font-mono text-gray-500 text-sm">https://your-brand.com</span>
            </div>
            <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-black leading-tight">
                sync your
                <br/>
                <span className="font-serif italic text-[#4D79FF] tracking-tighter">assets</span>
            </h2>
        </motion.div>

        {/* --- Phase 3: The Generated Ad Card --- */}
        <motion.div 
            style={{ scale: cardScale, rotate: cardRotate }}
            className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <div className="relative w-[320px] md:w-[380px] bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800">
                
                {/* Header (Simulate Instagram/Social UI) */}
                <div className="p-4 flex items-center gap-3 border-b border-white/10 bg-white/5 backdrop-blur-md absolute top-0 w-full z-20">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-black border-2 border-black overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-white text-xs font-bold">YourBrand_Official</p>
                        <p className="text-gray-400 text-[10px]">Sponsored • AI Generated</p>
                    </div>
                    <div className="px-3 py-1 bg-[#39FF14] rounded text-black text-[10px] font-bold uppercase tracking-wide">
                        Active
                    </div>
                </div>

                {/* Ad Content */}
                <div className="relative w-full aspect-[4/5] bg-gray-900">
                    <img 
                        src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=600" 
                        alt="Generated Ad" 
                        className="w-full h-full object-cover opacity-90"
                    />
                    
                    {/* Sticker overlay indicating success */}
                    <div className="absolute bottom-6 right-6 transform rotate-12">
                        <HundredSticker className="w-24 h-16" />
                    </div>
                </div>

                {/* Footer / CTA Area */}
                <div className="bg-[#1a1a1a] p-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-white font-sans font-bold text-sm">Shop the future collection.</p>
                        <div className="bg-[#4D79FF] px-4 py-2 rounded-lg text-white text-xs font-bold">
                            Shop Now
                        </div>
                    </div>
                    
                    {/* Performance Metrics Bar */}
                    <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-[#39FF14]" />
                            <span className="text-[#39FF14] text-xs font-bold">ROAS 4.5x</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-gray-400 text-xs">CTR 2.1%</span>
                        </div>
                        <div className="flex items-center gap-1 ml-auto">
                            <Share2 className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* --- Hand Cursor Interaction --- */}
                <motion.div 
                    style={{ x: handX, y: handY, scale: handScale }}
                    className="absolute top-[60%] right-[30%] w-24 h-24 pointer-events-none z-50 origin-bottom-left"
                >
                    <GlovedHandCursor />
                </motion.div>

            </div>
        </motion.div>

      </div>

    </section>
  );
};

export default SectionFive;