import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  petName?: string;
  className?: string;
  variant?: "default" | "floating";
}

const WHATSAPP_NUMBER = "5564999999999";

const WhatsAppButton = ({ petName, className = "", variant = "default" }: WhatsAppButtonProps) => {
  const message = petName
    ? `Olá! Vi o(a) ${petName} no site da AmparuONG e gostaria de saber mais sobre adoção. 🐾`
    : "Olá! Gostaria de saber mais sobre a AmparuONG. 🐾";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-pulse-gentle"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-primary-foreground font-semibold hover:bg-[#20BD5A] transition-colors ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Falar no WhatsApp
    </a>
  );
};

export default WhatsAppButton;
