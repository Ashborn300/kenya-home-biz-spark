import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import rdcFlag from "@/assets/rdc-flag.png";
import rdcChina from "@/assets/rdc-china-flag.jpg";
import CTAButton from "./CTAButton";
import { CheckCircle, Lock } from "lucide-react";

const hooks = [
  "Pas besoin de gros capital — commencez avec des machines abordables.",
  "Guide étape par étape avec coûts exacts & détails des machines.",
  "Exemples pratiques pour le marché congolais.",
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <Link to="/admin" className="absolute top-4 right-4 z-20 flex items-center gap-1.5 text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
      <Lock className="w-3 h-3" />
      Admin
    </Link>
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

    <div className="relative z-10 container mx-auto px-4 py-16 text-center max-w-3xl">
      <div className="space-y-5 animate-fade-up">
        <img src={rdcFlag} alt="Drapeau RDC" className="w-12 h-auto mx-auto" />

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-foreground leading-tight">
          Gagner des <span className="text-secondary">+1000$</span> chaque mois grâce à des machines chinoises en RDC
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
          Un guide pratique pour la petite industrie — machines, coûts, fournisseurs & étapes de mise en place.
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
          <p className="text-lg md:text-xl font-heading font-semibold text-secondary">
            La Chine vers le Congo n'a jamais été aussi simple
          </p>
          <img src={rdcChina} alt="Drapeaux RDC et Chine" className="w-40 md:w-52 mx-auto rounded-lg" />
          <p className="text-sm text-primary-foreground/80 max-w-sm mx-auto">
            Sourcez des machines directement depuis la Chine — nous vous montrons chaque étape, des fournisseurs à la livraison chez vous au Congo.
          </p>
          <CTAButton />
          <p className="text-primary-foreground/60 text-xs">
            ✅ Accès instantané • 📱 Fonctionne sur tout appareil • 🇨🇩 Conçu pour le Congo RDC
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
