import { useState } from "react";
import { Link } from "react-router-dom";
import { getPets, deletePet, updatePet } from "@/data/adminStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Plus, Pencil, Trash2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const statusLabel: Record<string, string> = { disponivel: "Disponível", adotado: "Adotado", em_processo: "Tratamento" };
const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = { disponivel: "default", adotado: "secondary", em_processo: "outline" };

const AdminPets = () => {
  const [pets, setPets] = useState(getPets());
  const { toast } = useToast();

  const refresh = () => setPets(getPets());

  const handleDelete = (id: string) => {
    if (!confirm("Tem certeza que deseja excluir?")) return;
    deletePet(id);
    refresh();
    toast({ title: "Pet excluído com sucesso." });
  };

  const handleMarkAdopted = (id: string) => {
    updatePet(id, { status: "adotado" });
    refresh();
    toast({ title: "Pet marcado como adotado!" });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">{pets.length} pet(s) cadastrados</p>
        <Button asChild size="lg">
          <Link to="/admin/pets/new"><Plus className="mr-2 h-4 w-4" /> Novo Pet</Link>
        </Button>
      </div>

      <div className="bg-card rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Idade</TableHead>
              <TableHead>Porte</TableHead>
              <TableHead>Sexo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pets.map((pet) => (
              <TableRow key={pet.id}>
                <TableCell className="font-medium">{pet.nome}</TableCell>
                <TableCell>{pet.idade}</TableCell>
                <TableCell>{pet.porte}</TableCell>
                <TableCell>{pet.sexo}</TableCell>
                <TableCell><Badge variant={statusVariant[pet.status]}>{statusLabel[pet.status]}</Badge></TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    {pet.status !== "adotado" && (
                      <Button variant="ghost" size="icon" title="Marcar como adotado" onClick={() => handleMarkAdopted(pet.id)}>
                        <Check className="h-4 w-4 text-green-600" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/admin/pets/edit/${pet.id}`}><Pencil className="h-4 w-4" /></Link>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(pet.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminPets;
