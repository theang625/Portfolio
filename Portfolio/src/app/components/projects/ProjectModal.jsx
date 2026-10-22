import React, { useEffect } from 'react';
import AppImage from '../../../components/ui/AppImage';
import AppIcon from '../../../components/ui/AppIcon';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="glass-strong relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-3xl lg:grid-cols-2"
        style={{
          animation: 'modalIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-md transition-transform duration-300 spring-ease hover:rotate-90"
        >
          <AppIcon name="XMarkIcon" size={20} />
        </button>

        <div className="relative min-h-[18rem] bg-foreground lg:min-h-[32rem]">
          <AppImage
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              {project.categoryLabel}
            </span>

            <h3 className="mt-3 font-display text-4xl font-semibold leading-tight">
              {project.title}
            </h3>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Client
              </dt>
              <dd className="mt-1 font-semibold">{project.client}</dd>
            </div>

            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Year
              </dt>
              <dd className="mt-1 font-semibold">{project.year}</dd>
            </div>

            <div className="col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Role
              </dt>
              <dd className="mt-1 font-semibold">{project.role}</dd>
            </div>
          </dl>

          <a
            href="#contact"            onClick={onClose}
            className="inline-flex min-h-[48px] w-fit items-center gap-3 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground"
          >
            Want something like this?
            <AppIcon name="ArrowRightIcon" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
