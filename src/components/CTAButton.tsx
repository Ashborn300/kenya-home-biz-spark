import { useState } from "react";
import PaymentModal from "./PaymentModal";

const CTAButton = ({ className = "" }: { className?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`cta-button animate-pulse-glow ${className}`}
      >
        Buy the Guide — $20 (2,600 Ksh)
      </button>
      <PaymentModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CTAButton;
