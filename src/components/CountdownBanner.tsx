import CTAButton from "./CTAButton";

const CountdownBanner = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground py-2.5 px-4 text-center z-50 sticky top-0">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-medium">
        <span>
          📘 Digital guide — Instant access after purchase
        </span>
        <CTAButton
          className="!py-1.5 !px-4 !text-xs !rounded-md !animate-none"
          label="Get the Guide"
        />
      </div>
    </div>
  );
};

export default CountdownBanner;
