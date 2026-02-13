import CTAButton from "./CTAButton";
import { TrendingUp, Shield, DollarSign, Clock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: DollarSign, label: "Low-Cost Entry", desc: "Machines selected for affordable pricing", value: 15, suffix: "+", prefix: "" },
  { icon: TrendingUp, label: "Clear Profitability", desc: "Monthly earning estimates included", value: 200, suffix: "K+", prefix: "" },
  { icon: Shield, label: "Reduced Risk", desc: "Shipping guidance + cost planning included", value: 95, suffix: "%", prefix: "" },
  { icon: Clock, label: "Time-Saving", desc: "Everything organized in one guide", value: 50, suffix: "+", prefix: "" },
];

const StatCard = ({ icon: Icon, label, desc, value, suffix, prefix, index }: typeof stats[number] & { index: number }) => {
  const { count, ref } = useCountUp(value, 2000);
  const { ref: animRef, style } = useScrollReveal("zoom-in", index * 150);

  return (
    <div ref={(el) => { (ref as any).current = el; (animRef as any).current = el; }} style={style} className="section-card text-center space-y-3">
      <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto">
        <Icon className="w-7 h-7 text-secondary" />
      </div>
      <p className="text-3xl md:text-4xl font-heading font-bold text-secondary">
        {prefix}{count}{suffix}
      </p>
      <h3 className="font-heading font-bold text-lg">{label}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  );
};

const StatsSection = () => {
  const { ref: headRef, style: headStyle } = useScrollReveal("fade-up");

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-5xl">
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
            Results & Market <span className="text-secondary">Reality</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Stats & advantages for the Kenyan market
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        <p className="swahili-text text-center text-lg mb-8">
          Punguza makosa, ongeza faida.
        </p>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
