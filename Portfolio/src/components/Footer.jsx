'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from './ui/AppLogo';
import AppIcon from './ui/AppIcon';

const navigationLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Words & Insights', href: '#words' },
  { label: 'Selected Archive', href: '#archive' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.312c-.282-.058-2.617-.52-5.006-.217-.152-.35-.31-.7-.474-1.047 3.013-1.583 3.55-4.048 3.55-4.048zm-5.032-2.176a8.528 8.528 0 014.28 1.706s-.49 2.24-3.328 3.738c-1.353-2.484-2.83-4.63-2.83-4.63.618-.52 1.257-.814 1.878-.814zm-3.69 1.157s1.493 2.15 2.85 4.643c-3.794 1.03-7.26.172-7.26.172a8.508 8.508 0 014.41-4.815zM3.5 12c0-.236.012-.469.034-.7 0 0 3.74.887 7.766-.263.167.354.329.712.484 1.07-2.316.715-4.595 2.802-5.748 5.485A8.47 8.47 0 013.5 12zm8.5 8.5a8.47 8.47 0 01-5.076-1.704c.995-2.378 3.016-4.225 5.215-4.908.97 2.535 1.365 5.034 1.402 5.297A8.473 8.473 0 0112 20.5zm2.946-.667c-.04-.326-.43-2.73-1.367-5.186 2.348-.363 4.417.24 4.545.28a8.508 8.508 0 01-3.178 4.906z" />
      </svg>
    ),
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const email = 'hello@glassfolio.dev';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className="relative overflow-hidden pt-24 pb-12 sm:pt-32">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-35 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--primary) 0%, var(--secondary) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-10 right-10 -z-10 h-72 w-72 rounded-full opacity-25 blur-[90px]"
        style={{ background: 'var(--accent)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main CTA Section */}
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 shadow-2xl border border-foreground/10">
          <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl space-y-4">
              {/* Availability chip */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs font-medium text-success backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                Available for Q2 / Q3 Design & Dev Projects
              </div>

              <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.08]">
                Let’s craft something{' '}
                <span className="italic text-primary underline decoration-primary/30 decoration-wavy underline-offset-8">
                  extraordinary
                </span>{' '}
                together.
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg max-w-xl">
                Have an ambitious idea, need high-craft product design, or full-stack engineering? My inbox is always open.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-foreground/15 hover:border-foreground/30 active:scale-95"
                aria-label="Copy email address to clipboard"
              >
                <AppIcon name={copied ? 'CheckIcon' : 'DocumentDuplicateIcon'} size={18} className={copied ? 'text-success' : 'text-muted-foreground'} />
                <span>{copied ? 'Copied to clipboard!' : email}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 spring-ease hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                <span>Start a Project</span>
                <AppIcon name="ArrowUpRightIcon" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Multi-column Information Grid */}
        <div className="grid grid-cols-1 gap-12 border-t border-foreground/10 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Local Time Column */}
          <div className="space-y-5 lg:col-span-5">
            <a href="#top" className="flex items-center gap-2.5 group w-fit" aria-label="GlassFolio home">
              <AppLogo size={32} />
              <span className="font-display text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                GlassFolio
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Crafting tactile digital products, high-fidelity interfaces, and fluid interactions at the intersection of design and code.
            </p>

            {/* Live Clock / Location Card */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Local time:</span>
              <span className="font-mono font-medium text-foreground">{time || '00:00:00 UTC'}</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence Column */}
          <div className="space-y-4 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Connect & Follow
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-foreground/10 hover:text-foreground hover:scale-105"
                  aria-label={`Visit our ${s.name}`}
                >
                  <span className="text-foreground/80">{s.icon}</span>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                Open for design critiques, code reviews, advisory, or occasional coffee chats.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row text-xs text-muted-foreground">
          <p>© {currentYear} GlassFolio. Handcrafted with React, Vite & Tailwind CSS.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 font-medium text-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/15 active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="transition-transform duration-300 spring-ease group-hover:-translate-y-0.5">
              <AppIcon name="ArrowUpIcon" size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
