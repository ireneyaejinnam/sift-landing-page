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

const cards = [
  {
    category: "Art",
    title: "Kehinde Wiley: New Portraits",
    details: "Sean Kelly Gallery · Free · Chelsea",
    match: "Matched because: you liked immersive art + you're free Saturday + it's 12 min from you",
    badge: "Ends in 17 days",
    borderColor: "border-l-primary",
  },
  {
    category: "Outdoors",
    title: "Spring Foraging Walk",
    details: "Prospect Park · Free · Brooklyn",
    match: "Matched because: you picked outdoors + Saturday morning + it's in your neighborhood",
    badge: "This Saturday",
    borderColor: "border-l-accent",
  },
  {
    category: "Comedy",
    title: "Late-Night Comedy Lottery",
    details: "Eastville Comedy Club · $10 · East Village",
    match: "Matched because: you liked comedy + you're free Friday + under your $20 budget",
    badge: null,
    borderColor: "border-l-primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <h2 className="fade-up font-serif text-2xl font-bold text-foreground md:text-3xl">
          Three filters. Five recommendations. Zero rabbit holes.
        </h2>

        <div className="mt-12 space-y-8">
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
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`fade-up fade-up-delay-${i + 1} rounded-lg border border-border ${card.borderColor} border-l-4 bg-card p-5 shadow-sm`}
          >
            <Badge className="mb-3 bg-accent text-accent-foreground hover:bg-accent/90 text-xs">
              {card.category}
            </Badge>
            <h3 className="font-serif text-base font-bold text-card-foreground">{card.title}</h3>
            <p className="mt-1 text-sm text-secondary">{card.details}</p>
            <p className="mt-3 text-xs italic leading-relaxed text-primary">{card.match}</p>
            {card.badge && (
              <Badge variant="outline" className="mt-3 border-accent text-accent text-xs">
                {card.badge}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
