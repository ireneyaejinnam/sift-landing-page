import { useState, useEffect, useCallback } from "react";
import happyMediumImg from "@/assets/happy-medium.webp";
import orchidShowImg from "@/assets/orchid-show.webp";
import stuartWeitzmanImg from "@/assets/stuart-weitzman-sale.webp";

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
    category: "Arts",
    title: "Happy Medium — Art Cafe & Pottery Studio",
    details: "happy-medium.co · Classes available · NYC",
    time: "Open daily 10am–9pm",
    badge: "Walk-ins welcome",
    accentClass: "bg-primary",
    image: happyMediumImg,
    source: "Yelp",
  },
  {
    category: "Nature · Arts",
    title: "The Orchid Show: Concrete Jungle",
    details: "NYBG · Bronx · Timed entry",
    time: "Sat–Sun 10am–6pm",
    badge: "Ends Apr 6",
    accentClass: "bg-accent",
    image: orchidShowImg,
    source: "NYBG",
  },
  {
    category: "Shopping",
    title: "Stuart Weitzman & Carlisle Sample Sale",
    details: "15 E 37th St · Mar 3–9 · NYC",
    time: "Tues–Fri 10am–6pm",
    badge: "This week",
    accentClass: "bg-primary",
    image: stuartWeitzmanImg,
    source: "Instagram",
  },
];

const detailViews = [
  {
    title: "Happy Medium — Art Cafe & Pottery Studio",
    category: "Arts",
    location: "NYC",
    date: "Open daily · 10 AM–9 PM",
    price: "From $35",
    distance: "20 min from you",
    description: "Drop into this cozy art cafe for a pottery class or just grab a coffee surrounded by paintings and creative energy. Classes available for all skill levels.",
    tags: ["Walk-ins welcome", "All levels", "BYOB"],
    image: happyMediumImg,
    source: "Yelp",
  },
  {
    title: "The Orchid Show: Concrete Jungle",
    category: "Nature · Arts",
    location: "NYBG, Bronx",
    date: "Through Apr 6 · Timed entry",
    price: "$30",
    distance: "45 min from you",
    description: "The annual Orchid Show is back — featuring Mr. Flower Fantastic's \"Concrete Jungle\" installation. Thousands of orchids in a stunning immersive experience.",
    tags: ["Timed entry", "Photography welcome", "Gift shop"],
    image: orchidShowImg,
    source: "NYBG",
  },
  {
    title: "Stuart Weitzman & Carlisle Sample Sale",
    category: "Shopping",
    location: "15 E 37th St, NYC",
    date: "Mar 3–9 · Tues–Fri 10–6, Mon 10–4",
    price: "Up to 80% off",
    distance: "15 min from you",
    description: "Steeply discounted Stuart Weitzman boots, booties, and sandals plus Carlisle luxury apparel. Hosted by WeFashion.",
    tags: ["Cash & card", "Limited time", "No returns"],
    image: stuartWeitzmanImg,
    source: "Instagram",
  },
];

type MockupView = "list" | "tapping" | "detail";

const HowItWorks = () => {
  const [view, setView] = useState<MockupView>("list");
  const [activeCard, setActiveCard] = useState(0);

  const runAnimation = useCallback(() => {
    // Card 0: list → tap → detail → list
    // Card 1: list → tap → detail → list
    // Card 2: list → tap → detail → list
    const timers: ReturnType<typeof setTimeout>[] = [];
    const cycleDuration = 4500;

    for (let i = 0; i < 3; i++) {
      const offset = i * cycleDuration;
      timers.push(setTimeout(() => { setActiveCard(i); setView("list"); }, offset));
      timers.push(setTimeout(() => { setView("tapping"); }, offset + 1800));
      timers.push(setTimeout(() => { setView("detail"); }, offset + 2300));
    }
    // Return to list after last detail
    timers.push(setTimeout(() => { setView("list"); setActiveCard(0); }, 3 * cycleDuration - 500));

    return timers;
  }, []);

  useEffect(() => {
    let timers = runAnimation();
    const totalDuration = 3 * 4500;
    const interval = setInterval(() => {
      timers = runAnimation();
    }, totalDuration);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [runAnimation]);

  const currentDetail = detailViews[activeCard];

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="fade-up font-serif text-2xl font-bold text-foreground md:text-3xl text-center">
          Three filters. Five recommendations. Zero rabbit holes.
        </h2>

        <div className="mt-16 mx-auto flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-center md:gap-6">
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

          {/* iPhone mockup */}
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
                            transform: view === "tapping" && i === activeCard ? "scale(0.97)" : "scale(1)",
                            boxShadow: view === "tapping" && i === activeCard ? "0 0 0 2px hsl(var(--primary) / 0.3)" : "none",
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

                    {/* Event photo */}
                    <div className="mx-4 h-32 rounded-xl overflow-hidden relative">
                      <img
                        src={currentDetail.image}
                        alt={currentDetail.title}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[9px] font-medium text-white bg-foreground/50 backdrop-blur-sm rounded-full px-2 py-0.5">
                        {currentDetail.location}
                      </span>
                      <span className="absolute bottom-1.5 right-1.5 text-[6px] text-white/60">
                        {currentDetail.source}
                      </span>
                    </div>

                    <div className="px-4 pt-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-medium text-accent uppercase tracking-wider">
                          {currentDetail.category}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-foreground leading-tight">
                        {currentDetail.title}
                      </h4>
                      <p className="mt-1.5 text-[10px] text-secondary leading-relaxed">
                        {currentDetail.description}
                      </p>

                      <div className="mt-2.5 flex gap-2">
                        <div className="rounded-lg bg-muted px-2 py-1">
                          <p className="text-[8px] text-secondary">When</p>
                          <p className="text-[9px] font-medium text-foreground">{currentDetail.date.split("·")[0].trim()}</p>
                        </div>
                        <div className="rounded-lg bg-muted px-2 py-1">
                          <p className="text-[8px] text-secondary">Price</p>
                          <p className="text-[9px] font-medium text-foreground">{currentDetail.price}</p>
                        </div>
                        <div className="rounded-lg bg-muted px-2 py-1">
                          <p className="text-[8px] text-secondary">Distance</p>
                          <p className="text-[9px] font-medium text-foreground">{currentDetail.distance}</p>
                        </div>
                      </div>

                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {currentDetail.tags.map((tag) => (
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
