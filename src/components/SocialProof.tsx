const quotes = [
  {
    text: "We spend most of our time looking into activities that we end up not even going anymore. We just get overwhelmed and kind of give up.",
    attribution: "Sam, 23, Advertising",
  },
  {
    text: "I didn't know this thing existed. I would do it as long as they tell me these things exist.",
    attribution: "NYC resident, 20s",
  },
  {
    text: "It's kind of a mess. I'm on Instagram, Pinterest, Google — if there was a way to consolidate that, I would love it.",
    attribution: "Pilates instructor, 20s, Brooklyn",
  },
];

const stats = [
  { value: "87%", label: "use 3+ platforms to find things to do" },
  { value: "6 in 10", label: "gave up on plans because the search took too long" },
  { value: "#1", label: "pain point: \"too many options, not enough good ones\"" },
];

const SocialProof = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <h2 className="fade-up font-serif text-2xl font-bold text-foreground md:text-3xl">
          Built from conversations with 50+ New Yorkers who were tired of the same weekend.
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <blockquote
            key={i}
            className={`fade-up fade-up-delay-${i + 1} rounded-lg border border-border bg-card p-6 shadow-sm`}
          >
            <p className="text-sm leading-relaxed text-card-foreground">"{q.text}"</p>
            <cite className="mt-4 block text-xs font-medium not-italic text-secondary">— {q.attribution}</cite>
          </blockquote>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-3">
        {stats.map((s, i) => (
          <div key={i} className={`fade-up fade-up-delay-${i + 1} text-center`}>
            <div className="font-serif text-3xl font-bold text-primary">{s.value}</div>
            <p className="mt-2 text-sm text-secondary">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
