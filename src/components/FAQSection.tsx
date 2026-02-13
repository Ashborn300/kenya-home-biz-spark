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
    q: "Who is this guide for?",
    a: "Anyone in Kenya who wants to start a small home industry — whether you're a student, stay-at-home parent, or looking for a side hustle. No prior experience needed.",
  },
  {
    q: "Do I need a lot of money to start?",
    a: "No. The guide covers affordable machines starting from as low as $50–$200. We also show you how to get the best deals directly from China.",
  },
  {
    q: "How do I receive the guide?",
    a: "After payment, you'll receive a digital PDF guide instantly via email or WhatsApp. You can read it on your phone, tablet, or computer.",
  },
  {
    q: "Is the information specific to Kenya?",
    a: "Yes! Everything — from shipping costs, customs, supplier contacts, to profit margins — is tailored specifically for the Kenyan market.",
  },
  {
    q: "What kind of machines are covered?",
    a: "The guide covers chalk-making machines, nail-making machines, soap-cutting machines, and several other profitable small-scale manufacturing machines.",
  },
  {
    q: "Can I get support after buying the guide?",
    a: "Absolutely. You'll get access to direct support from Joshua Makizo for any questions about sourcing, importing, or setting up your home industry.",
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
            Frequently Asked <span className="text-secondary">Questions</span>
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

        <div className="text-center mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
