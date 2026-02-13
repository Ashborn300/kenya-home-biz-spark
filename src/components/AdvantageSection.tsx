import CTAButton from "./CTAButton";
import { Home, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AdvantageSection = () => {
  const { ref: iconRef, style: iconStyle } = useScrollReveal("zoom-in");
  const { ref: textRef, style: textStyle } = useScrollReveal("fade-up", 200);

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div ref={iconRef} style={iconStyle} className="flex justify-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
            <Home className="w-7 h-7 text-secondary" />
          </div>
          <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
            <Zap className="w-7 h-7 text-secondary" />
          </div>
        </div>

        <div ref={textRef} style={textStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-foreground mb-6">
            A Major <span className="text-secondary">Advantage</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-6">
            No need for large spaces or advanced technical skills — we selected the easiest machines to use.
          </p>
          <p className="swahili-text text-secondary/90 mb-10 text-lg">
            Huhitaji nafasi kubwa wala ujuzi wa kiufundi.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
