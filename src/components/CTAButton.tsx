import { useState } from "react";
import PaymentModal from "./PaymentModal";

interface CTAButtonProps {
  className?: string;
  label?: string;
}

const CTAButton = ({ className = "", label = "Accéder au Guide" }: CTAButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`cta-button ${className}`}
      >
        {label}
      </button>
      <PaymentModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CTAButton;
