import { Link } from "react-router-dom";
import { Heart, Home, HandHeart, Users, ArrowRight, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-animals.jpg";
import PetCard from "@/components/PetCard";
import { pets } from "@/data/pets";

const Index = () => {
  const featuredPets = pets.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Animais resgatados" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative section-container py-20">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6 backdrop-blur-sm">
              🐾 ONG de resgate animal — Itumbiara, GO
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-background leading-tight mb-6 text-balance">
              Eles só precisam de uma <span className="text-accent">chance</span>
            </h1>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Cada animal resgatado tem uma história. Ajude-nos a escrever um final feliz. Adote, doe ou seja voluntário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/adotar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-elevated"
              >
                <Heart className="w-5 h-5" /> Ver Animais
              </Link>
              <Link
                to="/doar"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-background/10 backdrop-blur-md text-background font-semibold text-lg border border-background/30 hover:bg-background/20 transition-colors"
              >
                Doar Agora <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-card border-b border-border">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Animais adotados" },
              { value: "50+", label: "Voluntários ativos" },
              { value: "3 anos", label: "De atuação" },
              { value: "100%", label: "Amor e dedicação" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-2xl md:text-3xl text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Esperando por um lar 🏡
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos nossos resgatados que estão prontos para encontrar uma família amorosa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/adotar"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ver todos os animais <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
            Como você pode ajudar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Adote", desc: "Dê um lar para um animal resgatado.", to: "/adotar", color: "bg-primary/10 text-primary" },
              { icon: HandHeart, title: "Doe", desc: "Sua doação salva vidas diariamente.", to: "/doar", color: "bg-secondary/10 text-secondary" },
              { icon: Users, title: "Seja Voluntário", desc: "Participe com seu tempo e habilidades.", to: "/voluntario", color: "bg-accent/30 text-accent-foreground" },
              { icon: Home, title: "Lar Temporário", desc: "Acolha um animal até a adoção.", to: "/lar-temporario", color: "bg-primary/10 text-primary" },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group p-6 rounded-2xl bg-background hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="gradient-primary py-12 md:py-16">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            🚨 Precisamos de ajuda urgente!
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Temos mais de 30 animais que precisam de ração, medicamentos e cuidados veterinários. Qualquer valor faz a diferença.
          </p>
          <Link
            to="/doar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold text-lg hover:bg-background/90 transition-colors shadow-elevated"
          >
            Doar via Pix <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Siga nosso Instagram
          </h2>
          <p className="text-muted-foreground mb-8">
            Acompanhe nossos resgates, histórias de adoção e o dia a dia dos nossos peludos.
          </p>
          <a
            href="https://instagram.com/amparuong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-elevated"
          >
            <Instagram className="w-6 h-6" /> @amparuong
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
