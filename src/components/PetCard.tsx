import { Link } from "react-router-dom";
import type { Pet } from "@/data/pets";
import { Heart } from "lucide-react";

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <Link
      to={`/adotar/${pet.slug}`}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={pet.fotos[0]}
          alt={pet.nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/60 to-transparent h-20" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-heading font-semibold text-lg text-foreground">{pet.nome}</h3>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/15 text-secondary">
            {pet.porte}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          {pet.sexo} · {pet.idade}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2">{pet.descricao}</p>
      </div>
    </Link>
  );
};

export default PetCard;
