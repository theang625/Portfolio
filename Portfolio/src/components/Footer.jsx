import React, { useState, useEffect } from 'react';
import { RiTelegramLine, RiGithubLine, RiSmartphoneLine } from 'react-icons/ri';
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
    href: 'https://github.com/theang625',
    icon: <RiGithubLine className="h-5 w-5" />,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/chhuntheangthorn',
    icon: <RiTelegramLine className="h-5 w-5" />,
  },
  {
    name: 'Contact',
    href: 'tel:+85581553323',
    icon: <RiSmartphoneLine className="h-5 w-5" />,
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const email = 'hello@gmail.com';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        }),
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
    <footer
      id="contact"
      className="relative overflow-hidden pt-24 pb-12 sm:pt-32"
    >
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
                Have an ambitious idea, need high-craft product design, or
                full-stack engineering? My inbox is always open.
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
                <AppIcon
                  name={copied ? 'CheckIcon' : 'DocumentDuplicateIcon'}
                  size={18}
                  className={copied ? 'text-success' : 'text-muted-foreground'}
                />
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
        <div className="grid grid-cols-1 gap-12 lg:justify-between lg:flex lg:items-start border-t border-foreground/10 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Local Time Column */}
          <div className="space-y-5 lg:col-span-5">
            <a
              href="#top"
              className="flex items-center gap-2.5 group w-fit"
              aria-label="GlassFolio home"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                MyPortfolio
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Crafting tactile digital products, high-fidelity interfaces, and
              fluid interactions at the intersection of design and code.
            </p>

            {/* Live Clock / Location Card */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>Local time:</span>
              <span className="font-mono font-medium text-foreground">
                {time || '00:00:00 UTC'}
              </span>
            </div>
          </div>

          {/* Social Presence Column */}
          <div className="space-y-4 lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Connect & Follow
            </h3>
            <div className="flex flex-wrap gap-2.5 py-5">
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
                Open for design critiques, code reviews, advisory, or occasional
                coffee chats.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row text-xs text-muted-foreground">
          <p>© {currentYear}. Handcrafted with React, Vite & Tailwind CSS.</p>

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
