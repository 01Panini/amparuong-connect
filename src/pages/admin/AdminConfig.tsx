import { useState } from "react";
import { getONGConfig, saveONGConfig, ONGConfig } from "@/data/adminStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AdminConfig = () => {
  const [form, setForm] = useState<ONGConfig>(getONGConfig());
  const { toast } = useToast();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveONGConfig(form);
    toast({ title: "Configurações salvas!" });
  };

  return (
    <div className="max-w-xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Dados da ONG</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <Label>WhatsApp</Label>
              <Input value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} placeholder="(64) 99999-0000" />
            </div>
            <div className="space-y-2">
              <Label>Instagram</Label>
              <Input value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} placeholder="@amparuong" />
            </div>
            <div className="space-y-2">
              <Label>Endereço</Label>
              <Input value={form.endereco} onChange={(e) => setForm({ ...form, endereco: e.target.value })} placeholder="Itumbiara, GO" />
            </div>
            <Button type="submit" size="lg"><Save className="mr-2 h-4 w-4" /> Salvar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminConfig;
