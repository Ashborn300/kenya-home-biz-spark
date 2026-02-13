const GUIDE_URL = "#"; // Replace with actual payment link

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={GUIDE_URL}
    className={`cta-button animate-pulse-glow ${className}`}
  >
    Buy the Guide — $20 (2,600 Ksh)
  </a>
);

export default CTAButton;
