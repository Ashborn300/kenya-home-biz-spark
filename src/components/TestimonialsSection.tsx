import CTAButton from "./CTAButton";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  "Tout est expliqué clairement — j'ai enfin compris quoi acheter et comment démarrer.",
  "Les informations sur la livraison m'ont fait gagner beaucoup de temps.",
  "J'ai aimé que le guide donne des détails réalistes pour le Congo, pas des infos vagues.",
  "Guide très complet, je recommande à 100%.",
  "Les explications sont claires. Pas de devinettes.",
];

const ReviewCard = ({ review, index }: { review: string; index: number }) => {
  const anims = ["fade-up", "fade-left", "fade-right", "zoom-in", "fade-up"] as const;
  const { ref, style } = useScrollReveal(anims[index % anims.length], index * 100);

  return (
    <div ref={ref} style={style} className="section-card relative">
      <Quote className="w-8 h-8 text-secondary/30 absolute top-6 right-6" />
      <p className={`text-foreground/85 leading-relaxed ${index >= 3 ? "italic text-secondary" : ""}`}>
        « {review} »
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  const { ref: headRef, style: headStyle } = useScrollReveal("fade-up");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-12">
            Ce que disent nos <span className="text-secondary">membres</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
