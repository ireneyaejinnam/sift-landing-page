import { useState, useEffect, useCallback } from "react";
import prospectParkImg from "@/assets/prospect-park.png";

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
    const t3 = setTimeout(() => setView("list"), 6900);
    return [t1, t2, t3];
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

        <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Steps */}
          <div className="w-full max-w-md space-y-8">
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

          {/* iPhone mockup — 19.5:9 aspect ratio */}
          <div className="fade-up fade-up-delay-2 w-[240px] shrink-0">
            <div className="rounded-[2.5rem] bg-foreground p-[8px] shadow-2xl shadow-foreground/20">
              <div className="relative rounded-[2rem] bg-background overflow-hidden">
                {/* Dynamic Island */}
                <div className="flex justify-center pt-2.5 pb-1">
                  <div className="h-[18px] w-[76px] rounded-full bg-foreground" />
                </div>

                {/* Screen content */}
                <div className="relative" style={{ minHeight: "460px" }}>
                  {/* List view */}
                  <div
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      opacity: view === "list" || view === "tapping" ? 1 : 0,
                      transform: view === "detail" ? "scale(0.95)" : "scale(1)",
                      pointerEvents: view === "detail" ? "none" : "auto",
                    }}
                  >
                    <div className="px-4 pt-2 pb-2">
                      <span className="font-serif italic text-base text-foreground">Sift</span>
                      <p className="mt-0.5 text-[10px] text-secondary">Your weekend · 3 picks</p>
                    </div>

                    <div className="flex gap-1.5 px-4 pb-3 overflow-hidden">
                      <span className="shrink-0 rounded-full bg-primary px-2.5 py-0.5 text-[9px] font-medium text-primary-foreground">
                        This weekend
                      </span>
                      <span className="shrink-0 rounded-full bg-accent/20 px-2.5 py-0.5 text-[9px] font-medium text-accent">
                        Under $20
                      </span>
                      <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-[9px] font-medium text-secondary">
                        &lt; 30 min
                      </span>
                    </div>

                    <div className="space-y-2.5 px-4 pb-4">
                      {recommendations.map((rec, i) => (
                        <div
                          key={rec.title}
                          className="flex gap-2.5 rounded-xl border border-border bg-card p-3 transition-all duration-200"
                          style={{
                            transform: view === "tapping" && i === 1 ? "scale(0.97)" : "scale(1)",
                            boxShadow: view === "tapping" && i === 1 ? "0 0 0 2px hsl(var(--primary) / 0.3)" : "none",
                          }}
                        >
                          <div className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${rec.accentClass}`} />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-medium text-accent uppercase tracking-wider">
                                {rec.category}
                              </span>
                              {rec.badge && (
                                <span className="text-[8px] text-primary font-medium">{rec.badge}</span>
                              )}
                            </div>
                            <p className="mt-0.5 font-serif text-[12px] font-bold text-card-foreground leading-tight">
                              {rec.title}
                            </p>
                            <p className="mt-0.5 text-[10px] text-secondary leading-snug">{rec.details}</p>
                            <p className="mt-0.5 text-[9px] text-secondary/70">{rec.time}</p>
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
                    <div className="flex items-center gap-2 px-4 pt-2 pb-2">
                      <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="font-serif italic text-base text-foreground">Sift</span>
                    </div>

                    {/* Prospect Park photo */}
                    <div className="mx-4 h-32 rounded-xl overflow-hidden relative">
                      <img
                        src={prospectParkImg}
                        alt="Prospect Park Boathouse"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[9px] font-medium text-white bg-foreground/50 backdrop-blur-sm rounded-full px-2 py-0.5">
                        Prospect Park
                      </span>
                    </div>

                    <div className="px-4 pt-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-medium text-accent uppercase tracking-wider">
                          {detailView.category}
                        </span>
                        <span className="text-[8px] text-primary font-medium">This Saturday</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-foreground leading-tight">
                        {detailView.title}
                      </h4>
                      <p className="mt-1.5 text-[10px] text-secondary leading-relaxed">
                        {detailView.description}
                      </p>

                      <div className="mt-2.5 flex gap-2">
                        <div className="rounded-lg bg-muted px-2 py-1">
                          <p className="text-[8px] text-secondary">When</p>
                          <p className="text-[9px] font-medium text-foreground">Sat 9:30 AM</p>
                        </div>
                        <div className="rounded-lg bg-muted px-2 py-1">
                          <p className="text-[8px] text-secondary">Price</p>
                          <p className="text-[9px] font-medium text-foreground">Free</p>
                        </div>
                        <div className="rounded-lg bg-muted px-2 py-1">
                          <p className="text-[8px] text-secondary">Distance</p>
                          <p className="text-[9px] font-medium text-foreground">12 min</p>
                        </div>
                      </div>

                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {detailView.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-border px-1.5 py-0.5 text-[8px] text-secondary">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="mt-3 w-full rounded-xl bg-primary py-2 text-[11px] font-medium text-primary-foreground">
                        Save to my weekend
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border px-6 py-2 flex justify-around">
                  <div className="h-0.5 w-6 rounded-full bg-primary" />
                  <div className="h-0.5 w-6 rounded-full bg-border" />
                  <div className="h-0.5 w-6 rounded-full bg-border" />
                </div>

                {/* Home indicator */}
                <div className="flex justify-center pb-1.5">
                  <div className="h-1 w-20 rounded-full bg-foreground/20" />
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
