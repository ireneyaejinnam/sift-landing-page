import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from Fever or Eventbrite?",
    a: "Those platforms list everything. Sift narrows it down. We don't sell tickets or promote events. We just help you figure out what's actually worth your time based on what you like, when you're free, and how far you'll go.",
  },
  {
    q: "What if the recommendations aren't good?",
    a: "That's the whole point of the filter system. The more specific you are about what you want, the sharper the recommendations get. And if something misses, you can tell us — every signal makes the next list better.",
  },
  {
    q: "I just ask my friends for recommendations.",
    a: "Your friends are great — but they don't know about the pop-up that opened yesterday or the free gallery show that closes next week. Sift catches what your group chat can't.",
  },
  {
    q: "I don't want another app to check.",
    a: "Neither do we. Sift isn't a feed you scroll. It's a shortlist you check once, then go live your life. Open it when you need it, ignore it when you don't.",
  },
  {
    q: "Is Sift free?",
    a: "Yes. Sift is free to use. We'll never charge you to find things to do.",
  },
  {
    q: "What about my privacy?",
    a: "No account required to browse. No social media profile linked. No data sold. Your preferences stay yours.",
  },
];

const FAQ = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[720px]">
        <h2 className="fade-up font-serif text-2xl font-bold text-foreground md:text-3xl">
          Common questions
        </h2>

        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="fade-up border-border">
              <AccordionTrigger className="text-left font-sans text-sm font-medium text-foreground hover:no-underline md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-secondary">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
