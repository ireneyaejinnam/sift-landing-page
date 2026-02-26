import { Badge } from "@/components/ui/badge";

const recommendations = [
  {
    category: "Art",
    title: "Kehinde Wiley: New Portraits",
    details: "Sean Kelly Gallery · Free · Chelsea",
    time: "Sat 11am–6pm",
    badge: "Ends in 17 days",
    accentClass: "bg-primary",
  },
  {
    category: "Outdoors",
    title: "Spring Foraging Walk",
    details: "Prospect Park · Free · Brooklyn",
    time: "Sat 9:30am",
    badge: "This Saturday",
    accentClass: "bg-accent",
  },
  {
    category: "Comedy",
    title: "Late-Night Comedy Lottery",
    details: "Eastville Comedy Club · $10 · East Village",
    time: "Fri 10:30pm",
    badge: null,
    accentClass: "bg-primary",
  },
];

const AppMockup = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-sm">
        {/* Phone frame */}
        <div className="fade-up rounded-[2.5rem] border-[6px] border-foreground/15 bg-card p-1 shadow-2xl shadow-foreground/10">
          {/* Inner screen */}
          <div className="rounded-[2rem] bg-background overflow-hidden">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-4 pb-2">
              <span className="text-[10px] font-medium text-secondary">9:41</span>
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-secondary/40" />
                <div className="h-2 w-2 rounded-full bg-secondary/40" />
                <div className="h-2 w-2 rounded-full bg-secondary/40" />
              </div>
            </div>

            {/* App header */}
            <div className="px-5 pt-2 pb-3">
              <span className="font-serif italic text-lg text-foreground">Sift</span>
              <p className="mt-1 text-[11px] text-secondary">Your weekend · 3 picks</p>
            </div>

            {/* Filter pills */}
            <div className="flex gap-2 px-5 pb-4 overflow-hidden">
              <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-[10px] font-medium text-primary-foreground">
                This weekend
              </span>
              <span className="shrink-0 rounded-full bg-accent/20 px-3 py-1 text-[10px] font-medium text-accent">
                Under $20
              </span>
              <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-[10px] font-medium text-secondary">
                &lt; 30 min
              </span>
            </div>

            {/* Recommendation cards */}
            <div className="space-y-3 px-5 pb-6">
              {recommendations.map((rec) => (
                <div
                  key={rec.title}
                  className="flex gap-3 rounded-xl border border-border bg-card p-3.5"
                >
                  {/* Accent dot */}
                  <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${rec.accentClass}`} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium text-accent uppercase tracking-wider">
                        {rec.category}
                      </span>
                      {rec.badge && (
                        <span className="text-[9px] text-primary font-medium">{rec.badge}</span>
                      )}
                    </div>
                    <p className="mt-0.5 font-serif text-[13px] font-bold text-card-foreground leading-tight">
                      {rec.title}
                    </p>
                    <p className="mt-1 text-[11px] text-secondary leading-snug">{rec.details}</p>
                    <p className="mt-0.5 text-[10px] text-secondary/70">{rec.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border px-8 py-3 flex justify-around">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <div className="h-1 w-8 rounded-full bg-border" />
              <div className="h-1 w-8 rounded-full bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMockup;
