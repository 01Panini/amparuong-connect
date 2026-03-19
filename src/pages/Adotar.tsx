import { useState } from "react";
import PetCard from "@/components/PetCard";
import { pets } from "@/data/pets";
import { Search } from "lucide-react";

const Adotar = () => {
  const [search, setSearch] = useState("");
  const [filterPorte, setFilterPorte] = useState<string>("todos");

  const filtered = pets.filter((pet) => {
    const matchSearch = pet.nome.toLowerCase().includes(search.toLowerCase());
    const matchPorte = filterPorte === "todos" || pet.porte === filterPorte;
    return matchSearch && matchPorte && pet.status === "disponivel";
  });

  return (
    <div className="py-12 md:py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Encontre seu novo melhor amigo 🐾
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Todos os nossos animais são vacinados, castrados e prontos para adoção responsável.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <select
            value={filterPorte}
            onChange={(e) => setFilterPorte(e.target.value)}
            className="px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="todos">Todos os portes</option>
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Nenhum animal encontrado com esses filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adotar;
