import Reveal from '../Reveal';
import { GitBranch } from 'lucide-react';

const USERNAME = 'tushar27x';

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVEL_STYLES: Record<Day['level'], string> = {
  0: 'bg-black/5 dark:bg-white/5',
  1: 'bg-green-500/25',
  2: 'bg-green-500/50',
  3: 'bg-green-500/75',
  4: 'bg-green-400',
};

async function getContributions(): Promise<Day[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.contributions as Day[];
  } catch {
    return null;
  }
}

const Activity = async () => {
  const days = await getContributions();
  if (!days || days.length === 0) return null;

  // Group into week columns (Sun-Sat), padding the first week so rows align by weekday.
  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = Array(new Date(days[0].date).getUTCDay()).fill(null);
  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);

  const total = days.reduce((sum, d) => sum + d.count, 0);
  // Current streak: today may still be empty, so skip it before counting back.
  let streak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) streak++;
    else if (i !== days.length - 1) break;
  }

  // Trim the oldest weeks on smaller screens instead of scrolling.
  // Tiers (weeks kept): <360px 16, <sm 19, sm 36, md 46, lg 48, xl all.
  const weekVisibility = (i: number) => {
    const fromEnd = weeks.length - 1 - i;
    if (fromEnd >= 48) return { column: 'hidden xl:flex', label: 'hidden xl:block' };
    if (fromEnd >= 46) return { column: 'hidden lg:flex', label: 'hidden lg:block' };
    if (fromEnd >= 36) return { column: 'hidden md:flex', label: 'hidden md:block' };
    if (fromEnd >= 19) return { column: 'hidden sm:flex', label: 'hidden sm:block' };
    if (fromEnd >= 16) return { column: 'hidden min-[360px]:flex', label: 'hidden min-[360px]:block' };
    return { column: 'flex', label: 'block' };
  };

  const monthLabels = weeks.map((w, i) => {
    const first = w.find(Boolean);
    if (!first) return '';
    const d = new Date(first.date);
    const prev = i > 0 ? weeks[i - 1].find(Boolean) : null;
    const isNewMonth = !prev || new Date(prev.date).getUTCMonth() !== d.getUTCMonth();
    return isNewMonth && d.getUTCDate() <= 7 || i === 0
      ? d.toLocaleString('en', { month: 'short', timeZone: 'UTC' })
      : '';
  });

  const stats = [
    { label: 'contributions', value: total.toLocaleString() },
    { label: 'current_streak', value: `${streak}d` },
  ];

  return (
    <div className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
              <GitBranch className="text-primary" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase font-mono">05_COMMIT_LOG</h2>
              <div className="text-[10px] text-muted-foreground font-mono">
                $ git log --since=&quot;1 year ago&quot; --author=&quot;{USERNAME}&quot;
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-6xl mx-auto border border-black/10 dark:border-white/10 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="bg-black/5 dark:bg-white/5 px-4 py-2 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest font-bold"
              >
                github.com/{USERNAME}
              </a>
            </div>

            <div className="p-4 sm:p-8 font-mono flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:w-44 shrink-0">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl sm:text-5xl font-black tracking-tighter">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="min-w-0 flex-1">
                <div className="overflow-hidden pb-2">
                  <div className="w-max mx-auto">
                    <div className="flex gap-[3px] mb-1.5 text-[10px] text-muted-foreground h-3">
                      {monthLabels.map((m, i) => (
                        <div key={i} className={`w-[11px] relative ${weekVisibility(i).label}`}>
                          {m && <span className="absolute left-0 whitespace-nowrap">{m}</span>}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-[3px]" role="img" aria-label={`${total} GitHub contributions in the last year`}>
                      {weeks.map((w, i) => (
                        <div key={i} className={`flex-col gap-[3px] ${weekVisibility(i).column}`}>
                          {w.map((d, j) =>
                            d ? (
                              <div
                                key={j}
                                title={`${d.count} contribution${d.count === 1 ? '' : 's'} on ${d.date}`}
                                className={`w-[11px] h-[11px] rounded-[2px] ${LEVEL_STYLES[d.level]}`}
                              />
                            ) : (
                              <div key={j} className="w-[11px] h-[11px]" />
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-1.5 mt-4 text-[10px] text-muted-foreground">
                  <span>less</span>
                  {([0, 1, 2, 3, 4] as const).map((l) => (
                    <div key={l} className={`w-[11px] h-[11px] rounded-[2px] ${LEVEL_STYLES[l]}`} />
                  ))}
                  <span>more</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Activity;
