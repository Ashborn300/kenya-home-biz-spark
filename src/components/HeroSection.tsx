import heroBg from "@/assets/hero-bg.jpg";
import kenyaFlag from "@/assets/kenya-flag.png";
import CTAButton from "./CTAButton";
import { CheckCircle } from "lucide-react";

const hooks = [
  "No big capital needed — start with affordable machines.",
  "Step-by-step guide with exact costs & machine details.",
  "Practical examples for the Kenyan market.",
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

    <div className="relative z-10 container mx-auto px-4 py-16 text-center max-w-3xl">
      <div className="space-y-5 animate-fade-up">
        <img src={kenyaFlag} alt="Kenya flag" className="w-12 h-auto mx-auto" />

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-foreground leading-tight">
          Small Manufacturing{" "}
          <span className="text-secondary">Guide</span> for Kenya
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
          A practical guide to small-scale manufacturing — machines, costs, suppliers & setup steps explained.
        </p>

        <ul className="space-y-2 text-left max-w-md mx-auto">
          {hooks.map((hook) => (
            <li key={hook} className="flex items-start gap-2.5 text-primary-foreground/90 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <span>{hook}</span>
            </li>
          ))}
        </ul>

        <div className="pt-3 space-y-3">
          <CTAButton />
          <p className="text-primary-foreground/60 text-xs">
            ✅ Instant access • 📱 Works on any device • 🇰🇪 Made for Kenya
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
