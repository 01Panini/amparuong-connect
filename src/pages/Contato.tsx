import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contato = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Fale Conosco 📬
          </h1>
          <p className="text-muted-foreground">
            Tem dúvidas, quer ajudar ou denunciar maus-tratos? Entre em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { icon: Phone, label: "WhatsApp", value: "(64) 99999-9999", href: "https://wa.me/5564999999999" },
            { icon: Mail, label: "E-mail", value: "contato@amparuong.org.br", href: "mailto:contato@amparuong.org.br" },
            { icon: MapPin, label: "Localização", value: "Itumbiara - GO", href: undefined },
            { icon: Instagram, label: "Instagram", value: "@amparuong", href: "https://instagram.com/amparuong" },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-2xl shadow-soft p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Prefere falar diretamente?</p>
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
};

export default Contato;
