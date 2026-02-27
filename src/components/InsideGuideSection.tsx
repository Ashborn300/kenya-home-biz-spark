import CTAButton from "./CTAButton";
import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import chalkMachine from "@/assets/chalk-machine.webp";

const items = [
  "Une liste de machines abordables adaptées au Congo RDC",
  "Des détails réalistes des coûts (achat + livraison + exploitation)",
  "Capacité de production et exemples de demande du marché par machine",
  "Une feuille de route claire étape par étape",
];

const InsideGuideSection = () => {
  const { ref: headRef, style: headStyle } = useScrollReveal("fade-down");
  const { ref: cardRef, style: cardStyle } = useScrollReveal("fade-up", 150);
  const { ref: imgRef, style: imgStyle } = useScrollReveal("zoom-in");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div ref={imgRef} style={imgStyle} className="flex justify-center mb-10">
          <img
            src={chalkMachine}
            alt="Machine de fabrication de craie"
            className="rounded-2xl shadow-lg max-w-sm w-full object-contain"
          />
        </div>
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-12">
            Ce que vous trouverez <span className="text-secondary">à l'intérieur</span>
          </h2>
        </div>

        <div ref={cardRef} style={cardStyle} className="section-card mb-10">
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
          Tout est clair — étape par étape.
        </p>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default InsideGuideSection;
