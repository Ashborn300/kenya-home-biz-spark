import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Loader2, CheckCircle, AlertCircle, Mail, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Status = "idle" | "loading" | "success" | "error";
type Step = "phone" | "confirm" | "contact" | "done";

export type PaymentCountry = "KE" | "DRC";

const countryConfig: Record<PaymentCountry, { title: string; description: string; placeholder: string; hint: string; buttonLabel: string; successMsg: string; amount: string }> = {
  KE: {
    title: "Buy the Guide — 2,600 Ksh",
    description: "Enter your M-Pesa phone number to receive a payment prompt on your phone.",
    placeholder: "0712 345 678",
    hint: "Kenyan M-Pesa number (e.g. 0712345678)",
    buttonLabel: "Pay 2,600 Ksh via M-Pesa",
    successMsg: "Check your phone for the M-Pesa prompt and enter your PIN to complete the payment.",
    amount: "2600 KES",
  },
  DRC: {
    title: "Acheter le Guide — 500 FC",
    description: "Entrez votre numéro Mobile Money pour recevoir une demande de paiement.",
    placeholder: "0812 345 678",
    hint: "Numéro congolais (ex: 0812345678)",
    buttonLabel: "Payer 500 FC via Mobile Money",
    successMsg: "Vérifiez votre téléphone pour la demande de paiement Mobile Money.",
    amount: "500 FC",
  },
};

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  country?: PaymentCountry;
}

const PaymentModal = ({ open, onOpenChange, country = "KE" }: PaymentModalProps) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState<Step>("phone");
  const [errorMsg, setErrorMsg] = useState("");
  const [saving, setSaving] = useState(false);
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
        setStep("confirm");
      } else {
        setErrorMsg(data?.error || "Payment failed");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
      setStatus("error");
    }
  };

  const handleConfirmPayment = () => {
    setStep("contact");
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() && !whatsapp.trim()) return;

    setSaving(true);
    try {
      const { error } = await supabase.from("orders").insert({
        phone_number: phone.trim(),
        email: email.trim() || null,
        whatsapp: whatsapp.trim() || null,
        country,
        amount: config.amount,
        status: "confirmed",
      });

      if (error) throw error;
      setStep("done");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const reset = () => {
    setPhone("");
    setEmail("");
    setWhatsapp("");
    setStatus("idle");
    setStep("phone");
    setErrorMsg("");
  };

  const handleClose = (open: boolean) => {
    if (!open) reset();
    onOpenChange(open);
  };

  const isDRC = country === "DRC";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">{config.title}</DialogTitle>
          <DialogDescription>{config.description}</DialogDescription>
        </DialogHeader>

        {/* Step 1: Phone number form */}
        {step === "phone" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {isDRC ? "Numéro de téléphone" : "Phone Number"}
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
                  {isDRC ? "Envoi en cours..." : "Sending payment request..."}
                </>
              ) : (
                config.buttonLabel
              )}
            </Button>
          </form>
        )}

        {/* Step 2: Confirm payment */}
        {step === "confirm" && (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <p className="text-lg font-medium">
              {isDRC ? "Paiement envoyé !" : "Payment Sent!"}
            </p>
            <p className="text-muted-foreground text-sm">
              {isDRC
                ? "Veuillez confirmer le paiement sur votre téléphone."
                : "Please confirm the payment on your phone."}
            </p>
            <Button onClick={handleConfirmPayment} className="w-full" size="lg">
              {isDRC ? "Confirmer le paiement" : "Confirm Payment"}
            </Button>
          </div>
        )}

        {/* Step 3: Email & WhatsApp form */}
        {step === "contact" && (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {isDRC
                ? "Entrez votre email et numéro WhatsApp pour recevoir le guide complet."
                : "Enter your email and WhatsApp number to receive the full guide."}
            </p>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">WhatsApp</label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder={isDRC ? "+243 812 345 678" : "+254 712 345 678"}
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {errorMsg && (
              <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <Button
              type="submit"
              disabled={saving || (!email.trim() && !whatsapp.trim())}
              className="w-full"
              size="lg"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {isDRC ? "Envoi en cours..." : "Sending..."}
                </>
              ) : isDRC ? (
                "Recevoir le guide"
              ) : (
                "Receive the Guide"
              )}
            </Button>
          </form>
        )}

        {/* Step 4: Done */}
        {step === "done" && (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <p className="text-lg font-medium">
              {isDRC ? "Merci !" : "Thank You!"}
            </p>
            <p className="text-muted-foreground text-sm">
              {isDRC
                ? "Vous recevrez le guide complet par email et/ou WhatsApp très bientôt."
                : "You will receive the full guide via email and/or WhatsApp very soon."}
            </p>
            {!isDRC && (
              <a
                href="https://www.transfernow.net/dl/20260213gmnJnoQ8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-2 w-full" size="lg">
                  Download Your Guide
                </Button>
              </a>
            )}
            <Button variant="outline" onClick={() => handleClose(false)} className="mt-2">
              {isDRC ? "Fermer" : "Close"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
