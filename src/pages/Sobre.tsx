import { Heart, Shield, Eye } from "lucide-react";

const Sobre = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Sobre a AmparuONG 🐾
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Somos uma organização sem fins lucrativos dedicada ao resgate, cuidado e adoção responsável de animais em situação de abandono em Itumbiara e região.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              icon: Heart,
              title: "Nossa Missão",
              desc: "Resgatar animais em situação de risco, oferecer cuidados veterinários, e encontrar lares amorosos e responsáveis para cada um deles.",
              color: "text-primary bg-primary/10",
            },
            {
              icon: Eye,
              title: "Nossa Visão",
              desc: "Um mundo onde nenhum animal sofra por abandono ou maus-tratos, e onde a adoção responsável seja a primeira opção.",
              color: "text-secondary bg-secondary/10",
            },
            {
              icon: Shield,
              title: "Nossos Valores",
              desc: "Amor incondicional aos animais, transparência em todas as ações, respeito à vida e compromisso com a comunidade.",
              color: "text-accent-foreground bg-accent/30",
            },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-2xl shadow-soft p-8 flex gap-6 items-start">
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                <item.icon className="w-7 h-7" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-xl text-foreground mb-2">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sobre;
