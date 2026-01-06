import React from 'react';
import { 
  LinkedInIcon,
  InstagramIcon,
  TikTokIcon
} from './Stickers';

interface SectionFooterProps {
    onNavigate?: (page: 'home' | 'privacy' | 'terms' | 'refund') => void;
}

// Fallback to a font-based approach if SVG is too complex to hand-code perfectly
const SipifyText = () => (
     <div className="w-full select-none leading-none flex justify-center items-end">
         <h1 className="text-[#F0F0F0] font-serif italic font-black text-[30vw] md:text-[28vw] tracking-[-0.08em] mix-blend-normal leading-[0.7] translate-y-[10%]">
             Sipify
         </h1>
     </div>
);


const SectionFooter = ({ onNavigate }: SectionFooterProps) => {
  const handleNav = (e: React.MouseEvent, page: 'privacy' | 'terms' | 'refund') => {
      e.preventDefault();
      if (onNavigate) onNavigate(page);
  };

  return (
    <footer className="relative w-full bg-[#FF4D00] overflow-hidden pt-20 md:pt-32 flex flex-col justify-between min-h-screen">
      
      {/* --- Top Half: Info Grid --- */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-white">
            
            {/* Col 1: Job */}
            <div className="flex flex-col items-start gap-4">
                <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold font-sans">looking for a job?</span>
                <h3 className="text-3xl md:text-5xl font-sans font-black tracking-tight leading-tight">
                    not hiring right now :(
                </h3>
            </div>

            {/* Col 2: Office */}
            <div className="flex flex-col items-start gap-4">
                <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold font-sans">office</span>
                <div className="flex flex-col gap-1">
                    <p className="text-2xl md:text-3xl font-sans font-bold leading-tight">
                        HSR Layout
                        <br/>
                        Bangalore, India
                    </p>
                    <a href="#" className="text-xl md:text-2xl font-serif italic underline hover:text-black transition-colors mt-2">
                        Google Maps
                    </a>
                </div>
            </div>

            {/* Col 3: Contact */}
            <div className="flex flex-col items-start gap-4">
                <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold font-sans">contact</span>
                <div className="flex flex-col gap-1">
                    <a href="mailto:hello@sipify.app" className="text-2xl md:text-4xl font-sans font-black tracking-tight hover:underline">
                        hello@sipify.app
                    </a>
                    <a href="#" className="text-xl md:text-3xl font-serif italic font-bold hover:text-black transition-colors">
                        send us a whatsapp*
                    </a>
                    <p className="text-sm opacity-80 mt-2 font-sans">
                        *we’re millennials and gen-z: please do not call us.
                    </p>
                </div>
                {/* Social Icons */}
                <div className="flex gap-4 mt-4">
                    <a href="#" className="p-2 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#FF4D00] transition-all">
                        <LinkedInIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-2 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#FF4D00] transition-all">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-2 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#FF4D00] transition-all">
                        <TikTokIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>

        </div>
      </div>

      {/* --- Legal Links (Phone: Stacked/Center, Desktop: Row/Absolute) --- */}
      <div className="relative z-30 mt-12 md:mt-0 w-full px-6 md:px-10 mb-4 md:mb-0 md:absolute md:bottom-4 md:right-0 flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-8 pointer-events-auto">
          <button onClick={(e) => handleNav(e, 'privacy')} className="text-white/60 text-xs md:text-sm font-sans font-medium hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            Privacy Policy
          </button>
          <button onClick={(e) => handleNav(e, 'terms')} className="text-white/60 text-xs md:text-sm font-sans font-medium hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            Terms & Conditions
          </button>
          <button onClick={(e) => handleNav(e, 'refund')} className="text-white/60 text-xs md:text-sm font-sans font-medium hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            Refund Policy
          </button>
      </div>

      {/* --- Bottom Half: Massive Signature & Floor --- */}
      <div className="relative w-full mt-8 md:mt-0 flex items-end justify-center pointer-events-none">
        
        {/* The Massive Text */}
        <div className="relative w-full">
            <SipifyText />
        </div>

      </div>

    </footer>
  );
};

export default SectionFooter;