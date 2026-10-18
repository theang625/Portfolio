import React, { useEffect, useRef } from 'react';
import AppImage from '../../components/ui/AppImage';
import AppIcon from '../../components/ui/AppIcon';

export default function HeroSection() {
  const stageRef = useRef(null);
  const tiltRef = useRef(null);
  const blobARef = useRef(null);
  const blobBRef = useRef(null);
  const blobCRef = useRef(null);
  const grainRef = useRef(null);

  useEffect(() => {
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    let scrollY = 0;
    let velocity = 0;
    let lastY = window.scrollY;
    let raf = 0;

    const onMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      velocity = Math.min(Math.abs(scrollY - lastY), 60);
      lastY = scrollY;
    };

    const tick = () => {
      tx += (mx - tx) * 0.08;
      ty += (my - ty) * 0.08;
      velocity *= 0.92;

      if (tiltRef.current) {
        tiltRef.current.style.transform = `perspective(1000px) rotateY(${tx * 14}deg) rotateX(${-ty * 12}deg) translate3d(${tx * 10}px, ${ty * 10}px, 0)`;
      }

      if (blobARef.current) {
        blobARef.current.style.transform = `translate3d(${tx * 50}px, ${scrollY * 0.3 + ty * 40}px, 0)`;
      }

      if (blobBRef.current) {
        blobBRef.current.style.transform = `translate3d(${-tx * 80}px, ${scrollY * 0.5 + velocity * 2}px, 0)`;
      }

      if (blobCRef.current) {
        blobCRef.current.style.transform = `translate3d(${tx * 30}px, ${scrollY * 0.15}px, 0)`;
      }

      if (grainRef.current) {
        grainRef.current.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      ref={stageRef}
      className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Background depth layers */}
      <div className="bg-mesh absolute inset-0" aria-hidden="true" />

      <div
        ref={blobARef}
        className="absolute -left-24 top-10 h-[28rem] w-[28rem] max-w-[80vw]"
        aria-hidden="true"
      >
        <div className="blob-primary animate-morph-a h-full w-full opacity-70" />
      </div>

      <div
        ref={blobBRef}
        className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] max-w-[85vw]"
        aria-hidden="true"
      >
        <div className="blob-accent animate-morph-b h-full w-full opacity-40" />
      </div>

      <div
        ref={blobCRef}
        className="absolute bottom-0 left-1/3 h-96 w-96 max-w-[70vw]"
        aria-hidden="true"
      >
        <div className="blob-deep animate-morph-c h-full w-full opacity-90" />
      </div>

      <div
        ref={grainRef}
        className="noise-overlay pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Vertical guide lines */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-6xl justify-between px-6 md:flex"
        aria-hidden="true"
      >
        <div className="h-full w-px bg-foreground/5" />
        <div className="h-full w-px bg-foreground/5" />
        <div className="h-full w-px bg-foreground/5" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
        {/* Text content */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="reveal-ready mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Open for projects — Fall 2026
          </div>

          <h1 className="font-display font-semibold">
            <span
              className="reveal-ready block text-hero-xl text-outline italic"
              style={{ animationDelay: '120ms' }}
            >
              Chhun
            </span>

            <span
              className="reveal-ready block text-hero-xl pl-4 sm:pl-12"
              style={{ animationDelay: '260ms' }}
            >
              Theang
            </span>
          </h1>

          <p
            className="reveal-ready mt-8 max-w-md border-l border-foreground/30 pl-5 text-base leading-relaxed text-muted-foreground"
            style={{ animationDelay: '420ms' }}
          >
            Creative director in Brooklyn. I design brand systems, digital
            products and motion pieces for studios that care about the small
            stuff — kerning, easing curves, the way a button feels under a
            thumb.
          </p>

          <div
            className="reveal-ready mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '560ms' }}
          >
            <a
              href="#work"
              className="group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-500 expo-ease hover:gap-5"
            >
              See selected work
              <AppIcon name="ArrowRightIcon" size={18} />
            </a>

            <a
              href="#contact"
              className="glass inline-flex min-h-[48px] items-center rounded-full px-7 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/15"
            >
              Start a project
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
          <div className="relative w-full max-w-sm">
            <div ref={tiltRef} className="relative will-change-transform">
              <div
                className="absolute -right-3 top-4 h-full w-full rounded-t-[12rem] rounded-b-2xl border border-foreground/25"
                aria-hidden="true"
              />

              <div className="glass-strong relative overflow-hidden rounded-t-[12rem] rounded-b-2xl p-2">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[11.5rem] rounded-b-xl bg-foreground">
                  <AppImage
                    src="https://cdn-icons-png.flaticon.com/512/9815/9815472.png"
                    alt="Portrait of a smiling woman with dark hair in warm window light, soft shadows, cozy studio setting"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 30vw"
                    className="object-cover"
                  />

                  <div className="scrim-bottom absolute inset-0" />

                  <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                      <AppIcon name="MapPinIcon" size={14} />
                      Brooklyn, New York
                    </div>

                    <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                      12 years, 140+ shipped projects, one very patient dog.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rotating badge */}
              <div
                className="absolute -left-6 -top-6 h-28 w-28 text-foreground sm:-left-10"
                aria-hidden="true"
              >
                <svg
                  className="animate-spin-slow h-full w-full"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="badgePath"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>

                  <text
                    fontSize="10"
                    fontWeight="600"
                    letterSpacing="2.2"
                    fill="currentColor"
                  >
                    <textPath href="#badgePath">
                      BRAND • DIGITAL • MOTION • PRINT •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <AppIcon name="SparklesIcon" size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
