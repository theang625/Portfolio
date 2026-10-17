export default function SectionHeader({ label, index }) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {label}
        </span>
        <span className="font-display text-sm font-semibold text-primary">
          {index}
        </span>
      </div>
      <div className="mt-2 h-0.5 w-full bg-primary/70" />
    </div>
  );
}
