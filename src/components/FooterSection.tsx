import CTAButton from "./CTAButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const { ref, style } = useScrollReveal("fade-up");

  return (
    <footer className="py-20 bg-primary">
      <div ref={ref} style={style} className="container mx-auto px-4 max-w-3xl text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold font-heading text-primary-foreground leading-snug">
          Get the complete small manufacturing guide for Kenya — machines, costs, suppliers &{" "}
          <span className="text-primary-foreground/80">step-by-step setup</span>.
        </h2>

        <CTAButton />

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-primary-foreground/70 text-sm">
          <a href="mailto:joshuamakizo@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" />
            joshuamakizo@gmail.com
          </a>
          <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <MessageCircle className="w-4 h-4" />
            WhatsApp Support
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 text-primary-foreground/40 text-xs pt-4">
          <Link to="/privacy" className="hover:text-primary-foreground/60 transition-colors underline">Privacy Policy</Link>
          <span>•</span>
          <p>© {new Date().getFullYear()} Joshua Makizo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
