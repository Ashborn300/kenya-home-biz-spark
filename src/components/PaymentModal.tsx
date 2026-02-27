import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Loader2, CheckCircle, AlertCircle, Mail, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import airtelLogo from "@/assets/airtel-logo.png";

type Status = "idle" | "loading" | "success" | "error";
type Step = "phone" | "confirm" | "contact" | "done";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal = ({ open, onOpenChange }: PaymentModalProps) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState<Step>("phone");
  const [errorMsg, setErrorMsg] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const { data, error } = await supabase.functions.invoke("shwary-payment", {
        body: { phoneNumber: phone.trim(), countryCode: "DRC" },
      });

      if (error) throw error;

      if (data?.success) {
        setStatus("success");
        setStep("confirm");
      } else {
        setErrorMsg(data?.error || "Le paiement a échoué");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Une erreur est survenue");
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
        country: "DRC",
        amount: "500 CDF",
        status: "confirmed",
      });

      if (error) throw error;
      setStep("done");
    } catch (err: any) {
      setErrorMsg(err.message || "Une erreur est survenue");
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

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Adhérer à la formation — $20</DialogTitle>
          <DialogDescription>Entrez votre numéro de téléphone pour recevoir une demande de paiement.</DialogDescription>
        </DialogHeader>

        {step === "phone" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Numéro de téléphone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="0812 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10"
                  disabled={status === "loading"}
                />
              </div>
              <p className="text-xs text-muted-foreground">Numéro mobile congolais (ex: 0812345678)</p>
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <Button type="submit" disabled={status === "loading" || !phone.trim()} className="w-full bg-[hsl(0,100%,44%)] hover:bg-[hsl(0,100%,38%)] text-white" size="lg">
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Envoi de la demande...
                </>
              ) : (
                <span className="flex items-center gap-2">
                  <img src={airtelLogo} alt="Airtel Money" className="w-6 h-6 object-contain" />
                  Payer $20 via Airtel Money
                </span>
              )}
            </Button>
          </form>
        )}

        {step === "confirm" && (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <p className="text-lg font-medium">Paiement envoyé !</p>
            <p className="text-muted-foreground text-sm">Veuillez confirmer le paiement sur votre téléphone.</p>
            <Button onClick={handleConfirmPayment} className="w-full" size="lg">
              Confirmer le paiement
            </Button>
          </div>
        )}

        {step === "contact" && (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Entrez votre email et numéro WhatsApp pour recevoir la formation complète.
            </p>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input type="email" placeholder="email@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">WhatsApp</label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input type="tel" placeholder="+243 812 345 678" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="pl-10" />
              </div>
            </div>

            {errorMsg && (
              <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <Button type="submit" disabled={saving || (!email.trim() && !whatsapp.trim())} className="w-full" size="lg">
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                "Recevoir la formation"
              )}
            </Button>
          </form>
        )}

        {step === "done" && (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <p className="text-lg font-medium">Merci !</p>
            <p className="text-muted-foreground text-sm">Vous recevrez la formation complète par email et/ou WhatsApp très bientôt.</p>
            <a href="https://www.transfernow.net/dl/20260213gmnJnoQ8" target="_blank" rel="noopener noreferrer">
              <Button className="mt-2 w-full" size="lg">Télécharger votre formation</Button>
            </a>
            <Button variant="outline" onClick={() => handleClose(false)} className="mt-2">Fermer</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
