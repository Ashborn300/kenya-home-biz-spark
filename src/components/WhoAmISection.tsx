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
            Who <span className="text-secondary">Am I?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          {/* Portrait */}
          <div ref={img1Ref} style={img1Style} className="flex justify-center">
            <img
              src={joshuaPortrait}
              alt="Joshua Makizo"
              className="rounded-2xl shadow-lg w-full max-w-sm object-cover aspect-[3/4]"
            />
          </div>

          {/* Bio */}
          <div ref={textRef} style={textStyle} className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
              Joshua Makizo
            </h3>
            <p className="text-lg text-secondary font-semibold">
              Kenyan China Market Specialist · 6+ Years Experience
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              I've spent over 6 years navigating the China market — sourcing machines, 
              building supplier relationships, and mastering the import process from start to finish.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Today, I run <strong className="text-foreground">5+ small home industries</strong> in Kenya 
              and have already helped many people launch their own profitable home businesses 
              with affordable machines and clear, step-by-step guidance.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              This guide is everything I wish I had when I started — no guesswork, no wasted money, 
              just a <strong className="text-foreground">proven path to building your own mini-industry</strong>.
            </p>
          </div>
        </div>

        {/* Additional photos */}
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <div ref={img2Ref} style={img2Style}>
            <img
              src={joshuaChinaMarket}
              alt="Joshua at China wholesale market"
              className="rounded-xl shadow-md w-full object-cover aspect-square"
            />
          </div>
          <div ref={img3Ref} style={img3Style}>
            <img
              src={joshuaChinatown}
              alt="China Town Market sourcing"
              className="rounded-xl shadow-md w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmISection;
