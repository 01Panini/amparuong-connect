import { Link } from "react-router-dom";
import { Heart, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-heading font-bold text-xl text-background">
                AmparuONG
              </span>
            </div>
            <p className="text-sm leading-relaxed text-background/60">
              Resgatando, cuidando e encontrando lares amorosos para animais em Itumbiara-GO.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/adotar", label: "Adotar" },
                { to: "/doar", label: "Doar" },
                { to: "/voluntario", label: "Seja Voluntário" },
                { to: "/lar-temporario", label: "Lar Temporário" },
                { to: "/sobre", label: "Sobre Nós" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://wa.me/5564999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> (64) 99999-9999
              </a>
              <a href="mailto:contato@amparuong.org.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> contato@amparuong.org.br
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" /> Itumbiara - GO
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Redes Sociais</h4>
            <a
              href="https://instagram.com/amparuong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" /> @amparuong
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} AmparuONG. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
