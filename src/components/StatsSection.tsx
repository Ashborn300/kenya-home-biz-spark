import CTAButton from "./CTAButton";
import { TrendingUp, Shield, DollarSign, Clock } from "lucide-react";

const stats = [
  { icon: DollarSign, label: "Low-Cost Entry", desc: "Machines selected for affordable pricing" },
  { icon: TrendingUp, label: "Clear Profitability", desc: "Monthly earning estimates included" },
  { icon: Shield, label: "Reduced Risk", desc: "Shipping guidance + cost planning included" },
  { icon: Clock, label: "Time-Saving", desc: "Everything organized in one guide" },
];

const StatsSection = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
        Results & Market <span className="text-secondary">Reality</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Stats & advantages for the Kenyan market
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="section-card text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto">
              <s.icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-heading font-bold text-lg">{s.label}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
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

export default StatsSection;
