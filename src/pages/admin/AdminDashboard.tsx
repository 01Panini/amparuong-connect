import { getPets } from "@/data/adminStore";
import { Card, CardContent } from "@/components/ui/card";
import { PawPrint, Check, Clock, Heart } from "lucide-react";

const AdminDashboard = () => {
  const pets = getPets();
  const total = pets.length;
  const disponiveis = pets.filter((p) => p.status === "disponivel").length;
  const adotados = pets.filter((p) => p.status === "adotado").length;
  const tratamento = pets.filter((p) => p.status === "em_processo").length;

  const stats = [
    { label: "Total de Animais", value: total, icon: PawPrint, color: "text-primary" },
    { label: "Disponíveis", value: disponiveis, icon: Heart, color: "text-secondary" },
    { label: "Adotados", value: adotados, icon: Check, color: "text-green-600" },
    { label: "Em Tratamento", value: tratamento, icon: Clock, color: "text-amber-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-muted ${s.color}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold font-heading">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
