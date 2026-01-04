import React from 'react';
import { 
  LinkedInIcon,
  InstagramIcon,
  TikTokIcon
} from './Stickers';

// Fallback to a font-based approach if SVG is too complex to hand-code perfectly
const SipifyText = () => (
     <div className="w-full select-none leading-none flex justify-center items-end">
         <h1 className="text-[#F0F0F0] font-serif italic font-black text-[30vw] md:text-[28vw] tracking-[-0.08em] mix-blend-normal leading-[0.7] translate-y-[10%]">
             Sipify
         </h1>
     </div>
);


const SectionFooter = () => {
  return (
    <footer className="relative w-full bg-[#4D6CF6] overflow-hidden pt-20 md:pt-32 flex flex-col justify-between min-h-screen">
      
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
                    <a href="mailto:hello@sipify.com" className="text-2xl md:text-4xl font-sans font-black tracking-tight hover:underline">
                        hello@sipify.com
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
                    <a href="#" className="p-2 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#4D6CF6] transition-all">
                        <LinkedInIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-2 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#4D6CF6] transition-all">
                        <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-2 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-[#4D6CF6] transition-all">
                        <TikTokIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>

        </div>
      </div>

      {/* --- Bottom Half: Massive Signature & Floor --- */}
      <div className="relative w-full mt-20 md:mt-0 flex items-end justify-center">
        
        {/* The Massive Text */}
        <div className="relative w-full">
            <SipifyText />
        </div>

      </div>

    </footer>
  );
};

export default SectionFooter;