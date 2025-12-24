import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import FeatureCarousel from './components/FeatureCarousel';
import BusinessTypes from './components/BusinessTypes';
import ChatWidget from './components/ChatWidget';
import PricingPage from './pages/PricingPage';

function HomePage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <FeatureCarousel />
        <BusinessTypes />
        <div className="h-24 bg-transparent"></div> {/* Spacer for FAB */}
      </main>

      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
