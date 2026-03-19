import { useParams, Link } from "react-router-dom";
import { pets } from "@/data/pets";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, MapPin } from "lucide-react";

const PetDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pet = pets.find((p) => p.slug === slug);

  if (!pet) {
    return (
      <div className="section-container py-20 text-center">
        <p className="text-muted-foreground text-lg">Animal não encontrado.</p>
        <Link to="/adotar" className="text-primary font-semibold mt-4 inline-block">
          ← Voltar para adoção
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-16">
      <div className="section-container">
        <Link
          to="/adotar"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Photo */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={pet.fotos[0]}
              alt={pet.nome}
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">
              {pet.nome}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Itumbiara - GO</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Idade", value: pet.idade },
                { label: "Porte", value: pet.porte },
                { label: "Sexo", value: pet.sexo },
              ].map((info) => (
                <div key={info.label} className="bg-muted rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-heading font-semibold text-foreground">{info.value}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="font-heading font-semibold text-lg text-foreground mb-3">Sobre {pet.nome}</h2>
              <p className="text-muted-foreground leading-relaxed">{pet.historia}</p>
            </div>

            <div className="bg-accent/20 rounded-2xl p-6 mb-8">
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Quer adotar {pet.nome}? 💛
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Entre em contato pelo WhatsApp para iniciar o processo de adoção responsável.
              </p>
              <WhatsAppButton petName={pet.nome} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
