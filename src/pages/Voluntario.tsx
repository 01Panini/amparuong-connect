import { useState } from "react";
import { Users, CheckCircle } from "lucide-react";

const Voluntario = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 section-container text-center max-w-lg">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Obrigado! 🎉</h2>
        <p className="text-muted-foreground">Recebemos seu cadastro. Entraremos em contato em breve pelo WhatsApp.</p>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="section-container max-w-2xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Seja Voluntário 🤝
          </h1>
          <p className="text-muted-foreground">
            Dedique um pouco do seu tempo para fazer a diferença na vida de um animal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nome completo</label>
            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
              <input required type="tel" placeholder="(64) 99999-9999" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
              <input required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Como gostaria de ajudar?</label>
            <textarea required rows={4} placeholder="Ex: passeios, feiras de adoção, transporte..." className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 resize-none" />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full gradient-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Quero ser voluntário
          </button>
        </form>
      </div>
    </div>
  );
};

export default Voluntario;
