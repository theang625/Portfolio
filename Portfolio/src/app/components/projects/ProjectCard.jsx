import React, { useRef } from 'react';
import AppImage from '../../../components/ui/AppImage';
import AppIcon from '../../../components/ui/AppIcon';

export default function ProjectCard({
  project,
  index,
  featured,
  className = '',
  onOpen,
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;

    el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) scale3d(1.015, 1.015, 1)`;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <div className={`group relative ${className}`}>
      {/* Ghost offset frame */}
      <div
        className="pointer-events-none absolute -right-1.5 top-2 h-full w-full rounded-2xl border border-foreground/20 transition-all duration-500 expo-ease group-hover:-right-0.5 group-hover:top-1"
        aria-hidden="true"
      />

      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        aria-label={`Open ${project.title} project details`}
        className={`glass relative block h-full w-full overflow-hidden rounded-2xl text-left transition-transform duration-500 spring-ease ${
          featured ? 'min-h-[24rem] lg:min-h-[32rem]' : 'min-h-[16rem]'
        } reveal-ready`}
        style={{ animationDelay: `${index * 90}ms` }}
      >
        <div className="absolute inset-0 bg-foreground">
          <AppImage
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] expo-ease group-hover:scale-105"
          />
        </div>

        <div className="scrim-bottom absolute inset-0" />

        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground">
          {project.year}
        </span>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div className="glass rounded-2xl px-4 py-3 transition-transform duration-500 expo-ease group-hover:-translate-y-1">
            <h3
              className={`font-display font-semibold text-foreground ${
                featured ? 'text-2xl sm:text-3xl' : 'text-xl'
              }`}
            >
              {project.title}
            </h3>

            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {project.categoryLabel}
            </p>
          </div>

          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 spring-ease group-hover:rotate-45">
            <AppIcon name="ArrowUpRightIcon" size={18} />
          </span>
        </div>
      </button>
    </div>
  );
}
