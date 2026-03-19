import { useState } from "react";
import { getDoacaoConfig, saveDoacaoConfig, DoacaoConfig } from "@/data/adminStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AdminDoacoes = () => {
  const [form, setForm] = useState<DoacaoConfig>(getDoacaoConfig());
  const { toast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveDoacaoConfig(form);
    toast({ title: "Configurações de doação salvas!" });
  };

  return (
    <div className="max-w-xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Dados para Doação</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label>Chave Pix</Label>
              <Input value={form.chavePix} onChange={(e) => setForm({ ...form, chavePix: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Nome do Recebedor</Label>
              <Input value={form.nomeRecebedor} onChange={(e) => setForm({ ...form, nomeRecebedor: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Mensagem de Urgência</Label>
              <Textarea value={form.mensagemUrgencia} onChange={(e) => setForm({ ...form, mensagemUrgencia: e.target.value })} rows={3} />
            </div>
            <Button type="submit" size="lg"><Save className="mr-2 h-4 w-4" /> Salvar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDoacoes;
