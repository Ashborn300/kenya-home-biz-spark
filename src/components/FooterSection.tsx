import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const { ref, style } = useScrollReveal("fade-up");

  return (
    <footer className="py-20 bg-primary">
      <div ref={ref} style={style} className="container mx-auto px-4 max-w-3xl text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold font-heading text-primary-foreground leading-snug">
          Start your home mini-industry in Kenya with a simple plan, affordable machines, and{" "}
          <span className="text-primary-foreground/80">real earning potential</span>.
        </h2>

        <CTAButton />

        <p className="text-primary-foreground/50 text-sm pt-8">
          © {new Date().getFullYear()} Home Business Kenya Guide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
