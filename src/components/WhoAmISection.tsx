import { useScrollReveal } from "@/hooks/useScrollReveal";
import joshuaPortrait from "@/assets/joshua-portrait.jpg";
import joshuaChinaMarket from "@/assets/joshua-china-market.png";
import joshuaChinatown from "@/assets/joshua-chinatown.jpg";

const WhoAmISection = () => {
  const { ref: headRef, style: headStyle } = useScrollReveal("fade-up");
  const { ref: textRef, style: textStyle } = useScrollReveal("fade-right", 150);
  const { ref: img1Ref, style: img1Style } = useScrollReveal("fade-up", 0);
  const { ref: img2Ref, style: img2Style } = useScrollReveal("fade-up", 150);
  const { ref: img3Ref, style: img3Style } = useScrollReveal("fade-up", 300);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-12">
            Qui <span className="text-secondary">suis-je ?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div ref={img1Ref} style={img1Style} className="flex justify-center">
            <img
              src={joshuaPortrait}
              alt="Joshua Makizo"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover aspect-[3/4]"
            />
          </div>

          <div ref={textRef} style={textStyle} className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
              Joshua Makizo
            </h3>
            <p className="text-lg text-secondary font-semibold">
              Spécialiste du marché chinois pour le Congo · 6+ ans d'expérience
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              J'ai passé plus de 6 ans à naviguer le marché chinois — sourcing de machines,
              construction de relations avec les fournisseurs et maîtrise du processus d'importation de A à Z.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Aujourd'hui, je gère <strong className="text-foreground">5+ petites activités de production</strong> au Congo RDC
              et j'ai déjà aidé de nombreuses personnes à mettre en place leur propre production
              avec des machines abordables et un accompagnement clair, étape par étape.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Cette formation est tout ce que j'aurais aimé avoir quand j'ai commencé — pas de devinettes, pas d'argent gaspillé,
              juste une <strong className="text-foreground">feuille de route pratique pour lancer votre propre activité de production</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div ref={img2Ref} style={img2Style}>
            <img
              src={joshuaChinaMarket}
              alt="Joshua au marché de gros en Chine"
              className="rounded-xl shadow-md w-full object-cover aspect-square"
            />
          </div>
          <div ref={img3Ref} style={img3Style}>
            <img
              src={joshuaChinatown}
              alt="Sourcing au marché chinois"
              className="rounded-xl shadow-md w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmISection;
