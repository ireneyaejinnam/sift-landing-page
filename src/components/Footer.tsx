const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg italic text-foreground">Sift</span>
          <span className="text-xs text-muted-foreground">Made in NYC</span>
        </div>
        <p className="text-[9px] text-muted-foreground/50">
          Images: Happy Medium (Yelp) · Orchid Show (NYBG) · Sample Sale (@wefashion_samplesale/Instagram)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
