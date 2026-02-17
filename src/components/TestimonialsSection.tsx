import CTAButton from "./CTAButton";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  "Everything is explained clearly — I finally understood what to buy and how to start.",
  "The shipping info saved me a lot of time and confusion.",
  "I liked that the guide gives realistic details for Kenya, not vague information.",
  "Nimeelewa kila hatua — mwongozo ni rahisi sana.",
  "Maelezo yako wazi. Hakuna kubahatisha.",
];

const ReviewCard = ({ review, index }: { review: string; index: number }) => {
  const anims = ["fade-up", "fade-left", "fade-right", "zoom-in", "fade-up"] as const;
  const { ref, style } = useScrollReveal(anims[index % anims.length], index * 100);

  return (
    <div ref={ref} style={style} className="section-card relative">
      <Quote className="w-8 h-8 text-secondary/30 absolute top-6 right-6" />
      <p className={`text-foreground/85 leading-relaxed ${index >= 3 ? "italic text-secondary" : ""}`}>
        "{review}"
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
            What Readers <span className="text-secondary">Say</span>
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
