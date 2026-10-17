import React from 'react';
import AppImage from '../../components/ui/AppImage';
import SectionHeader from './SectionHeader';
import { useReveal } from './useReveal';

const process = [
  {
    title: 'Listen',
    body: 'Before a single frame, I spend a week with the people who will live with the work — customers, founders, the intern who answers support email.',
  },
  {
    title: 'Shape',
    body: 'Rough, ugly and fast. Paper, foam board, a throwaway Figma file. I would rather kill ten ideas on Tuesday than defend one on Friday.',
  },
  {
    title: 'Finish',
    body: 'Every pixel, easing curve and pantone swatch gets a second look. Finish is where trust is earned, and it never shows up in a brief.',
  },
];

const meta = [
  { label: 'Discipline', value: 'Brand & Digital Design' },
  { label: 'Based in', value: 'Brooklyn, NY' },
  { label: 'Experience', value: '12 years' },
  { label: 'Education', value: 'MFA, Visual Communication' },
];

export default function AboutSection() {
  const ref = useReveal();
  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 pb-16 pt-12 sm:pt-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="About me" index="02" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Oval portrait + rotated ring */}
          <div data-reveal className="reveal lg:col-span-5">
            <div className="relative mx-auto w-4/5 max-w-sm">
              <div
                className="absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-full border border-foreground/20"
                aria-hidden="true"
              />

              <div className="glass-strong relative aspect-[3/4] overflow-hidden rounded-full p-2">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-foreground">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1e95358c6-1772081363912.png"
                    alt="Confident man in a blazer smiling in a bright, airy office with white walls and soft daylight"
                    fill
                    sizes="(max-width: 1024px) 70vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="glass absolute -bottom-4 -right-2 rounded-2xl px-4 py-3 sm:-right-6">
                <p className="font-display text-3xl font-semibold text-accent">
                  140+
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  projects shipped
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2
              data-reveal
              className="reveal font-display text-section-xl font-semibold"
            >
              I make things
              <br />
              <span className="italic text-muted-foreground">
                feel considered.
              </span>
            </h2>

            <p
              data-reveal
              className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              I started as a letterpress apprentice in Malmö, moved to New York
              for grad school and never quite left. Today I lead a three-person
              studio that takes on six projects a year — enough to care about
              each one.
            </p>

            <div className="mt-10">
              {process.map((p, i) => (
                <div
                  key={p.title}
                  data-reveal
                  className="reveal grid grid-cols-1 gap-2 border-b border-border py-5 sm:grid-cols-4 sm:gap-6"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <h3 className="font-display text-xl font-semibold sm:col-span-1">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-3">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <dl className="glass mt-14 grid grid-cols-2 gap-6 rounded-2xl p-6 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
