type Stat = { label: string; value: string };

type PageStatsProps = {
  stats: Stat[];
};

export function PageStats({ stats }: PageStatsProps) {
  return (
    <div className="theme-stats-bar shadow-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-gradient-to-r from-gold via-gold-light to-gold sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="theme-stat-cell px-4 py-6 text-center sm:px-6">
            <p className="font-display bg-gradient-to-br from-gold-deep via-gold to-royal bg-clip-text text-3xl font-semibold text-transparent">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gold-deep">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
