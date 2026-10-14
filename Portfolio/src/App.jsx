import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1 pt-28 px-4 sm:px-6">
        <section id="work" className="mx-auto max-w-6xl py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Digital Product Designer & Creative Developer
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
            Crafting tactile digital experiences with <span className="text-primary italic">intention</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Specializing in high-craft user interfaces, fluid micro-interactions, and robust full-stack engineering.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
