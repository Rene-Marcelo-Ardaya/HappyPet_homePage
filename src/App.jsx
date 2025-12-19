import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import FeatureCarousel from './components/FeatureCarousel';
import Pricing from './components/Pricing';
import FloatingActionButton from './components/FloatingActionButton';
import Sidebar from './components/Sidebar';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-grow">
          <Hero />
          <ValueProposition />
          <FeatureCarousel />
          <Pricing />
          <div className="h-24 bg-transparent"></div> {/* Spacer for FAB */}
        </main>

        {!isChatOpen && (
          <FloatingActionButton onClick={() => setIsChatOpen(true)} />
        )}
        <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </LanguageProvider>
  );
}

export default App;

