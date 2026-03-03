import { useState, useEffect } from "react";
import { getUTMParams } from "@/hooks/use-scroll";
import { trackEvent } from "@/lib/analytics";

const categories = [
  "Live music",
  "Art exhibitions",
  "Pop-ups & sample sales",
  "Outdoor activities",
  "Fitness classes",
  "Comedy & shows",
  "Food events",
  "I just want something new",
];

const WaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setUtmParams(getUTMParams());
  }, []);

  const toggleCategory = (cat: string) => {
    const isSelected = selected.includes(cat);
    trackEvent(isSelected ? "category_deselect" : "category_select", { category: cat });
    setSelected((prev) =>
      isSelected ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("waitlist_submit", { categories: selected.join(","), ...utmParams });
    console.log("Waitlist signup:", { email, categories: selected, ...utmParams });
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="fade-up font-serif text-2xl font-bold text-foreground md:text-3xl">
          Your weekend shouldn't take longer to plan than to enjoy.
        </h2>
        <p className="fade-up fade-up-delay-1 mt-4 text-sm leading-relaxed text-secondary md:text-base">
          We're building the simplest way to find things worth doing in New York City. Just tell us what you're into and we'll handle the rest.
        </p>

        {submitted ? (
          <div className="fade-up mt-10 rounded-lg border border-border bg-card p-8">
            <p className="font-serif text-lg font-bold text-foreground">You're on the list.</p>
            <p className="mt-2 text-sm text-secondary">We'll be in touch when early access opens.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-up fade-up-delay-2 mt-10">
            {Object.entries(utmParams).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <input type="hidden" name="categories" value={selected.join(",")} />

            <div className="flex gap-3">
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Join the Waitlist
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium text-secondary">
                What's the one category you wish was easier to find in NYC?
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      selected.includes(cat)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-secondary hover:border-primary/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">Early access opens Spring 2026.</p>
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistCTA;
