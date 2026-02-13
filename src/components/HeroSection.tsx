import heroBg from "@/assets/hero-bg.jpg";
import CTAButton from "./CTAButton";
import { CheckCircle } from "lucide-react";

const hooks = [
  "No need for big startup capital to begin.",
  "This guide simplifies every step for you.",
];

const swahiliHooks = [
  "Anza biashara yako ukiwa nyumbani — bila stress.",
  "Mtaji mdogo, faida kubwa.",
  "Pata mwelekeo sahihi hatua kwa hatua.",
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

    <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-4xl">
      <div className="space-y-6 animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-primary-foreground leading-tight">
          Earn Millions of Ksh{" "}
          <span className="text-primary-foreground/80">From Home</span> in Kenya
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Launch a profitable mini-industry from your house — step by step, with the exact machines, costs, and monthly income potential in Kenya.
        </p>

        <ul className="space-y-3 text-left max-w-md mx-auto">
          {hooks.map((hook) => (
            <li key={hook} className="flex items-start gap-3 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
              <span>{hook}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2 pt-2">
          {swahiliHooks.map((line) => (
            <p key={line} className="text-secondary italic text-sm md:text-base">
              {line}
            </p>
          ))}
        </div>

        <div className="pt-4">
          <CTAButton />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
