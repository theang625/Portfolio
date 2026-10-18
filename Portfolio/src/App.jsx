import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './app/components/About.jsx';
import HeroSection from './app/components/HeroSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
