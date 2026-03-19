import { getPets } from "@/data/adminStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Check, Clock, Heart } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend,
} from "recharts";

const mesesLabel = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// Mock data for charts
const adocoesPorMes = mesesLabel.map((m, i) => ({
  mes: m,
  adocoes: Math.floor(Math.random() * 8) + 1 + (i < 6 ? i : 12 - i),
}));

const doacoesPorMes = mesesLabel.map((m, i) => ({
  mes: m,
  valor: Math.floor(Math.random() * 2000) + 500 + (i < 6 ? i * 200 : (12 - i) * 200),
}));

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Adoções por Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={adocoesPorMes}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Bar dataKey="adocoes" name="Adoções" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Doações Recebidas (R$)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={doacoesPorMes}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="mes" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, "Doações"]}
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 8,
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="valor"
                  name="Valor (R$)"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
