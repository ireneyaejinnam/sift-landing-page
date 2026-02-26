const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex min-h-[85vh] items-center justify-center px-6 pt-24 pb-16">
      <div className="mx-auto max-w-[720px] text-center">
        <h1 className="fade-up font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.2]">
          Stop scrolling six apps just to figure out what to do this weekend.
        </h1>
        <p className="fade-up fade-up-delay-1 mt-8 text-lg leading-relaxed text-foreground/90 md:text-xl">
          You don't need more options. You need the right 3–5, matched to what you actually care about — before they're gone.
        </p>
        <p className="fade-up fade-up-delay-2 mt-4 text-sm leading-relaxed text-secondary md:text-base">
          Tell us what you're into, when you're free, and how far you'll go. We'll tell you what's worth your time.
        </p>
        <div className="fade-up fade-up-delay-3 mt-10">
          <button
            onClick={scrollToWaitlist}
            className="rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Show me what's happening →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
