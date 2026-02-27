import CTAButton from "./CTAButton";
import { BadgeDollarSign, Truck, BarChart3, Handshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import nailMachine from "@/assets/nail-machine.webp";

const benefits = [
  {
    icon: BadgeDollarSign,
    text: "Machines sélectionnées pour leurs prix abordables — réellement moins chères grâce à nos partenaires.",
  },
  {
    icon: BarChart3,
    text: "Détails complets pour chaque machine : prix, livraison, coûts d'exploitation et demande du marché en RDC.",
  },
  {
    icon: Handshake,
    text: "Réductions supplémentaires sur les prix initiaux de ces petites machines, grâce à nos partenaires.",
  },
  {
    icon: Truck,
    text: "Nous vous guidons à chaque étape du processus — de l'achat à l'installation.",
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
  const { ref: imgRef, style: imgStyle } = useScrollReveal("zoom-in");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div ref={imgRef} style={imgStyle} className="flex justify-center mb-10">
          <img
            src={nailMachine}
            alt="Machine de fabrication de clous"
            className="rounded-2xl shadow-lg max-w-sm w-full object-contain"
          />
        </div>
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
            Pourquoi cette formation <span className="text-secondary">fonctionne</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ce qui rend cette formation pratique et utile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {benefits.map((b, i) => (
            <BenefitCard key={b.text} icon={b.icon} text={b.text} index={i} />
          ))}
        </div>

        <div className="text-center space-y-3 mb-8">
          <p className="swahili-text">Un guide simple, des résultats concrets.</p>
          <p className="swahili-text">Vous commencez aujourd'hui, vous comprenez tout.</p>
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
