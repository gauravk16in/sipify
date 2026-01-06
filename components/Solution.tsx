import React from 'react';
import { motion } from 'framer-motion';
import SectionFooter from './SectionFooter';
import { 
  UnderlineLine, 
  Sparkle, 
  LoopLine, 
  HandDrawnCircle, 
  BlueBlob, 
  BamSticker,
  DragSticker,
  OrangeBurst,
  PeaceHand
} from './Stickers';
import { 
  Check, 
  X, 
  Zap, 
  Target, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Clock,
  ArrowRight
} from 'lucide-react';

interface SolutionProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms' | 'refund' | 'about' | 'pricing' | 'product' | 'solution') => void;
}

const personas = [
  {
    title: "For DTC Brands",
    subtitle: "Scale without the headcount.",
    desc: "Launch 50+ ad variations a week without hiring a creative director or waiting on freelancers.",
    icon: <Target className="w-8 h-8 text-black" />,
    color: "#D9F99D", // Lime
    rotate: "-2deg",
    stats: "300% ROAS inc."
  },
  {
    title: "For Agencies",
    subtitle: "Client retention machine.",
    desc: "Stop burning out your designers. Deliver creative refreshes instantly and keep clients happy.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "#000000", // Black
    textColor: "text-white",
    rotate: "1deg",
    stats: "10x Output"
  },
  {
    title: "For Creators",
    subtitle: "Monetize faster.",
    desc: "Turn your raw content into polished ads for brand deals. Look professional, get paid more.",
    icon: <Zap className="w-8 h-8 text-black" />,
    color: "#F0A6FF", // Pink
    rotate: "-1deg",
    stats: "20h saved/wk"
  }
];

const comparisonData = [
  {
    feature: "Turnaround Time",
    old: "5-7 Business Days",
    new: "Instant (Seconds)"
  },
  {
    feature: "Cost Per Creative",
    old: "$150 - $500+",
    new: "< $2.00"
  },
  {
    feature: "Variations",
    old: "3-5 Options",
    new: "Unlimited"
  },
  {
    feature: "Data Usage",
    old: "Gut Feeling",
    new: "Predictive AI Scoring"
  },
  {
    feature: "Scalability",
    old: "Bottlenecked by Humans",
    new: "Infinite Scale"
  }
];

const Solution = ({ onNavigate }: SolutionProps) => {
  return (
    <div className="w-full min-h-screen bg-[#F3F2ED] pt-24 md:pt-32">
      
      {/* --- Hero Section --- */}
      <section className="px-6 md:px-12 mb-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
            
            {/* Floating Elements */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-0 right-0 hidden md:block"
            >
                <Sparkle className="w-24 h-24" />
            </motion.div>

            <h1 className="font-sans font-black text-6xl md:text-8xl lg:text-[7.5rem] tracking-tighter text-black leading-[0.9] mb-8">
                The Growth
                <br />
                <span className="relative inline-block text-[#4D79FF]">
                   Operating System
                   <div className="absolute -bottom-2 left-0 w-full h-4 opacity-30">
                       <UnderlineLine className="w-full h-full text-[#4D79FF]" />
                   </div>
                </span>
            </h1>
            
            <p className="font-serif italic text-2xl md:text-3xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                Stop throwing spaghetti at the wall. Start using a data-backed creative engine that actually converts.
            </p>

        </div>
      </section>

      {/* --- Persona Grid --- */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((p, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -10, rotate: 0 }}
                    initial={{ rotate: p.rotate }}
                    className={`rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[400px] border-2 border-black shadow-[8px_8px_0px_black] transition-all`}
                    style={{ backgroundColor: p.color }}
                >
                    <div>
                        <div className={`w-14 h-14 rounded-full border-2 border-black flex items-center justify-center mb-6 bg-white`}>
                            {p.icon}
                        </div>
                        <h3 className={`font-sans font-black text-3xl mb-2 ${p.textColor || 'text-black'}`}>{p.title}</h3>
                        <p className={`font-serif italic text-xl font-bold mb-4 opacity-80 ${p.textColor || 'text-black'}`}>{p.subtitle}</p>
                        <p className={`font-medium text-lg leading-tight opacity-90 ${p.textColor || 'text-black'}`}>
                            {p.desc}
                        </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t-2 border-dashed border-black/20">
                        <div className={`font-sans font-black text-4xl ${p.textColor || 'text-black'}`}>
                            {p.stats}
                        </div>
                    </div>
                </motion.div>
            ))}
         </div>
      </section>

      {/* --- The "Old Way" vs "New Way" Comparison --- */}
      <section className="px-4 md:px-12 mb-32 max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="font-sans font-black text-5xl md:text-6xl tracking-tight mb-4">
                Creative output
                <br/>
                <span className="text-[#FF4D00]">evolved.</span>
            </h2>
        </div>

        <div className="bg-white border-2 border-black rounded-[2rem] overflow-hidden shadow-[12px_12px_0px_black]">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-black text-white py-6 px-4 md:px-8 border-b-2 border-black">
                <div className="font-sans font-bold uppercase tracking-widest text-sm md:text-base flex items-center">Metric</div>
                <div className="font-sans font-bold uppercase tracking-widest text-sm md:text-base text-gray-400 text-center flex items-center justify-center gap-2">
                    Traditional <span className="hidden md:inline">Agency</span>
                </div>
                <div className="font-sans font-black uppercase tracking-widest text-sm md:text-xl text-[#39FF14] text-center flex items-center justify-center gap-2">
                    Sipify <Sparkle className="w-4 h-4 text-[#39FF14]" />
                </div>
            </div>

            {/* Table Body */}
            <div>
                {comparisonData.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 py-6 px-4 md:px-8 border-b border-gray-200 last:border-none hover:bg-gray-50 transition-colors">
                        <div className="font-serif italic font-bold text-lg md:text-xl text-gray-800 flex items-center">
                            {row.feature}
                        </div>
                        <div className="font-sans font-medium text-gray-500 text-center flex items-center justify-center relative">
                            {row.old}
                            <div className="absolute w-1/2 h-0.5 bg-red-500/30 rotate-3" />
                        </div>
                        <div className="font-sans font-black text-lg md:text-xl text-black text-center flex items-center justify-center bg-[#D9F99D]/30 py-1 rounded-lg">
                            {row.new}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Workflow Visual --- */}
      <section className="px-6 md:px-12 mb-32 relative">
          <div className="max-w-7xl mx-auto bg-black rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              
              {/* Decorative Background */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                  <BlueBlob className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%]" />
                  <LoopLine className="absolute bottom-10 right-10 w-64 h-32 text-white" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1">
                      <div className="inline-block bg-[#FF4D00] text-white font-bold px-4 py-1 rounded-full text-sm uppercase mb-6 border border-white">
                          Automated Workflow
                      </div>
                      <h2 className="font-sans font-black text-4xl md:text-6xl mb-6 leading-tight">
                          You sleep.
                          <br />
                          <span className="text-[#D9F99D]">We ship.</span>
                      </h2>
                      <p className="text-xl text-gray-300 mb-8 max-w-md">
                          Set your brand guidelines once. Our system monitors trends, generates assets, and refreshes your ad sets automatically.
                      </p>
                      <button 
                        onClick={() => onNavigate('pricing')}
                        className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#D9F99D] transition-colors flex items-center gap-2"
                      >
                          View Plans <ArrowRight className="w-5 h-5" />
                      </button>
                  </div>

                  {/* Visual Diagram */}
                  <div className="flex-1 w-full relative">
                      <div className="aspect-square bg-[#1a1a1a] rounded-3xl border-2 border-gray-700 p-8 flex flex-col justify-between relative shadow-2xl">
                          {/* Step 1 */}
                          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-600 opacity-50">
                              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">1</div>
                              <div className="h-2 w-32 bg-gray-600 rounded-full"></div>
                          </div>
                          
                          {/* Step 2 (Active) */}
                          <div className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-xl border-2 border-[#39FF14] transform scale-105 shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                              <div className="w-10 h-10 bg-[#39FF14] text-black font-bold rounded-full flex items-center justify-center animate-pulse">2</div>
                              <div>
                                  <div className="h-2 w-32 bg-white rounded-full mb-2"></div>
                                  <div className="h-2 w-20 bg-gray-500 rounded-full"></div>
                              </div>
                              <div className="ml-auto">
                                  <BamSticker className="w-12 h-12" />
                              </div>
                          </div>

                          {/* Step 3 */}
                          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-600 opacity-50">
                              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">3</div>
                              <div className="h-2 w-32 bg-gray-600 rounded-full"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- Footer --- */}
      <SectionFooter onNavigate={onNavigate} />
    </div>
  );
};

export default Solution;
