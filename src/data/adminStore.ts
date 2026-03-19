import { Pet, pets as defaultPets } from "./pets";

// ---- Types ----
export interface Voluntario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  status: "pendente" | "aprovado";
  criadoEm: string;
}

export interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  interesse: string;
  criadoEm: string;
}

export interface DoacaoConfig {
  chavePix: string;
  nomeRecebedor: string;
  mensagemUrgencia: string;
}

export interface ONGConfig {
  whatsapp: string;
  instagram: string;
  endereco: string;
}

// ---- Helpers ----
function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ---- Pets ----
export function getPets(): Pet[] {
  return load<Pet[]>("admin_pets", defaultPets);
}

export function savePets(pets: Pet[]) {
  save("admin_pets", pets);
}

export function addPet(pet: Pet) {
  const pets = getPets();
  pets.push(pet);
  savePets(pets);
}

export function updatePet(id: string, data: Partial<Pet>) {
  const pets = getPets().map((p) => (p.id === id ? { ...p, ...data } : p));
  savePets(pets);
}

export function deletePet(id: string) {
  savePets(getPets().filter((p) => p.id !== id));
}

// ---- Voluntários ----
const defaultVoluntarios: Voluntario[] = [
  { id: "v1", nome: "Ana Silva", email: "ana@email.com", telefone: "(64) 99999-1111", mensagem: "Quero ajudar nos resgates", status: "pendente", criadoEm: "2024-01-15" },
  { id: "v2", nome: "Carlos Souza", email: "carlos@email.com", telefone: "(64) 99999-2222", mensagem: "Posso ajudar com transporte", status: "aprovado", criadoEm: "2024-01-10" },
];

export function getVoluntarios(): Voluntario[] {
  return load("admin_voluntarios", defaultVoluntarios);
}

export function saveVoluntarios(v: Voluntario[]) {
  save("admin_voluntarios", v);
}

export function updateVoluntarioStatus(id: string, status: "pendente" | "aprovado") {
  const list = getVoluntarios().map((v) => (v.id === id ? { ...v, status } : v));
  saveVoluntarios(list);
}

// ---- Leads ----
const defaultLeads: Lead[] = [
  { id: "l1", nome: "Maria Oliveira", email: "maria@email.com", telefone: "(64) 99999-3333", interesse: "Adoção", criadoEm: "2024-02-01" },
];

export function getLeads(): Lead[] {
  return load("admin_leads", defaultLeads);
}

export function saveLeads(l: Lead[]) {
  save("admin_leads", l);
}

// ---- Doação Config ----
const defaultDoacao: DoacaoConfig = {
  chavePix: "12.345.678/0001-00",
  nomeRecebedor: "Amparu ONG",
  mensagemUrgencia: "Precisamos de doações para ração e medicamentos!",
};

export function getDoacaoConfig(): DoacaoConfig {
  return load("admin_doacao", defaultDoacao);
}

export function saveDoacaoConfig(c: DoacaoConfig) {
  save("admin_doacao", c);
}

// ---- ONG Config ----
const defaultONGConfig: ONGConfig = {
  whatsapp: "(64) 99999-0000",
  instagram: "@amparuong",
  endereco: "Itumbiara, GO",
};

export function getONGConfig(): ONGConfig {
  return load("admin_ong_config", defaultONGConfig);
}

export function saveONGConfig(c: ONGConfig) {
  save("admin_ong_config", c);
}
