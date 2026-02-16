import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border py-3 px-4 safe-area-bottom">
      <CTAButton
        className="!w-full !py-3 !text-base !rounded-lg"
        label="Get the Guide — $20 (2,600 Ksh)"
      />
    </div>
  );
};

export default StickyMobileCTA;
