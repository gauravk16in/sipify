import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CameraIcon, 
  HandPhone, 
  SmileyFace, 
  WatchSticker, 
  HeartSparkleSticker 
} from './Stickers';

const services = [
  {
    id: 'brand',
    title: 'brand',
    color: '#2E8B57', // Deep Green
    rotate: '-3deg',
    sticker: <div className="bg-[#1a5233] p-2 rounded-lg border-2 border-white transform rotate-[-10deg] shadow-lg"><CameraIcon className="w-12 h-12 md:w-14 md:h-14 text-white" /></div>,
    items: [
      'Brand Strategy',
      '360° Creative',
      'Art Direction',
      'Copywriting',
      'Editing',
      'Motion Graphics',
      'DTP'
    ]
  },
  {
    id: 'social',
    title: 'social',
    color: '#6495ED', // Cornflower Blue
    rotate: '2deg',
    sticker: <div className="bg-[#e0e7ff] p-1 rounded-full border-2 border-[#6495ED] transform rotate-[15deg] shadow-lg"><HandPhone className="w-14 h-14 md:w-16 md:h-16" /></div>,
    items: [
      'Social Media Strategy',
      'Social Media Creative',
      'TikTok/Social Shoots',
      'Influencer Campaigns',
      'Scheduling Support',
      'Community Management',
      'Social Listening'
    ]
  },
  {
    id: 'activations',
    title: 'activations',
    color: '#FF7F50', // Bright Orange
    rotate: '-2deg',
    sticker: <div className="transform rotate-[-5deg]"><SmileyFace className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" /></div>,
    items: [
      'Activation Strategy',
      'Event Planning',
      'Art Direction',
      'Production'
    ]
  },
  {
    id: 'video',
    title: 'video production',
    color: '#A52A2A', // Deep Red/Maroon
    rotate: '3deg',
    sticker: <div className="transform rotate-[10deg]"><WatchSticker className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" /></div>,
    items: [
      'Campaign video',
      'Branded content',
      'Social content',
      'Marketing material'
    ]
  },
  {
    id: 'partners',
    title: 'with partners',
    titleBreak: true,
    color: '#E6E6FA', // Light Lavender
    textColor: 'black', // Special case for light bg
    rotate: '-3deg',
    sticker: <div className="transform rotate-[-15deg]"><HeartSparkleSticker className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" /></div>,
    items: [
      'PR/Journalism',
      '3D / VFX',
      'Food styling',
      'Photography'
    ]
  }
];

const SectionSix = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#F5F3EF] flex flex-col items-center py-24 px-4 overflow-hidden">
      
      {/* --- Header --- */}
      <div className="text-center mb-10 z-20">
        <h2 className="flex flex-col md:flex-row items-center justify-center gap-x-3 text-4xl md:text-6xl">
          <span className="font-sans font-black text-black tracking-tight">
            call us if you
          </span>
          <div className="relative inline-block mt-1 md:mt-0">
             <span className="relative z-10 font-serif italic font-bold text-black tracking-tighter">
              need:
            </span>
            {/* Hand-drawn underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-black pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M5 15 Q 50 20, 95 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </h2>
      </div>

      {/* --- Accordion Container --- */}
      {/* Reduced height to make it more compact (short) */}
      <div className="relative w-full max-w-6xl h-[420px] md:h-[480px] flex items-end justify-center pb-4">
        {services.map((service, index) => {
          const isActive = activeId === service.id;
          const isHovered = activeId !== null;

          // Determine margin for stack effect
          // When active: give space around the active one
          // When inactive: heavily overlap (-60px)
          let marginLeft = index === 0 ? 0 : '-50px';
          if (isActive) {
             marginLeft = '20px'; // Give room to the left of active card
          } else if (isHovered) {
             marginLeft = '10px'; // Slight spread on hover
          }

          return (
            <motion.div
              key={service.id}
              layout
              onHoverStart={() => setActiveId(service.id)}
              onHoverEnd={() => setActiveId(null)}
              onClick={() => setActiveId(isActive ? null : service.id)}
              className={`relative rounded-2xl cursor-pointer shadow-lg transition-all duration-500 ease-out flex-shrink-0 md:flex-shrink-1`}
              style={{
                backgroundColor: service.color,
                zIndex: isActive ? 50 : index,
                rotate: isActive ? '0deg' : service.rotate,
                marginLeft: marginLeft,
                flexBasis: isActive ? '400px' : '100px', // Expand width vs strip width
                height: isActive ? '100%' : '90%', // Active card pops up slightly taller
              }}
              // Removed overflow-hidden from here so stickers can pop out
              whileHover={{ 
                y: -10,
                zIndex: 60,
                transition: { duration: 0.2 } 
              }}
            >
              
              {/* Sticker (Absolute positioned at top, popping OUT of the card) */}
              {/* Since we removed overflow-hidden, this will be visible */}
              <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  {service.sticker}
              </div>

              {/* --- Card Content --- */}
              <div className="relative w-full h-full p-5 flex flex-col">
                
                {/* Title */}
                <div className="mt-8 mb-4">
                    <h3 className={`font-sans font-black text-2xl md:text-3xl leading-tight ${service.textColor === 'black' ? 'text-black' : 'text-white'}`}>
                        {service.titleBreak ? (
                            <>with<br/>partners</>
                        ) : (
                            service.title
                        )}
                    </h3>
                </div>

                {/* Divider Line */}
                {/* Only show when active or expanding to keep strips clean */}
                <motion.div 
                    className={`w-full h-0.5 mb-4 rounded-full ${service.textColor === 'black' ? 'bg-black' : 'bg-white'}`}
                    animate={{ opacity: isActive ? 1 : 0.5, width: isActive ? '100%' : '20%' }}
                />

                {/* Body Content (List) */}
                <div className="flex-1 overflow-hidden relative">
                    <motion.ul 
                        className={`space-y-2 ${service.textColor === 'black' ? 'text-black' : 'text-white'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {service.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 font-sans font-medium text-sm md:text-base whitespace-nowrap">
                                <span className="text-sm">✦</span> {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

export default SectionSix;
