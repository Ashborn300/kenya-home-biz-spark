import CTAButton from "./CTAButton";

const CountdownBanner = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground py-2.5 px-4 text-center z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-medium">
        <span className="font-bold">Learn How</span>
        <span className="hidden sm:inline">—</span>
        <span>📘 Digital guide — Instant access after purchase</span>
        <a
          href="https://wa.me/243834126748"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors rounded-md py-1.5 px-3 text-xs font-medium"
        >
          💬 Contact WhatsApp
        </a>
      </div>
    </div>
  );
};

export default CountdownBanner;
