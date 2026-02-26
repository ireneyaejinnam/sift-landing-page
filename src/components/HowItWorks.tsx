import { useState, useEffect, useCallback } from "react";

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

const detailView = {
  title: "Spring Foraging Walk",
  category: "Outdoors",
  location: "Prospect Park, Brooklyn",
  date: "Saturday, Mar 8 · 9:30 AM",
  price: "Free",
  distance: "12 min from you",
  description: "Join a guided walk through Prospect Park to discover edible plants, mushrooms, and herbs. All experience levels welcome.",
  tags: ["Family-friendly", "Rain or shine", "Bring a bag"],
};

type MockupView = "list" | "tapping" | "detail";

const HowItWorks = () => {
  const [view, setView] = useState<MockupView>("list");

  const runAnimation = useCallback(() => {
    setView("list");
    const t1 = setTimeout(() => setView("tapping"), 2400);
    const t2 = setTimeout(() => setView("detail"), 2900);
    const t3 = setTimeout(() => setView("detail"), 6400);
    const t4 = setTimeout(() => setView("list"), 6900);
    return [t1, t2, t3, t4];
  }, []);

  useEffect(() => {
    let timers = runAnimation();
    const interval = setInterval(() => {
      timers = runAnimation();
    }, 7400);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [runAnimation]);

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="fade-up font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
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

          {/* iPhone mockup */}
          <div className="fade-up fade-up-delay-2 w-full max-w-[280px] md:w-1/2 md:max-w-[300px] animate-float">
            {/* iPhone frame - black bezel */}
            <div className="rounded-[3rem] bg-foreground p-[10px] shadow-2xl shadow-foreground/20">
              {/* Dynamic Island / notch area */}
              <div className="relative rounded-[2.25rem] bg-background overflow-hidden">
                {/* Dynamic Island */}
                <div className="flex justify-center pt-3 pb-1">
                  <div className="h-[22px] w-[90px] rounded-full bg-foreground" />
                </div>

                {/* Screen content with transitions */}
                <div className="relative min-h-[420px]">
                  {/* List view */}
                  <div
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      opacity: view === "list" || view === "tapping" ? 1 : 0,
                      transform: view === "detail" ? "scale(0.95)" : "scale(1)",
                      pointerEvents: view === "detail" ? "none" : "auto",
                    }}
                  >
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
                      {recommendations.map((rec, i) => (
                        <div
                          key={rec.title}
                          className="flex gap-3 rounded-xl border border-border bg-card p-3.5 transition-all duration-200"
                          style={{
                            transform: view === "tapping" && i === 1 ? "scale(0.97)" : "scale(1)",
                            boxShadow: view === "tapping" && i === 1 ? "0 0 0 2px hsl(var(--primary) / 0.3)" : "none",
                          }}
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
                  </div>

                  {/* Detail view */}
                  <div
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      opacity: view === "detail" ? 1 : 0,
                      transform: view === "detail" ? "translateY(0)" : "translateY(20px)",
                      pointerEvents: view === "detail" ? "auto" : "none",
                    }}
                  >
                    {/* Detail header with back arrow */}
                    <div className="flex items-center gap-2 px-5 pt-2 pb-3">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="font-serif italic text-lg text-foreground">Sift</span>
                    </div>

                    {/* Hero image placeholder — styled gradient */}
                    <div className="mx-5 h-36 rounded-xl bg-gradient-to-br from-accent/30 via-primary/20 to-accent/10 flex items-end p-4 relative overflow-hidden">
                      {/* Decorative park elements */}
                      <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-accent/20" />
                      <div className="absolute top-2 right-14 h-10 w-10 rounded-full bg-primary/15" />
                      <div className="absolute bottom-6 left-3 h-12 w-8 rounded-t-full bg-accent/25" />
                      <div className="absolute bottom-6 left-10 h-16 w-8 rounded-t-full bg-primary/20" />
                      <div className="absolute bottom-6 left-16 h-10 w-8 rounded-t-full bg-accent/30" />
                      <span className="relative text-[10px] font-medium text-foreground/70 bg-background/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                        📍 Prospect Park
                      </span>
                    </div>

                    {/* Detail content */}
                    <div className="px-5 pt-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-medium text-accent uppercase tracking-wider">
                          {detailView.category}
                        </span>
                        <span className="text-[9px] text-primary font-medium">This Saturday</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-foreground leading-tight">
                        {detailView.title}
                      </h4>
                      <p className="mt-2 text-[11px] text-secondary leading-relaxed">
                        {detailView.description}
                      </p>

                      {/* Info row */}
                      <div className="mt-3 flex gap-3">
                        <div className="rounded-lg bg-muted px-2.5 py-1.5">
                          <p className="text-[9px] text-secondary">When</p>
                          <p className="text-[10px] font-medium text-foreground">Sat 9:30 AM</p>
                        </div>
                        <div className="rounded-lg bg-muted px-2.5 py-1.5">
                          <p className="text-[9px] text-secondary">Price</p>
                          <p className="text-[10px] font-medium text-foreground">Free</p>
                        </div>
                        <div className="rounded-lg bg-muted px-2.5 py-1.5">
                          <p className="text-[9px] text-secondary">Distance</p>
                          <p className="text-[10px] font-medium text-foreground">12 min</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {detailView.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-[9px] text-secondary">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <button className="mt-4 w-full rounded-xl bg-primary py-2.5 text-[12px] font-medium text-primary-foreground">
                        Save to my weekend
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border px-8 py-3 flex justify-around">
                  <div className="h-1 w-8 rounded-full bg-primary" />
                  <div className="h-1 w-8 rounded-full bg-border" />
                  <div className="h-1 w-8 rounded-full bg-border" />
                </div>

                {/* Home indicator */}
                <div className="flex justify-center pb-2">
                  <div className="h-1 w-24 rounded-full bg-foreground/20" />
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
