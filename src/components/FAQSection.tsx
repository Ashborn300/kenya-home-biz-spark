import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CTAButton from "./CTAButton";

const faqs = [
  {
    q: "À qui s'adresse cette formation ?",
    a: "À toute personne au Congo RDC qui souhaite se lancer dans la petite industrie — que vous soyez étudiant, parent au foyer, ou en recherche d'une nouvelle activité pratique. Aucune expérience préalable requise.",
  },
  {
    q: "Faut-il beaucoup d'argent pour commencer ?",
    a: "Non. La formation couvre des machines abordables à partir de 50–200 $. Nous vous montrons aussi comment obtenir les meilleurs prix directement depuis la Chine.",
  },
  {
    q: "Comment est-ce que je reçois la formation ?",
    a: "Après l'adhésion, vous recevrez un guide PDF numérique et des tutoriels vidéo instantanément par email ou WhatsApp. Vous pouvez les consulter sur votre téléphone, tablette ou ordinateur.",
  },
  {
    q: "Les informations sont-elles spécifiques au Congo RDC ?",
    a: "Oui ! Tout — des frais de livraison, douanes, contacts fournisseurs, aux détails de production — est adapté spécifiquement au marché congolais.",
  },
  {
    q: "Puis-je obtenir du support après l'adhésion ?",
    a: "Absolument. Vous aurez accès au support direct de Joshua Makizo pour toute question sur le sourcing, l'importation ou la mise en place de votre activité de production.",
  },
];

const FAQSection = () => {
  const { ref: headRef, style: headStyle } = useScrollReveal("fade-up");
  const { ref: accRef, style: accStyle } = useScrollReveal("fade-up", 150);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-12">
            Questions <span className="text-secondary">fréquentes</span>
          </h2>
        </div>

        <div ref={accRef} style={accStyle}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="section-card border-none px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold font-heading hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex items-center justify-center mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
