
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = (page: Page) => {
    const routes: Record<Page, string> = {
      home: '/',
      privacy: '/privacy-policy',
      terms: '/terms-conditions',
      refund: '/refund-policy',
      about: '/company',
      pricing: '/pricing',
      product: '/products',
      solution: '/solutions'
    };
    navigate(routes[page]);
  };

  return (
    <>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionXRay />
      <SectionSix />
      <SectionSeven />
      <SectionFooter onNavigate={handleNavigate} />
    </>
  );
};

const AppContent = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (page: Page) => {
    const routes: Record<Page, string> = {
      home: '/',
      privacy: '/privacy-policy',
      terms: '/terms-conditions',
      refund: '/refund-policy',
      about: '/company',
      pricing: '/pricing',
      product: '/products',
      solution: '/solutions'
    };
    navigate(routes[page]);
  };

  return (
    <main className="w-full min-h-screen bg-[#F3F2ED]">
      <ScrollToTop />
      <Header onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy onBack={() => navigate('/')} />} />
        <Route path="/terms-conditions" element={<TermsConditions onBack={() => navigate('/')} />} />
        <Route path="/refund-policy" element={<RefundPolicy onBack={() => navigate('/')} />} />
        <Route path="/company" element={<AboutUs onNavigate={handleNavigate} />} />
        <Route path="/pricing" element={<Pricing onNavigate={handleNavigate} />} />
        <Route path="/products" element={<Product onNavigate={handleNavigate} />} />
        <Route path="/solutions" element={<Solution onNavigate={handleNavigate} />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;