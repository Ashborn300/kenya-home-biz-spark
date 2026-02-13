import CTAButton from "./CTAButton";
import { BadgeDollarSign, Truck, BarChart3, Handshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: BadgeDollarSign,
    text: "The machines are chosen for their low prices so anyone can afford them — genuinely cheaper through our partners.",
  },
  {
    icon: BarChart3,
    text: "Complete details for every machine: price, shipping, operating costs, and monthly earning potential in Kenya.",
  },
  {
    icon: Handshake,
    text: "Extra discounts off the initial prices of these small machines, thanks to our partners.",
  },
  {
    icon: Truck,
    text: "We guide you through every step of the process — from purchase to setup.",
  },
];

const BenefitCard = ({ icon: Icon, text, index }: { icon: typeof BadgeDollarSign; text: string; index: number }) => {
  const anim = index % 2 === 0 ? "fade-left" : "fade-right";
  const { ref, style } = useScrollReveal(anim, index * 120);
  return (
    <div ref={ref} style={style} className="section-card flex gap-4 items-start">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <p className="text-foreground/90 leading-relaxed">{text}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const { ref: headRef, style: headStyle } = useScrollReveal("fade-up");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
            Why This Guide <span className="text-secondary">Works</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Benefits of the Home Business Kenya Guide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {benefits.map((b, i) => (
            <BenefitCard key={b.text} icon={b.icon} text={b.text} index={i} />
          ))}
        </div>

        <div className="text-center space-y-3 mb-8">
          <p className="swahili-text">Mwongozo rahisi, matokeo halisi.</p>
          <p className="swahili-text">Unaanza leo, unaelewa kila kitu.</p>
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
