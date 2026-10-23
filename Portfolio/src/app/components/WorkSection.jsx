import React, { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './projects/ProjectCard';
import ProjectModal from './projects/ProjectModal';
import { projects, filters } from './projects/projectData';
import { useReveal } from './useReveal';

// Bento layout classes — 6 cards
const bentoClasses = {
  lumen: 'md:col-span-2 lg:col-span-3 lg:row-span-2',
  fieldnotes: 'lg:col-span-3',
  marrow: 'lg:col-span-3',
  tidepool: 'lg:col-span-2',
  atlas: 'lg:col-span-2',
  quill: 'md:col-span-2 lg:col-span-2',
};

export default function WorkSection() {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);
  const ref = useReveal();

  const visible = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  const isAll = active === 'all';

  return (
    <section id="work" ref={ref} className="relative px-6 pb-16 pt-12 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Selected work" index="01" />

        <div
          data-reveal
          className="reveal mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="font-display text-section-xl font-semibold">
            Projects I'd show
            <br />
            <span className="italic text-muted-foreground">my own mother.</span>
          </h2>

          <div
            role="tablist"
            aria-label="Filter projects"
            className="glass flex w-fit flex-wrap gap-1 rounded-3xl p-1 sm:gap-2 sm:p-2"
          >
            {filters.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={active === f.key}
                onClick={() => setActive(f.key)}
                className={`min-h-[44px] rounded-full px-4 text-sm font-semibold transition-all duration-500 expo-ease ${
                  active === f.key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={
            isAll
              ? 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[minmax(14rem,auto)] lg:grid-cols-6'
              : 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
          }
        >
          {visible.map((p, i) => {
            // If the filtered count is odd, adjust the last card
            const isLastOdd =
              !isAll && visible.length % 2 === 1 && i === visible.length - 1;

            const cls = isAll
              ? bentoClasses[p.id]
              : isLastOdd
                ? 'md:col-span-2 lg:col-span-1'
                : '';

            return (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                featured={isAll && p.id === 'lumen'}
                className={cls}
                onOpen={() => setSelected(p)}
              />
            );
          })}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
