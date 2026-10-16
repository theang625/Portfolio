import React, { useEffect, useState } from 'react';
import AppLogo from './ui/AppLogo';
import AppIcon from './ui/AppIcon';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skill' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const name = [
  {
    firstName: 'Chhun',
    lastName: 'Theang',
  },
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
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2 transition-all duration-500 expo-ease ${
          scrolled ? 'bg-background/60' : ''
        }`}
        aria-label="Primary"
      >
        <a
          href="#Home"
          className="flex items-center gap-2"
          aria-label="GlassFolio home"
        >
          <span className="flex font-display text-3xl tracking-tight gap-2">
            {name?.map((n, index) => (
              <span key={index} className="flex gap-2">
                {/* Desktop View: Shows full first and last name */}
                <span className="hidden md:flex gap-2">
                  <span className="font-bold text-primary">{n?.firstName}</span>
                  <span>{n?.lastName}</span>
                </span>

                {/* Mobile View: Shows initials or shortened version */}
                <span className="flex md:hidden gap-1">
                  <span className="font-bold text-primary">
                    {n?.firstName?.[0]}
                  </span>
                  <span>{n?.lastName?.[0]}</span>
                </span>
              </span>
            ))}
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

        <div>
          <button className="md: hidden lg:flex">
            <AppIcon
              name={open ? 'CommandLineIcon' : 'CommandLineIcon'}
              size={30}
            />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform duration-300 spring-ease hover:scale-105"
          >
            <AppIcon name={'NewspaperIcon'} className="mr-1" size={28} />
            Resume.pdf
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-foreground/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AppIcon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
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
