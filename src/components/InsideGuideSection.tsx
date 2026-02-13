import CTAButton from "./CTAButton";
import { CheckCircle } from "lucide-react";

const items = [
  "A list of affordable machines that work well in Kenya",
  "Realistic cost breakdowns (purchase + shipping + operating expenses)",
  "Monthly income potential per machine (Kenya context)",
  "A clear step-by-step setup roadmap",
];

const InsideGuideSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-12">
        What You'll Find <span className="text-secondary">Inside</span>
      </h2>

      <div className="section-card mb-10">
        <ul className="space-y-5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
              <span className="text-lg text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="swahili-text text-center text-lg mb-8">
        Kila kitu kiko wazi — hatua kwa hatua.
      </p>

      <div className="text-center">
        <CTAButton />
      </div>
    </div>
  </section>
);

export default InsideGuideSection;
