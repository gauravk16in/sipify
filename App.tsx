import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';
import SectionFooter from './components/SectionFooter';

function App() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Header />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionFooter />
    </main>
  );
}

export default App;