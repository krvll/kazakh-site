import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhatSection } from './components/WhatSection';
import { HelpSection } from './components/HelpSection';
import { ProsConsSection } from './components/ProsConsSection';
import { FutureSection } from './components/FutureSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <HeroSection />
          <WhatSection />
          <HelpSection />
          <ProsConsSection />
          <FutureSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
