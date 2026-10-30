type Stat = { label: string; value: string };

type PageStatsProps = {
  stats: Stat[];
};

export function PageStats({ stats }: PageStatsProps) {
  return (
    <div className="border-b border-navy/10 bg-pure shadow-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-navy/10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-ivory px-4 py-6 text-center sm:px-6">
            <p className="font-display text-3xl font-semibold text-royal">{s.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy/55">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
