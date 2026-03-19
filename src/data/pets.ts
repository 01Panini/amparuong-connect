import pet1 from "@/assets/pet-1.jpg";
import pet2 from "@/assets/pet-2.jpg";
import pet3 from "@/assets/pet-3.jpg";
import pet4 from "@/assets/pet-4.jpg";
import pet5 from "@/assets/pet-5.jpg";
import pet6 from "@/assets/pet-6.jpg";

export interface Pet {
  id: string;
  slug: string;
  nome: string;
  idade: string;
  porte: "Pequeno" | "Médio" | "Grande";
  sexo: "Macho" | "Fêmea";
  descricao: string;
  historia: string;
  fotos: string[];
  status: "disponivel" | "em_processo" | "adotado";
}

export const pets: Pet[] = [
  {
    id: "1",
    slug: "caramelo",
    nome: "Caramelo",
    idade: "3 anos",
    porte: "Médio",
    sexo: "Macho",
    descricao: "Dócil, brincalhão e cheio de amor para dar.",
    historia: "Caramelo foi encontrado nas ruas de Itumbiara, magro e assustado. Após semanas de cuidado, ele se transformou em um cão alegre e confiante que adora brincar e receber carinho.",
    fotos: [pet1],
    status: "disponivel",
  },
  {
    id: "2",
    slug: "mimi",
    nome: "Mimi",
    idade: "1 ano",
    porte: "Pequeno",
    sexo: "Fêmea",
    descricao: "Gatinha carinhosa que adora colo e ronronos.",
    historia: "Mimi foi resgatada ainda filhote de uma construção abandonada. É uma gata independente mas muito carinhosa, que adora dormir no colo de quem ela confia.",
    fotos: [pet2],
    status: "disponivel",
  },
  {
    id: "3",
    slug: "pipoca",
    nome: "Pipoca",
    idade: "6 meses",
    porte: "Pequeno",
    sexo: "Macho",
    descricao: "Filhote cheio de energia e alegria contagiante.",
    historia: "Pipoca nasceu em uma ninhada abandonada na beira da estrada. Apesar do início difícil, é o filhote mais animado e brincalhão que você vai conhecer!",
    fotos: [pet3],
    status: "disponivel",
  },
  {
    id: "4",
    slug: "luna",
    nome: "Luna",
    idade: "2 anos",
    porte: "Pequeno",
    sexo: "Fêmea",
    descricao: "Elegante e tranquila, perfeita para apartamentos.",
    historia: "Luna viveu seus primeiros meses em um abrigo lotado. Depois de ser resgatada, mostrou ser uma gata calma e gentil que se adapta facilmente a qualquer ambiente.",
    fotos: [pet4],
    status: "disponivel",
  },
  {
    id: "5",
    slug: "thor",
    nome: "Thor",
    idade: "4 anos",
    porte: "Grande",
    sexo: "Macho",
    descricao: "Forte e protetor, mas com coração de manteiga.",
    historia: "Thor foi abandonado por sua antiga família quando se mudaram. Apesar da tristeza, ele nunca perdeu sua natureza gentil e protetora. Está pronto para uma nova família que o ame para sempre.",
    fotos: [pet5],
    status: "disponivel",
  },
  {
    id: "6",
    slug: "neve",
    nome: "Neve",
    idade: "8 meses",
    porte: "Pequeno",
    sexo: "Fêmea",
    descricao: "Pequenina e fofa, conquista todos ao redor.",
    historia: "Neve foi encontrada sozinha em um parque, tremendo de frio. Depois de resgatada, mostrou ser uma cachorrinha extremamente amorosa que se apega rapidamente às pessoas.",
    fotos: [pet6],
    status: "disponivel",
  },
];
