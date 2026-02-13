import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Status = "idle" | "loading" | "success" | "error";

export type PaymentCountry = "KE" | "DRC";

const countryConfig: Record<PaymentCountry, { title: string; description: string; placeholder: string; hint: string; buttonLabel: string; successMsg: string }> = {
  KE: {
    title: "Buy the Guide — 2,600 Ksh",
    description: "Enter your M-Pesa phone number to receive a payment prompt on your phone.",
    placeholder: "0712 345 678",
    hint: "Kenyan M-Pesa number (e.g. 0712345678)",
    buttonLabel: "Pay 2,600 Ksh via M-Pesa",
    successMsg: "Check your phone for the M-Pesa prompt and enter your PIN to complete the payment.",
  },
  DRC: {
    title: "Acheter le Guide — 500 FC",
    description: "Entrez votre numéro Mobile Money pour recevoir une demande de paiement.",
    placeholder: "0812 345 678",
    hint: "Numéro congolais (ex: 0812345678)",
    buttonLabel: "Payer 500 FC via Mobile Money",
    successMsg: "Vérifiez votre téléphone pour la demande de paiement Mobile Money.",
  },
};

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  country?: PaymentCountry;
}

const PaymentModal = ({ open, onOpenChange, country = "KE" }: PaymentModalProps) => {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const config = countryConfig[country];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const { data, error } = await supabase.functions.invoke("shwary-payment", {
        body: { phoneNumber: phone.trim(), countryCode: country },
      });

      if (error) throw error;

      if (data?.success) {
        setStatus("success");
      } else {
        setErrorMsg(data?.error || "Payment failed");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
      setStatus("error");
    }
  };

  const reset = () => {
    setPhone("");
    setStatus("idle");
    setErrorMsg("");
  };

  const handleClose = (open: boolean) => {
    if (!open) reset();
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">{config.title}</DialogTitle>
          <DialogDescription>{config.description}</DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <p className="text-lg font-medium">
              {country === "DRC" ? "Demande de paiement envoyée !" : "Payment request sent!"}
            </p>
            <p className="text-muted-foreground text-sm">{config.successMsg}</p>
            <Button onClick={() => handleClose(false)} className="mt-4">
              {country === "DRC" ? "Terminé" : "Done"}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {country === "DRC" ? "Numéro de téléphone" : "Phone Number"}
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder={config.placeholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10"
                  disabled={status === "loading"}
                />
              </div>
              <p className="text-xs text-muted-foreground">{config.hint}</p>
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "loading" || !phone.trim()}
              className="w-full"
              size="lg"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {country === "DRC" ? "Envoi en cours..." : "Sending payment request..."}
                </>
              ) : (
                config.buttonLabel
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
