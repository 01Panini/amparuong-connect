import { Copy, Heart, AlertTriangle } from "lucide-react";
import { useState } from "react";

const PIX_KEY = "contato@amparuong.org.br";

const Doar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="section-container max-w-3xl">
        {/* Urgency */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Situação urgente!</h3>
            <p className="text-sm text-muted-foreground">
              Estamos com mais de 30 animais que precisam de ração, medicamentos e cuidados veterinários. Cada doação salva vidas.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Doe e salve vidas 💛
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sua contribuição ajuda a manter nossos resgatados alimentados, vacinados e saudáveis. Qualquer valor faz a diferença.
          </p>
        </div>

        {/* Pix Section */}
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-10 text-center">
          <div className="w-20 h-20 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-secondary-foreground" />
          </div>

          <h2 className="font-heading font-semibold text-xl text-foreground mb-2">Doe via Pix</h2>
          <p className="text-muted-foreground text-sm mb-8">
            Escaneie o QR Code ou copie a chave Pix abaixo:
          </p>

          {/* QR Placeholder */}
          <div className="w-48 h-48 mx-auto mb-6 bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border">
            <span className="text-xs text-muted-foreground text-center px-4">
              QR Code Pix<br />(em breve)
            </span>
          </div>

          {/* Pix Key */}
          <div className="flex items-center gap-2 justify-center bg-muted rounded-xl p-4 max-w-sm mx-auto">
            <code className="text-sm text-foreground font-mono flex-1 truncate">{PIX_KEY}</code>
            <button
              onClick={handleCopy}
              className="shrink-0 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            AmparuONG — CNPJ: 00.000.000/0001-00
          </p>
        </div>

        {/* Impact */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: "R$ 30", desc: "Alimenta 1 animal por 1 semana" },
            { value: "R$ 80", desc: "Vacina e vermifuga 1 animal" },
            { value: "R$ 200", desc: "Castração completa" },
          ].map((item) => (
            <div key={item.value} className="bg-card rounded-xl p-6 text-center shadow-soft">
              <p className="font-heading font-bold text-2xl text-secondary mb-2">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doar;
