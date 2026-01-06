import React from 'react';
import { motion } from 'framer-motion';
import SectionFooter from './SectionFooter';
import { 
  OrangeBurst, 
  UnderlineLine, 
  Sparkle, 
  WhiteSquiggle,
  BlueBlob,
  NeonAsterisk,
  DragSticker,
  HandDrawnCircle,
  BamSticker
} from './Stickers';
import { 
  Wand2, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Palette,
  ArrowRight,
  Upload,
  Cpu,
  Rocket
} from 'lucide-react';

interface ProductProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms' | 'refund' | 'about' | 'pricing' | 'product') => void;
}

const features = [
  {
    title: "Infinite Variations",
    desc: "Turn one asset into 100. Our remix engine tests every angle, hook, and visual style.",
    icon: <Layers className="w-8 h-8 text-white" />,
    bg: "bg-black",
    text: "text-white",
    colSpan: "md:col-span-2",
    visual: (
        <div className="absolute right-0 bottom-0 w-1/2 h-full overflow-hidden opacity-50">
            <div className="grid grid-cols-2 gap-2 p-4 animate-pulse">
                {[1,2,3,4].map(i => (
                    <div key={i} className="bg-gray-800 rounded-lg aspect-[4/5] border border-gray-700"></div>
                ))}
            </div>
        </div>
    )
  },
  {
    title: "Brand Guard™",
    desc: "AI that actually respects your guidelines. Fonts, colors, and logos are locked in.",
    icon: <ShieldCheck className="w-8 h-8 text-black" />,
    bg: "bg-[#D9F99D]", // Lime
    text: "text-black",
    colSpan: "md:col-span-1",
    visual: (
        <div className="absolute bottom-4 right-4">
            <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#FF4D00] border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-[#4D79FF] border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-black border-2 border-white"></div>
            </div>
        </div>
    )
  },
  {
    title: "Predictive Scoring",
    desc: "Know before you launch. Our AI scores creative potential based on millions of winning ads.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    bg: "bg-[#FF4D00]", // Orange
    text: "text-white",
    colSpan: "md:col-span-1",
    visual: (
        <div className="absolute bottom-6 right-6">
            <div className="bg-white text-black px-3 py-1 rounded-full font-black text-xl rotate-[-10deg] shadow-lg border-2 border-black">
                98/100
            </div>
        </div>
    )
  },
  {
    title: "Cross-Platform Export",
    desc: "One click resize for TikTok, Reels, Stories, and Feeds. No awkward cropping.",
    icon: <Zap className="w-8 h-8 text-black" />,
    bg: "bg-white",
    text: "text-black",
    colSpan: "md:col-span-2",
    visual: (
        <div className="absolute right-8 bottom-8 flex gap-2">
            <div className="w-10 h-16 border-2 border-black rounded-md bg-gray-100 flex items-center justify-center text-[8px] font-bold">9:16</div>
            <div className="w-12 h-12 border-2 border-black rounded-md bg-gray-100 flex items-center justify-center text-[8px] font-bold">1:1</div>
            <div className="w-16 h-10 border-2 border-black rounded-md bg-gray-100 flex items-center justify-center text-[8px] font-bold">16:9</div>
        </div>
    )
  }
];

const steps = [
    {
        num: "01",
        title: "Feed the Machine",
        desc: "Upload your product shots, raw video, and logo. Don't worry about polish; we handle the rest.",
        icon: <Upload className="w-6 h-6" />,
        color: "#4D79FF"
    },
    {
        num: "02",
        title: "Prompt & Generate",
        desc: "Tell AI what you need: 'Spicy meme for Gen Z' or 'Premium aesthetic for luxury buyers'.",
        icon: <Cpu className="w-6 h-6" />,
        color: "#FF4D00"
    },
    {
        num: "03",
        title: "Launch & Learn",
        desc: "Push directly to Ads Manager. We track performance and auto-iterate on winners.",
        icon: <Rocket className="w-6 h-6" />,
        color: "#000000"
    }
]

const Product = ({ onNavigate }: ProductProps) => {
  return (
    <div className="w-full min-h-screen bg-[#F3F2ED] pt-24 md:pt-32">
      
      {/* --- Hero Section --- */}
      <section className="px-6 md:px-12 mb-20 md:mb-32 relative text-center">
        <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-block relative mb-6">
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute -top-12 -left-12 md:-left-24 z-0"
                >
                    <BlueBlob className="w-32 h-32 md:w-48 md:h-48 opacity-50 rotate-12" />
                </motion.div>
                
                <h1 className="relative z-10 font-sans font-black text-6xl md:text-8xl lg:text-[7rem] tracking-tighter text-black leading-[0.9]">
                    Creative block
                    <br />
                    is <span className="text-[#FF4D00] relative">
                        cancelled.
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-black -rotate-2" />
                    </span>
                </h1>
            </div>

            <p className="font-serif italic text-2xl md:text-3xl text-gray-600 font-medium max-w-3xl mx-auto mt-8 leading-relaxed">
                The first AI platform that understands <span className="underline decoration-black decoration-2 underline-offset-4">vibe</span>, not just pixels. 
                Generate on-brand ad creatives that actually convert.
            </p>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform border-2 border-black shadow-[4px_4px_0px_#FF4D00]">
                    Start Creating
                </button>
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg uppercase tracking-wider hover:bg-gray-50 transition-colors border-2 border-black shadow-[4px_4px_0px_black] flex items-center gap-2">
                    <Wand2 className="w-5 h-5" />
                    View Demo
                </button>
            </div>
        </div>
      </section>

      {/* --- Feature Bento Grid --- */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <NeonAsterisk className="w-12 h-12 animate-spin-slow" />
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight">What's inside the box?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`${feat.colSpan} ${feat.bg} ${feat.text} relative rounded-[2rem] p-8 md:p-10 border-2 border-black shadow-[8px_8px_0px_black] overflow-hidden min-h-[300px] flex flex-col justify-between group`}
                >
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/30">
                            {feat.icon}
                        </div>
                        <h3 className="font-sans font-black text-3xl mb-3 tracking-tight">{feat.title}</h3>
                        <p className={`font-medium text-lg opacity-90 max-w-md ${feat.text === 'text-black' ? 'text-gray-800' : 'text-gray-300'}`}>
                            {feat.desc}
                        </p>
                    </div>
                    {feat.visual}
                </motion.div>
            ))}
        </div>
      </section>

      {/* --- How It Works --- */}
      <section className="w-full bg-black text-white py-24 px-6 md:px-12 mb-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4D00] rounded-full blur-[120px] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <h2 className="font-sans font-black text-5xl md:text-7xl mb-4">How it works</h2>
                <div className="w-full h-1 bg-white/20 rounded-full max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 border-t-2 border-dashed border-white/30 z-0" />

                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center">
                        <div 
                            className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center mb-8 relative bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            <span className="font-sans font-black text-3xl text-black">{step.num}</span>
                            <div 
                                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center border-2 border-black"
                                style={{ backgroundColor: step.color }}
                            >
                                {React.cloneElement(step.icon as React.ReactElement, { className: "text-white w-5 h-5" })}
                            </div>
                        </div>
                        <h3 className="font-sans font-bold text-2xl mb-4 uppercase tracking-wide">{step.title}</h3>
                        <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Integration Marquee (Simple) --- */}
      <section className="mb-32 overflow-hidden py-12 bg-white border-y-2 border-black">
         <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
             <p className="font-sans font-bold text-gray-400 uppercase tracking-widest text-sm">Integrates seamlessly with</p>
         </div>
         <div className="flex gap-12 justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-6">
             {/* Simple Text Placeholders for Brand Logos for clarity */}
             <span className="font-sans font-black text-2xl">META</span>
             <span className="font-sans font-black text-2xl">TIKTOK</span>
             <span className="font-sans font-black text-2xl">SHOPIFY</span>
             <span className="font-sans font-black text-2xl">GOOGLE</span>
             <span className="font-sans font-black text-2xl">FIGMA</span>
             <span className="font-sans font-black text-2xl">HUBSPOT</span>
         </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="px-6 md:px-12 mb-32">
         <div className="max-w-6xl mx-auto bg-[#FF4D00] rounded-[3rem] p-12 md:p-24 text-center border-2 border-black shadow-[12px_12px_0px_black] relative overflow-hidden">
             
             {/* Stickers */}
             <div className="absolute top-10 left-10 hidden md:block animate-bounce">
                <DragSticker text="Ship it!" />
             </div>
             <div className="absolute bottom-10 right-10 hidden md:block">
                <BamSticker className="w-32 h-32" />
             </div>

             <h2 className="font-sans font-black text-5xl md:text-7xl text-white mb-8 leading-[0.9]">
                 Ready to dominate
                 <br/>
                 the feed?
             </h2>
             <p className="text-white/80 font-medium text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
                 Join 10,000+ marketers shipping better ads, faster.
             </p>
             <button className="bg-white text-black px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                 Get Started Free
             </button>
             <p className="mt-6 text-white/60 text-sm font-bold uppercase tracking-wide">
                 No credit card required • 14-day free trial
             </p>
         </div>
      </section>

      {/* --- Footer --- */}
      <SectionFooter onNavigate={onNavigate} />
    </div>
  );
};

export default Product;
