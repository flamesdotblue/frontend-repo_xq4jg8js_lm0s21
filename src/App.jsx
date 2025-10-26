import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-fuchsia-500/30 selection:text-fuchsia-100">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
