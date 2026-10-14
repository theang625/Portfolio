'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from './ui/AppLogo';
import Icon from './ui/AppIcon';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Words', href: '#words' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY > 24) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2 transition-all duration-500 expo-ease ${scrolled ? 'bg-background/60' : ''
          }`}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2"
          aria-label="GlassFolio home"
        >
          <AppLogo size={36} />
          <span className="font-display text-lg tracking-tight">
            GlassFolio
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links?.map((l) => (
            <li key={l?.href}>
              <a
                href={l?.href}
                className="inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                {l?.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-300 spring-ease hover:scale-105"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-foreground/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 -z-10 bg-background/70 backdrop-blur-xl md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6">
            {links?.map((l) => (
              <a
                key={l?.href}
                href={l?.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl tracking-tight"
              >
                {l?.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
