import { useState } from "react";
import PaymentModal from "./PaymentModal";

interface CTAButtonProps {
  className?: string;
  label?: string;
}

const CTAButton = ({ className = "", label = "Get the Guide — $20 (2,600 Ksh)" }: CTAButtonProps) => {
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
