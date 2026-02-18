import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/243834126748"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-6 right-4 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-full px-5 py-3 shadow-lg transition-all hover:scale-105"
    aria-label="Contact on WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline">WhatsApp</span>
  </a>
);

export default WhatsAppButton;
