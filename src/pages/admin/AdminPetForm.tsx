import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPets, addPet, updatePet } from "@/data/adminStore";
import { Pet } from "@/data/pets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Save, ArrowLeft, Upload, X, ImagePlus } from "lucide-react";

const emptyPet: Omit<Pet, "id" | "slug"> = {
  nome: "",
  idade: "",
  porte: "Médio",
  sexo: "Macho",
  descricao: "",
  historia: "",
  fotos: [],
  status: "disponivel",
};

const AdminPetForm = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState(emptyPet);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isEdit && id) {
      const pet = getPets().find((p) => p.id === id);
      if (pet) {
        setForm(pet);
        setPreviews(pet.fotos || []);
      }
    }
  }, [id, isEdit]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const processFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const imageFiles = fileArray.filter((f) => f.type.startsWith("image/"));

    if (imageFiles.length === 0) {
      toast({ title: "Selecione apenas arquivos de imagem.", variant: "destructive" });
      return;
    }

    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setPreviews((prev) => [...prev, dataUrl]);
        setForm((prev) => ({ ...prev, fotos: [...(prev.fotos || []), dataUrl] }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) processFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) processFiles(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    setForm((prev) => ({
      ...prev,
      fotos: (prev.fotos || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.idade.trim()) {
      toast({ title: "Preencha os campos obrigatórios.", variant: "destructive" });
      return;
    }

    if (isEdit && id) {
      updatePet(id, form);
      toast({ title: "Pet atualizado com sucesso!" });
    } else {
      const newId = Date.now().toString();
      const slug = form.nome.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      addPet({ ...form, id: newId, slug } as Pet);
      toast({ title: "Pet cadastrado com sucesso!" });
    }
    navigate("/admin/pets");
  };

  return (
    <div className="max-w-2xl space-y-4">
      <Button variant="ghost" onClick={() => navigate("/admin/pets")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
      </Button>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nome *</Label>
                <Input value={form.nome} onChange={(e) => handleChange("nome", e.target.value)} placeholder="Nome do pet" />
              </div>
              <div className="space-y-2">
                <Label>Idade *</Label>
                <Input value={form.idade} onChange={(e) => handleChange("idade", e.target.value)} placeholder="Ex: 2 anos" />
              </div>
              <div className="space-y-2">
                <Label>Porte</Label>
                <Select value={form.porte} onValueChange={(v) => handleChange("porte", v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pequeno">Pequeno</SelectItem>
                    <SelectItem value="Médio">Médio</SelectItem>
                    <SelectItem value="Grande">Grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Sexo</Label>
                <Select value={form.sexo} onValueChange={(v) => handleChange("sexo", v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Macho">Macho</SelectItem>
                    <SelectItem value="Fêmea">Fêmea</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Status</Label>
                <Select value={form.status} onValueChange={(v) => handleChange("status", v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disponivel">Disponível</SelectItem>
                    <SelectItem value="adotado">Adotado</SelectItem>
                    <SelectItem value="em_processo">Em Tratamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea value={form.descricao} onChange={(e) => handleChange("descricao", e.target.value)} placeholder="Breve descrição do pet" rows={2} />
            </div>

            <div className="space-y-2">
              <Label>História</Label>
              <Textarea value={form.historia} onChange={(e) => handleChange("historia", e.target.value)} placeholder="Conte a história deste pet..." rows={4} />
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Fotos</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/25 hover:border-primary/50"
                }`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <ImagePlus className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Arraste imagens aqui ou <span className="text-primary font-medium">clique para selecionar</span>
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {previews.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-3">
                  {previews.map((src, i) => (
                    <div key={i} className="relative group rounded-lg overflow-hidden border border-border aspect-square">
                      <img src={src} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Save className="mr-2 h-4 w-4" /> {isEdit ? "Salvar Alterações" : "Cadastrar Pet"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPetForm;
