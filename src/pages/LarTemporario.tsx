import { useState } from "react";
import { Home, CheckCircle } from "lucide-react";

const LarTemporario = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 section-container text-center max-w-lg">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Obrigado! 🏡</h2>
        <p className="text-muted-foreground">Seu cadastro como lar temporário foi recebido. Entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="section-container max-w-2xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Home className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Lar Temporário 🏠
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Acolha um animal até ele encontrar uma família definitiva. Fornecemos ração, medicamentos e todo suporte necessário.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
              <input required type="tel" placeholder="(64) 99999-9999" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Bairro / Cidade</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tipo de moradia</label>
            <select required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="">Selecione...</option>
              <option>Casa com quintal</option>
              <option>Casa sem quintal</option>
              <option>Apartamento</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Tem outros animais?</label>
            <select required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="">Selecione...</option>
              <option>Não</option>
              <option>Sim, cachorros</option>
              <option>Sim, gatos</option>
              <option>Sim, ambos</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Observações</label>
            <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Quero ser lar temporário
          </button>
        </form>
      </div>
    </div>
  );
};

export default LarTemporario;
