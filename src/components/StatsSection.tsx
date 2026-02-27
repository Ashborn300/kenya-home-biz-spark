import CTAButton from "./CTAButton";
import { BookOpen, Shield, Package, Clock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Package, label: "Machines abordables", desc: "Machines sélectionnées pour des prix accessibles", value: 15, suffix: "+", prefix: "" },
  { icon: BookOpen, label: "Détails complets", desc: "Coûts et détails d'installation inclus par machine", value: 200, suffix: "K+", prefix: "" },
  { icon: Shield, label: "Risque réduit", desc: "Guide de livraison + planification des coûts inclus", value: 95, suffix: "%", prefix: "" },
  { icon: Clock, label: "Gain de temps", desc: "Tout est organisé dans une seule formation", value: 50, suffix: "+", prefix: "" },
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
            Aperçu de la formation & <span className="text-secondary">chiffres clés</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Informations pratiques pour le marché congolais
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        <p className="swahili-text text-center text-lg mb-8">
          Réduisez les erreurs, planifiez mieux.
        </p>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
