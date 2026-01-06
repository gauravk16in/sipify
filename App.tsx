
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionXRay from './components/SectionXRay';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';
import SectionFooter from './components/SectionFooter';
import { PrivacyPolicy, TermsConditions, RefundPolicy } from './components/Legal';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import Product from './components/Product';
import Solution from './components/Solution';

type Page = 'home' | 'privacy' | 'terms' | 'refund' | 'about' | 'pricing' | 'product' | 'solution';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      case 'terms':
        return <TermsConditions onBack={() => setCurrentPage('home')} />;
      case 'refund':
        return <RefundPolicy onBack={() => setCurrentPage('home')} />;
      case 'about':
        return <AboutUs onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing onNavigate={setCurrentPage} />;
      case 'product':
        return <Product onNavigate={setCurrentPage} />;
      case 'solution':
        return <Solution onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Hero />
            <SectionTwo />
            <SectionThree />
            <SectionXRay />
            <SectionSix />
            <SectionSeven />
            <SectionFooter onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#F3F2ED]">
      {/* Header stays visible on all pages, passing navigation prop */}
      <Header onNavigate={setCurrentPage} />
      {renderContent()}
    </main>
  );
}

export default App;