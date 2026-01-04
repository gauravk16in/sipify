import React from 'react';

export const SmileyFace = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`w-24 h-24 ${className}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" fill="#7C9CFF" stroke="white" strokeWidth="3" />
    <ellipse cx="35" cy="40" rx="3.5" ry="7" fill="white" />
    <ellipse cx="65" cy="40" rx="3.5" ry="7" fill="white" />
    <path 
      d="M30 65 Q50 82 70 65" 
      stroke="white" 
      strokeWidth="5" 
      strokeLinecap="round" 
    />
  </svg>
);

export const HandDrawnOval = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 300 100" 
    className={`absolute pointer-events-none ${className}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path 
      d="M10,50 C10,20 80,5 150,5 C220,5 290,20 290,50 C290,80 220,95 150,95 C80,95 10,80 10,50 Z" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round"
      className="opacity-90"
    />
  </svg>
);

export const HandDrawnCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M95 50 C 95 25, 75 5, 50 5 C 25 5, 5 25, 5 50 C 5 75, 25 95, 50 95 C 75 95, 90 75, 95 50 C 97 40, 92 30, 85 25" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
  </svg>
);

export const FilledScribbleCircle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* A solid, slightly messy blob shape */}
    <path 
      d="M48 5 C 25 8, 5 28, 8 55 C 10 82, 32 95, 55 92 C 82 88, 95 68, 92 40 C 88 15, 72 2, 48 5 Z" 
      fill="currentColor" 
    />
  </svg>
);

export const Sparkle = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`absolute ${className}`}
    fill="#Eebaff" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
  </svg>
);

export const OrangeBurst = ({ className, children }: { className?: string, children?: React.ReactNode }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg 
      viewBox="0 0 100 100" 
      className="absolute inset-0 w-full h-full text-[#FF4D00] fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M50 10 L60 35 L85 25 L75 50 L95 70 L65 75 L50 95 L35 75 L5 70 L25 50 L15 25 L40 35 Z" />
    </svg>
    <div className="relative z-10">
        {children}
    </div>
  </div>
);

export const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="white" 
    stroke="white" 
    strokeWidth="0" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export const ThumbsUp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 50 L20 90 L80 90 C90 90 95 80 90 60 L80 30 L60 30 L65 10 C65 5 60 0 50 0 L40 10 L40 50 Z M20 50 L10 50 L10 90 L20 90" 
      fill="#FFF59D" 
      stroke="#000" 
      strokeWidth="3" 
      strokeLinejoin="round" 
      strokeLinecap="round"
    />
    <path d="M40 50 L80 50" stroke="#000" strokeWidth="2" strokeOpacity="0.2"/>
  </svg>
);

export const HandPhone = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="10" width="40" height="70" rx="5" fill="white" stroke="#000" strokeWidth="3" />
    <rect x="35" y="15" width="30" height="55" fill="#f0f0f0" />
    <path 
      d="M25 50 C20 50 15 55 15 65 C15 75 25 80 30 75 L30 50 Z" 
      fill="#FFF59D" stroke="#000" strokeWidth="3" 
    />
    <path 
      d="M70 50 C75 50 80 55 80 65 C80 75 70 80 65 75 L70 50 Z" 
      fill="#FFF59D" stroke="#000" strokeWidth="3" 
    />
    <path 
      d="M25 70 C25 60 40 55 50 65 C60 75 45 85 30 85" 
      fill="#FFF59D" stroke="#000" strokeWidth="3" 
    />
    <path d="M15 20 L5 15 M15 30 L5 30 M15 40 L5 45" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const LoopLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 100" className={`pointer-events-none ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 80 C 30 20, 80 20, 100 80 C 120 20, 170 20, 190 80" 
      stroke="black" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

export const BlueCursorSplat = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 20 Q60 10 70 25 Q85 20 80 35 Q95 45 85 55 Q90 70 75 70 Q70 85 55 80 Q40 90 35 75 Q15 80 25 65 Q10 50 25 40 Q20 20 40 30 Q45 15 50 20" 
      fill="#E0E7FF" 
      stroke="#7C9CFF" 
      strokeWidth="2"
    />
    <circle cx="20" cy="30" r="3" fill="none" stroke="#7C9CFF" strokeWidth="2" />
    <circle cx="85" cy="65" r="3" fill="none" stroke="#7C9CFF" strokeWidth="2" />
    <path 
      d="M40 40 L65 65 L55 68 L62 82 L55 85 L48 72 L42 78 L40 40 Z" 
      fill="#7C9CFF" 
      stroke="white" 
      strokeWidth="2"
    />
  </svg>
);

export const HandsHeart = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left Hand */}
    <path
        d="M35 70 C 25 65, 10 45, 30 35 Q 40 30, 48 45"
        fill="#1E4D2B"
        fillOpacity="0.1"
        stroke="#1E4D2B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    {/* Right Hand */}
    <path
        d="M65 70 C 75 65, 90 45, 70 35 Q 60 30, 52 45"
        fill="#1E4D2B"
        fillOpacity="0.1"
        stroke="#1E4D2B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    {/* Heart Center */}
    <path 
        d="M50 50 Q 55 45, 60 50 Q 65 55, 50 68 Q 35 55, 40 50 Q 45 45, 50 50"
        fill="#1E4D2B"
        stroke="none"
    />
  </svg>
);

export const UnderlineLine = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path 
      d="M5 10 Q 75 15, 150 12 T 295 8" 
      stroke="black" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
  </svg>
);

export const NeonAsterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Asterisk Shape */}
    <g stroke="#39FF14" strokeWidth="8" strokeLinecap="round">
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="20" y1="25" x2="80" y2="75" />
        <line x1="20" y1="75" x2="80" y2="25" />
    </g>
  </svg>
);

export const CameraIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Rough Sketchy Camera */}
    <g stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <path d="M10 30 L30 30 L35 20 L65 20 L70 30 L90 30 L90 80 L10 80 Z" />
        {/* Lens */}
        <circle cx="50" cy="55" r="15" />
        <circle cx="50" cy="55" r="10" />
        {/* Flash */}
        <rect x="75" y="35" width="10" height="5" />
        {/* Scribble fill attempt */}
        <path d="M15 35 L85 75 M20 75 L80 35" strokeOpacity="0.3" />
    </g>
  </svg>
);

export const DragSticker = ({ className, text = "drag" }: { className?: string, text?: string }) => (
  <div className={`flex items-center justify-center bg-[#f0a] border-2 border-white rounded-full px-4 py-1 transform -rotate-6 shadow-[4px_4px_0px_rgba(255,255,255,1)] ${className}`}>
    <span className="font-sans font-bold text-white text-sm uppercase tracking-widest">{text}</span>
  </div>
);

export const PeaceHand = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M40 90 L40 50 L30 40 L35 20 L45 20 L50 40 L55 20 L65 20 L70 40 L60 50 L60 90 Z" 
        fill="white" stroke="black" strokeWidth="3" strokeLinejoin="round" />
        <path d="M40 90 L60 90" stroke="black" strokeWidth="3" />
    </svg>
);

export const LimeBurst = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 0 L60 25 L85 20 L75 40 L100 50 L75 60 L85 80 L60 75 L50 100 L40 75 L15 80 L25 60 L0 50 L25 40 L15 20 L40 25 Z" 
      fill="#D9F99D" // lime-200
    />
  </svg>
);

export const WhiteSquiggle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 20 Q 20 5, 30 20 T 50 20 T 70 20 T 90 20" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <path 
      d="M45 45 L 25 25 M 45 45 L 25 65" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round"
      className="hidden" // Just simple lines
    />
    {/* Explosion lines */}
    <path d="M50 50 L30 30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L40 15" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L70 30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const SocialBadge = ({ className }: { className?: string }) => (
    <div className={`flex items-center gap-2 bg-[#EFEFEF] px-3 py-1.5 rounded-lg border border-black shadow-sm ${className}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
             <path d="M7 10v12" stroke="currentColor" strokeWidth="2" />
             <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <span className="font-sans font-bold text-xs text-black">social</span>
    </div>
);

export const PinkTag = ({ className, text }: { className?: string, text: string }) => (
    <div className={`bg-[#F0A6FF] px-4 py-1 rounded-full border border-black ${className}`}>
        <span className="font-sans font-medium text-black text-sm lowercase">{text}</span>
    </div>
);

export const GoodVibesSticker = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 140 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 50 Q 10 20, 50 15 Q 90 10, 110 30 Q 130 50, 120 80 Q 110 95, 70 90 Q 30 95, 15 80 Q 5 65, 20 50" 
        fill="#FF6B4A" 
        stroke="white" 
        strokeWidth="3"
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center -rotate-6">
        <span className="font-sans font-black text-white text-lg leading-none">Good</span>
        <span className="font-script text-white text-xl leading-none">Vibes</span>
    </div>
  </div>
);

export const FistBumpSticker = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
       {/* Background Blob */}
       <path d="M10 50 C 5 20, 80 10, 90 50 C 100 90, 20 95, 10 50" fill="#5D5FEF" stroke="white" strokeWidth="2" />
       {/* Simple Hands Icon */}
       <g stroke="white" strokeWidth="3" fill="none" strokeLinecap="round">
         <path d="M30 60 L 45 60 C 50 60, 50 50, 45 45 L 30 45" /> {/* Left Fist */}
         <path d="M70 45 L 55 45 C 50 45, 50 55, 55 60 L 70 60" /> {/* Right Fist */}
         {/* Impact lines */}
         <path d="M50 35 L 50 25" />
         <path d="M50 70 L 50 80" />
       </g>
    </svg>
  </div>
);

export const GreenAbstractFlower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M100 100 C 100 50, 150 0, 150 50 C 150 0, 200 50, 150 100 C 200 100, 200 150, 150 150 C 200 150, 150 200, 100 150 C 100 200, 50 200, 50 150 C 0 150, 50 100, 50 100 C 0 100, 50 50, 100 50" 
      fill="#2D7A65"
    />
  </svg>
);

export const WatchSticker = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background shape - Lime Green blob */}
      <path 
        d="M10 20 C 0 50, 20 90, 50 90 C 80 90, 95 60, 90 30 C 85 0, 40 -10, 10 20" 
        fill="#d4ff78" 
        stroke="white" 
        strokeWidth="3"
      />
      {/* Watch drawing */}
      <g stroke="#ff4d00" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="35" y="35" width="30" height="30" rx="5" />
        <path d="M50 35 L 50 20" /> {/* Top strap */}
        <path d="M50 65 L 50 80" /> {/* Bottom strap */}
        <path d="M40 20 L 60 20" />
        <path d="M40 80 L 60 80" />
        <circle cx="50" cy="50" r="10" />
        <path d="M50 50 L 55 50" />
        <path d="M50 50 L 50 45" />
        {/* Speed lines */}
        <path d="M20 40 L 10 50" stroke="#ff4d00" />
        <path d="M20 60 L 10 50" stroke="#ff4d00" />
      </g>
    </svg>
  </div>
);

export const HeartSparkleSticker = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Heart Shape */}
      <path 
        d="M50 85 C 50 85, 10 55, 10 30 C 10 15, 25 5, 40 10 C 45 12, 50 20, 50 20 C 50 20, 55 12, 60 10 C 75 5, 90 15, 90 30 C 90 55, 50 85, 50 85 Z" 
        fill="#8a2336" 
        stroke="white" 
        strokeWidth="4"
      />
      {/* Sparkles */}
      <path d="M20 30 L 25 25 M 20 20 L 25 25 M 20 25 L 30 25 M 25 20 L 25 30" stroke="white" strokeWidth="2" strokeLinecap="round" transform="translate(-5, 0) scale(0.8)" />
      <path d="M80 30 L 85 25 M 80 20 L 85 25 M 80 25 L 90 25 M 85 20 L 85 30" stroke="white" strokeWidth="2" strokeLinecap="round" transform="translate(5, 5) scale(1)" />
    </svg>
  </div>
);

export const BlueBlob = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M40 70 C 20 100, 50 150, 90 160 C 140 170, 180 130, 170 90 C 160 40, 110 20, 70 30 C 40 40, 50 60, 40 70" 
      fill="#8AB4F8" 
    />
  </svg>
);

export const FingerHeartSticker = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#C2185B" strokeWidth="3" fill="#F8BBD0" strokeLinecap="round" strokeLinejoin="round">
            {/* Wrist */}
            <path d="M30 110 L 30 80 L 70 80 L 70 110" fill="#F48FB1"/>
            {/* Hand Shape */}
            <path d="M30 80 C 20 60, 20 40, 35 30 C 40 25, 50 25, 55 35" /> {/* Thumb */}
            <path d="M55 35 C 60 25, 70 25, 75 35 C 85 50, 80 70, 70 80" /> {/* Index Finger crossed */}
            <path d="M35 30 C 45 40, 55 40, 65 35" fill="none" /> {/* Fingers overlapping */}
            {/* Heart above fingers */}
            <path d="M45 20 C 45 15, 50 10, 55 15 C 60 10, 65 15, 65 20 C 65 30, 55 35, 55 35 C 55 35, 45 30, 45 20 Z" fill="#E91E63" stroke="#C2185B" strokeWidth="2" />
        </g>
    </svg>
  </div>
);

export const ConnectorArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 100" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path 
      d="M10 40 Q 50 80, 100 50 T 200 50 T 290 20" 
      fill="none" 
      stroke="black" 
      strokeWidth="2"
      strokeLinecap="round"
      className="drop-shadow-sm"
    />
    <path d="M280 15 L 290 20 L 285 30" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// --- NEW FOOTER STICKERS ---

export const BamSticker = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
       <path 
         d="M50 5 L 65 35 L 95 35 L 75 55 L 85 85 L 50 65 L 15 85 L 25 55 L 5 35 L 35 35 Z" 
         fill="#FF4D00" 
         stroke="white" 
         strokeWidth="3"
       />
       <text x="50" y="58" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="white" className="font-sans italic">BAM!</text>
    </svg>
  </div>
);

export const HundredSticker = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} xmlns="http://www.w3.org/2000/svg">
     <text x="50" y="45" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="50" fill="#BE185D" stroke="white" strokeWidth="3" className="italic">100</text>
     <path d="M20 50 Q 50 55, 80 50" stroke="#BE185D" strokeWidth="4" strokeLinecap="round" />
     <path d="M25 55 Q 50 60, 75 55" stroke="#BE185D" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const InstagramIcon = ({ className }: { className?: string }) => (
     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
         <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
     </svg>
);

export const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 16C12.5 16.8284 11.8284 17.5 11 17.5C10.1716 17.5 9.5 16.8284 9.5 16C9.5 15.1716 10.1716 14.5 11 14.5V11.5C8.51472 11.5 6.5 13.5147 6.5 16C6.5 18.4853 8.51472 20.5 11 20.5C13.4853 20.5 15.5 18.4853 15.5 16V10C16.4 10.3 17.3 10.5 18.3 10.5V7.8C17.3 7.8 16.4 7.5 15.5 7V3H12.5V16Z"/>
    </svg>
);
