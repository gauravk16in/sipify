import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Plus } from 'lucide-react';
import SectionFooter from './SectionFooter';
import { 
  OrangeBurst, 
  UnderlineLine, 
  Sparkle, 
  LoopLine,
  GreenAbstractFlower,
  LimeBurst
} from './Stickers';

const faqs = [
  {
    q: "Do unused credits roll over?",
    a: "Nope. We believe in shipping. If you don't use them, you lose them. Keeps the pressure on to create greatness."
  },
  {
    q: "Can I cancel anytime?",
    a: "100%. No handcuffs here. Cancel in your dashboard with one click. We might cry a little, but we won't stop you."
  },
  {
    q: "What counts as a 'generation'?",
    a: "One generated image, one written caption variation, or one ad resize counts as 1 credit. Previewing doesn't cost a thing."
  },
  {
    q: "Do you offer refunds?",
    a: "We have a 14-day money-back guarantee if you haven't gone wild and used more than 35 credits. Check our Refund Policy for the fine print."
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#F3F2ED] pt-24 md:pt-32">
      
      {/* --- Hero Section --- */}
      <section className="px-6 md:px-12 mb-16 text-center relative z-10">
         <div className="max-w-4xl mx-auto">
            <h1 className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-black leading-[0.9] mb-6">
               Pay for
               <br />
               <span className="relative inline-block text-[#FF4D00]">
                  impact
                  <div className="absolute -bottom-2 left-0 w-full h-4 text-black opacity-20">
                     <UnderlineLine className="w-full h-full" />
                  </div>
               </span>
               , not hours.
            </h1>
            <p className="font-serif italic text-2xl text-gray-600 font-medium">
               Simple pricing. No hidden fees. Cancel before your boss finds out.
            </p>
         </div>
      </section>

      {/* --- Toggle --- */}
      <div className="flex justify-center mb-16 relative z-20">
         <div className="bg-white p-1 rounded-full border-2 border-black flex relative shadow-[4px_4px_0px_black]">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-6 py-2 rounded-full font-sans font-bold text-sm uppercase tracking-wider transition-colors ${!isAnnual ? 'text-white' : 'text-black hover:bg-gray-100'}`}
            >
               Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-6 py-2 rounded-full font-sans font-bold text-sm uppercase tracking-wider transition-colors ${isAnnual ? 'text-white' : 'text-black hover:bg-gray-100'}`}
            >
               Yearly
            </button>
            
            {/* Sliding Pill */}
            <motion.div 
               className="absolute top-1 bottom-1 bg-black rounded-full"
               initial={false}
               animate={{ 
                  left: isAnnual ? '50%' : '4px', 
                  width: isAnnual ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                  x: isAnnual ? '-2px' : '0px'
               }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Savings Sticker */}
            <motion.div 
               className="absolute -right-24 -top-8 hidden md:block"
               animate={{ rotate: isAnnual ? 12 : 0, scale: isAnnual ? 1.1 : 1 }}
            >
               <LimeBurst className="w-24 h-24 drop-shadow-md" />
               <div className="absolute inset-0 flex items-center justify-center -rotate-12">
                  <span className="font-sans font-black text-xs uppercase text-center leading-none text-black">
                     2 months<br/>free!
                  </span>
               </div>
            </motion.div>
         </div>
      </div>

      {/* --- Pricing Cards --- */}
      <section className="px-4 md:px-12 mb-32 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* --- STARTER --- */}
            <div className="bg-white text-black border-2 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_black] hover:-translate-y-2 transition-transform duration-300 relative group">
               <div className="mb-6">
                  <h3 className="font-sans font-black text-3xl uppercase tracking-tighter">The Side Hustle</h3>
                  <p className="font-serif italic text-gray-500 font-medium">Just testing the waters.</p>
               </div>
               <div className="mb-8">
                  <span className="font-sans font-black text-5xl">$0</span>
                  <span className="font-sans font-bold text-gray-400 text-lg">/mo</span>
               </div>
               <ul className="space-y-4 mb-8">
                  {[
                     "5 Credits / mo",
                     "Watermarked Exports",
                     "Standard Resolution",
                     "Community Support",
                     "1 User Seat"
                  ].map((feat, i) => (
                     <li key={i} className="flex items-center gap-3 font-sans font-bold text-sm">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                           <Check className="w-3 h-3 text-black" />
                        </div>
                        {feat}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-4 rounded-xl border-2 border-black font-sans font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  Start Free
               </button>
            </div>

            {/* --- PRO (Featured) --- */}
            <div className="bg-black text-white border-2 border-black rounded-[2rem] p-8 shadow-[12px_12px_0px_#FF4D00] relative transform md:-translate-y-4 z-10">
               
               {/* Popular Badge */}
               <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-[#FF4D00] text-white px-6 py-2 rounded-full border-2 border-black font-sans font-black text-xs uppercase tracking-widest shadow-sm">
                     Most Popular
                  </div>
               </div>

               <div className="mb-6 mt-2">
                  <h3 className="font-sans font-black text-3xl uppercase tracking-tighter text-[#D9F99D]">The Scale Up</h3>
                  <p className="font-serif italic text-gray-400 font-medium">For brands ready to ship.</p>
               </div>
               <div className="mb-8">
                  <span className="font-sans font-black text-6xl">${isAnnual ? '49' : '59'}</span>
                  <span className="font-sans font-bold text-gray-500 text-lg">/mo</span>
                  {isAnnual && <p className="text-[#FF4D00] text-xs font-bold mt-2">Billed $588 yearly</p>}
               </div>
               <ul className="space-y-4 mb-8">
                  {[
                     "100 Credits / mo",
                     "No Watermark",
                     "High-Res 4K Exports",
                     "Priority Support",
                     "3 User Seats",
                     "Commercial License",
                     "Private Mode"
                  ].map((feat, i) => (
                     <li key={i} className="flex items-center gap-3 font-sans font-bold text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#FF4D00] flex items-center justify-center shrink-0">
                           <Check className="w-3 h-3 text-white" />
                        </div>
                        {feat}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-4 rounded-xl bg-[#D9F99D] text-black font-sans font-black text-sm uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white transition-colors duration-300">
                  Get Started
               </button>
            </div>

            {/* --- AGENCY --- */}
            <div className="bg-white text-black border-2 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_black] hover:-translate-y-2 transition-transform duration-300 relative">
               <div className="mb-6">
                  <h3 className="font-sans font-black text-3xl uppercase tracking-tighter">World Domination</h3>
                  <p className="font-serif italic text-gray-500 font-medium">For serious volume.</p>
               </div>
               <div className="mb-8">
                  <span className="font-sans font-black text-5xl">${isAnnual ? '199' : '249'}</span>
                  <span className="font-sans font-bold text-gray-400 text-lg">/mo</span>
               </div>
               <ul className="space-y-4 mb-8">
                  {[
                     "Unlimited Credits*",
                     "API Access",
                     "Dedicated Success Manager",
                     "Custom Brand Models",
                     "Unlimited Seats",
                     "SSO & Security",
                     "SLA Guarantee"
                  ].map((feat, i) => (
                     <li key={i} className="flex items-center gap-3 font-sans font-bold text-sm">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                           <Check className="w-3 h-3 text-black" />
                        </div>
                        {feat}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-4 rounded-xl border-2 border-black font-sans font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  Contact Sales
               </button>
            </div>

         </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="px-6 md:px-12 mb-32 max-w-4xl mx-auto">
         <div className="flex items-center justify-center gap-4 mb-16">
            <GreenAbstractFlower className="w-12 h-12 md:w-16 md:h-16 animate-spin-slow" />
            <h2 className="font-sans font-black text-4xl md:text-6xl text-center">
               Burning Questions
            </h2>
         </div>
         
         <div className="space-y-4">
            {faqs.map((faq, i) => (
               <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
         </div>
      </section>

      {/* --- Footer --- */}
      <SectionFooter />
    </div>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="border-2 border-black rounded-2xl bg-white text-black overflow-hidden">
         <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
         >
            <span className="font-sans font-bold text-lg md:text-xl">{question}</span>
            <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
               <Plus className="w-6 h-6 text-[#FF4D00]" />
            </div>
         </button>
         <AnimatePresence>
            {isOpen && (
               <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                  <div className="p-6 pt-0 border-t border-dashed border-gray-300 font-serif italic text-lg text-gray-600">
                     {answer}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Pricing;