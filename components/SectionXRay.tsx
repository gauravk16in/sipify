import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SectionXRay = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 400;
      const amount = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({
        left: amount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full bg-[#F3F2ED] py-20 md:py-32 flex flex-col overflow-hidden">
      
      {/* --- Header Content --- */}
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <h2 className="flex flex-col items-start md:items-center text-left md:text-center leading-[1.1] md:leading-[1]">
          <span className="font-sans font-black text-[5.5vw] md:text-5xl lg:text-7xl text-black tracking-tighter block whitespace-nowrap">
            You’ve probably seen our work.
          </span>
          <span className="font-sans font-black text-[5.5vw] md:text-5xl lg:text-7xl text-[#A0A0A0] tracking-tighter block mt-1 md:mt-2 whitespace-nowrap">
            You just didn’t know it was AI.
          </span>
        </h2>
      </div>

      {/* --- Horizontal Scroll Container --- */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 no-scrollbar items-start"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* --- Card 1: Luxury Bag (Minimal, Image Focus) --- */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group shadow-md hover:shadow-xl transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" 
            alt="Luxury Leather Bag" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle logo overlay simulation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-[3px] border-[#D4AF37] rounded-full flex items-center justify-center opacity-90 mix-blend-overlay">
              <span className="text-[#D4AF37] font-serif text-3xl font-bold">G</span>
          </div>
        </div>


        {/* --- Card 2: Portrait Woman (Text Overlay) --- */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group shadow-md hover:shadow-xl transition-all duration-500">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
            alt="Redhead Portrait" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 px-4">
             <h3 className="font-sans text-4xl md:text-5xl text-white font-semibold drop-shadow-lg leading-tight">
                Get <span className="text-[#4ADE80] font-bold">hydrated</span>
                <br />
                with
             </h3>
          </div>
        </div>


        {/* --- Card 3: Minimal Tube (Clean White) --- */}
        {/* Changed background to white to pop against the off-white section bg */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group bg-white shadow-md hover:shadow-xl transition-all duration-500">
           <img 
            src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" 
            alt="White Cream Tube" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-12 left-0 w-full text-center">
             <h3 className="font-sans font-bold text-3xl text-black uppercase tracking-widest mb-1">BLUME</h3>
             <p className="font-sans text-xs text-gray-500 uppercase tracking-[0.25em]">Soothe & Hydrate</p>
          </div>
          <div className="absolute bottom-10 left-0 w-full text-center">
             <h3 className="font-sans font-bold text-5xl text-white mix-blend-overlay uppercase tracking-widest">BLUME</h3>
          </div>
        </div>


        {/* --- Card 4: Portrait Man (Dark) --- */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group bg-black shadow-md hover:shadow-xl transition-all duration-500">
          <img 
             src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
             alt="Smiling Man"
             className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-0 w-full text-center px-4">
             <h3 className="font-sans text-3xl md:text-4xl text-white font-medium leading-tight">
                <span className="text-[#FFB800] font-bold">backed</span> beauty of
             </h3>
          </div>
        </div>


        {/* --- Card 5: Green Tile (Product) --- */}
        <div className="relative flex-shrink-0 w-[85vw] md:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group bg-[#D1E8E2] shadow-md hover:shadow-xl transition-all duration-500">
           <img 
              src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop"
              alt="Green Tiles"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           {/* Product Composite */}
           <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-4">
               <img 
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop"
                  alt="Tubes"
                  className="w-2/3 h-auto drop-shadow-xl mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
               />
           </div>
           
           <div className="absolute top-12 left-0 w-full text-center">
              <h3 className="font-sans font-bold text-4xl text-black mb-1">Bite</h3>
              <p className="font-sans text-sm text-gray-700 font-medium">The Toothpaste Trio</p>
           </div>

           <div className="absolute bottom-12 left-0 w-full flex flex-col items-center">
             <h4 className="font-sans font-bold text-[#00A86B] text-sm tracking-wide mb-1 uppercase">Plastic-Free</h4>
             <p className="font-sans text-[10px] text-gray-600 tracking-wider uppercase mb-4">For a cleaner planet</p>
             <button className="bg-transparent border-2 border-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                Shop Now
             </button>
          </div>
        </div>

        {/* Spacer for right padding */}
        <div className="w-6 md:w-12 flex-shrink-0" />

      </div>

      {/* --- Navigation Controls (Bottom Right) --- */}
      <div className="flex absolute bottom-8 right-6 md:bottom-12 md:right-12 gap-3 z-20">
        <button 
          onClick={() => scroll('left')}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>
      </div>

    </section>
  );
};

export default SectionXRay;