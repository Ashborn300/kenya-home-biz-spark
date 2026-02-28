import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, AlertCircle, Mail, MessageCircle, Copy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import airtelLogo from "@/assets/airtel-logo.png";

type Step = "numbers" | "contact" | "done";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal = ({ open, onOpenChange }: PaymentModalProps) => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<Step>("numbers");
  const [errorMsg, setErrorMsg] = useState("");
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = (number: string, label: string) => {
    navigator.clipboard.writeText(number.replace(/\s/g, ""));
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() && !whatsapp.trim()) return;

    setSaving(true);
    setErrorMsg("");
    try {
      const { error } = await supabase.from("orders").insert({
        phone_number: phone.trim() || "manual",
        email: email.trim() || null,
        whatsapp: whatsapp.trim() || null,
        country: "DRC",
        amount: "$20",
        status: "pending",
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
    setEmail("");
    setWhatsapp("");
    setPhone("");
    setStep("numbers");
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
          <DialogTitle className="font-heading text-xl">Accéder au Guide — $20</DialogTitle>
          <DialogDescription>Envoyez $20 à l'un des numéros ci-dessous, puis confirmez votre paiement.</DialogDescription>
        </DialogHeader>

        {step === "numbers" && (
          <div className="space-y-4">
            {/* Airtel Money */}
            <div className="flex items-center justify-between p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-3">
                <img src={airtelLogo} alt="Airtel Money" className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-sm font-semibold">Airtel Money</p>
                  <p className="text-lg font-bold tracking-wide">0974 054 248</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => copyNumber("0974054248", "airtel")}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            {copied === "airtel" && <p className="text-xs text-primary -mt-2">Numéro copié !</p>}

            {/* M-Pesa */}
            <div className="flex items-center justify-between p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-3">
                <Phone className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm font-semibold">M-Pesa</p>
                  <p className="text-lg font-bold tracking-wide">0834 126 748</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => copyNumber("0834126748", "mpesa")}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            {copied === "mpesa" && <p className="text-xs text-primary -mt-2">Numéro copié !</p>}

            <p className="text-sm text-muted-foreground text-center">Après avoir envoyé le paiement, cliquez ci-dessous.</p>

            <Button onClick={() => setStep("contact")} className="w-full bg-[hsl(0,100%,44%)] hover:bg-[hsl(0,100%,38%)] text-white" size="lg">
              J'ai envoyé le paiement ✅
            </Button>
          </div>
        )}

        {step === "contact" && (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Entrez vos coordonnées pour recevoir le guide complet.
            </p>

            <div className="space-y-2">
              <label className="text-sm font-medium">Numéro utilisé pour le paiement</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input type="tel" placeholder="0974 XXX XXX" value={phone} onChange={(e) => setPhone(e.target.value)} className="pl-10" />
              </div>
            </div>

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
              {saving ? "Envoi en cours..." : "Confirmer et recevoir le guide"}
            </Button>
          </form>
        )}

        {step === "done" && (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <p className="text-lg font-medium">Merci !</p>
            <p className="text-muted-foreground text-sm">Votre demande a été enregistrée. Vous recevrez le guide par email et/ou WhatsApp après vérification du paiement.</p>
            <Button variant="outline" onClick={() => handleClose(false)} className="mt-2">Fermer</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
