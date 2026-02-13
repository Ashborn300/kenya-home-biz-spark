import { useState } from "react";
import PaymentModal, { type PaymentCountry } from "./PaymentModal";

interface CTAButtonProps {
  className?: string;
  country?: PaymentCountry;
  label?: string;
}

const CTAButton = ({ className = "", country = "KE", label }: CTAButtonProps) => {
  const [open, setOpen] = useState(false);

  const defaultLabel = country === "DRC"
    ? "Acheter le Guide — 5,000 CDF (Test)"
    : "Buy the Guide — $20 (2,600 Ksh)";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`cta-button animate-pulse-glow ${className}`}
      >
        {label || defaultLabel}
      </button>
      <PaymentModal open={open} onOpenChange={setOpen} country={country} />
    </>
  );
};

export default CTAButton;
