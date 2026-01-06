import React from 'react';
import { motion } from 'framer-motion';
import SectionFooter from './SectionFooter';
import { 
  OrangeBurst, 
  SmileyFace, 
  BamSticker, 
  HandDrawnCircle, 
  FistBumpSticker, 
  NeonAsterisk,
  UnderlineLine 
} from './Stickers';

const teamMembers = [
  {
    name: "Sarah Jenkins",
    role: "CEO & Visionary",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Ex-Meta. Hates boring ads. Loves spicy food."
  },
  {
    name: "David Chen",
    role: "CTO & The Brain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Writes code that writes copy. Coffee addict."
  },
  {
    name: "Marcus Rho",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop",
    bio: "Believes Comic Sans is due for a comeback."
  }
];

const values = [
  {
    title: "Speed Kills",
    desc: "We move faster than culture. If it's trending today, it's on your feed tomorrow.",
    color: "#FF4D00",
    textColor: "text-white"
  },
  {
    title: "No BS",
    desc: "We don't do buzzwords. We do ROAS. We do results. We do high-fives.",
    color: "#D9F99D",
    textColor: "text-black"
  },
  {
    title: "Chaos is Good",
    desc: "Great ideas don't come from safe places. We embrace the messy creative process.",
    color: "#000000",
    textColor: "text-white"
  }
];

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F2ED] pt-24 md:pt-32">
      
      {/* --- Hero Section --- */}
      <section className="px-6 md:px-12 mb-20 md:mb-32 relative">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          
          <div className="relative inline-block">
             <motion.div 
               initial={{ scale: 0, rotate: -20 }}
               animate={{ scale: 1, rotate: 12 }}
               className="absolute -top-12 -right-8 md:-right-16 w-24 h-24 md:w-32 md:h-32 z-10"
             >
                <BamSticker />
             </motion.div>
             <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter text-black mb-6">
                We build
                <br />
                <span className="text-[#FF4D00]">brains</span> for
                <br />
                brands.
             </h1>
          </div>

          <div className="mt-8 max-w-2xl">
             <p className="font-serif italic text-2xl md:text-3xl leading-tight text-gray-800">
               Sipify is the anti-agency. Born in Bangalore, raised on the internet, and powered by <span className="underline decoration-[#FF4D00] decoration-4 underline-offset-4">pure caffeine.</span>
             </p>
             <p className="font-sans text-lg mt-6 text-gray-600 font-medium">
               We got tired of seeing brands struggle with creative fatigue. The feed eats content faster than you can make it. So we built a machine that never sleeps, never runs out of ideas, and always stays on brand.
             </p>
          </div>
        </div>
      </section>

      {/* --- Image Breaker --- */}
      <section className="w-full mb-20 md:mb-32 overflow-hidden">
         <div className="relative w-full h-[50vh] md:h-[70vh]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-[#FF4D00] mix-blend-multiply opacity-40" />
            
            {/* Overlay Stickers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <SmileyFace className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl hover:scale-110 transition-transform" />
            </div>
         </div>
      </section>

      {/* --- Values Grid --- */}
      <section className="px-6 md:px-12 mb-24 max-w-7xl mx-auto">
        <h2 className="font-sans font-black text-4xl md:text-6xl mb-12 text-center md:text-left">
           Our DNA
           <NeonAsterisk className="inline-block w-12 h-12 ml-4 mb-2 align-middle animate-spin-slow" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {values.map((val, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -10 }}
               className={`p-8 rounded-[2rem] min-h-[300px] flex flex-col justify-between border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]`}
               style={{ backgroundColor: val.color }}
             >
                <div>
                   <h3 className={`font-sans font-black text-3xl md:text-4xl leading-none mb-4 ${val.textColor}`}>
                     {val.title}
                   </h3>
                   <div className={`w-12 h-1 bg-current ${val.textColor} mb-4`} />
                </div>
                <p className={`font-sans font-bold text-lg leading-tight ${val.textColor}`}>
                  {val.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- Team Section --- */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="relative">
                <h2 className="font-sans font-black text-5xl md:text-7xl tracking-tighter">
                   Meet the
                   <br />
                   Minds.
                </h2>
                <div className="absolute -bottom-4 left-0 w-full h-8 text-black">
                   <UnderlineLine className="w-full h-full" />
                </div>
            </div>
            <div className="mb-4">
               <FistBumpSticker className="w-24 h-24" />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
               <div key={i} className="group relative">
                  {/* Image Card */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-black mb-4">
                     <img 
                       src={member.image} 
                       alt={member.name} 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     />
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-[#FF4D00]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                        <p className="font-serif italic text-2xl text-white font-bold leading-tight">
                           "{member.bio}"
                        </p>
                     </div>
                  </div>
                  
                  {/* Name Tag */}
                  <div className="relative">
                     <h3 className="font-sans font-black text-2xl uppercase tracking-tight">{member.name}</h3>
                     <p className="font-serif italic text-gray-500 font-semibold">{member.role}</p>
                     
                     {/* Decorative Circle on Hover */}
                     <div className="absolute -top-6 -left-4 w-[120%] h-[150%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <HandDrawnCircle className="w-full h-full text-black/20" />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- Footer --- */}
      <SectionFooter />
    </div>
  );
};

export default AboutUs;
