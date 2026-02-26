import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Tell us what you're into",
    description: "Art, comedy, live music, food — pick the categories that actually excite you. No endless browsing.",
  },
  {
    number: "02",
    title: "Set your constraints",
    description: "When are you free? How far will you go? And the big one: Free only, under $20, or no limit.",
  },
  {
    number: "03",
    title: "Get your shortlist",
    description: "3–5 things actually worth doing. Not a feed. Not 200 results. Just what fits.",
  },
];

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

const HowItWorks = () => {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="fade-up font-serif text-2xl font-bold text-foreground md:text-3xl max-w-[720px]">
          Three filters. Five recommendations. Zero rabbit holes.
        </h2>

        <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* Steps */}
          <div className="w-full space-y-8 md:w-1/2">
            {steps.map((step, i) => (
              <div key={step.number} className={`fade-up fade-up-delay-${i + 1}`}>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 font-serif text-sm font-bold text-primary">{step.number}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="fade-up fade-up-delay-2 w-full max-w-[280px] md:w-1/2 md:max-w-[300px]">
            <div className="rounded-[2.5rem] border-[6px] border-foreground/15 bg-card p-1 shadow-2xl shadow-foreground/10">
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
