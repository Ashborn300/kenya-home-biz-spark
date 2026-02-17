import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import trustedSoap from "@/assets/trusted-soap.jpeg";
import trustedMachine from "@/assets/trusted-machine.jpeg";
import trustedChalk1 from "@/assets/trusted-chalk1.jpg";
import trustedChalk2 from "@/assets/trusted-chalk2.jpg";
import trustedChalk3 from "@/assets/trusted-chalk3.jpg";

const images = [
  { src: trustedSoap, alt: "Soap cutting machine in action" },
  { src: trustedMachine, alt: "Industrial processing machine" },
  { src: trustedChalk1, alt: "Chalk making production" },
  { src: trustedChalk2, alt: "Chalk production output" },
  { src: trustedChalk3, alt: "Small-scale chalk manufacturing" },
];

const TrustedSection = () => {
  const { ref: headRef, style: headStyle } = useScrollReveal("fade-up");

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div ref={headRef} style={headStyle}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
            Real Machines, <span className="text-secondary">Real Production</span>
          </h2>
          <p className="text-center text-foreground/70 text-lg mb-12">
            See the actual machines and production covered in this guide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {images.map((img, i) => {
            const anims = ["fade-up", "fade-left", "fade-right", "zoom-in", "fade-up"] as const;
            return <TrustedImage key={i} img={img} index={i} anim={anims[i % anims.length]} />;
          })}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

const TrustedImage = ({
  img,
  index,
  anim,
}: {
  img: { src: string; alt: string };
  index: number;
  anim: "fade-up" | "fade-left" | "fade-right" | "zoom-in";
}) => {
  const { ref, style } = useScrollReveal(anim, index * 100);

  return (
    <div ref={ref} style={style} className={index === 0 ? "md:col-span-1 row-span-1" : ""}>
      <img
        src={img.src}
        alt={img.alt}
        className="rounded-xl shadow-md w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default TrustedSection;
