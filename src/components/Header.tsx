import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/adotar", label: "Adotar" },
  { to: "/doar", label: "Doar" },
  { to: "/voluntario", label: "Voluntário" },
  { to: "/lar-temporario", label: "Lar Temporário" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Amparu<span className="text-primary">ONG</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/doar"
              className="ml-2 px-5 py-2.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Doar Agora
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="lg:hidden pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/doar"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-5 py-3 rounded-full gradient-primary text-primary-foreground text-sm font-semibold text-center"
              >
                Doar Agora
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
