import { useState } from "react";
import { getVoluntarios, updateVoluntarioStatus } from "@/data/adminStore";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminVoluntarios = () => {
  const [list, setList] = useState(getVoluntarios());
  const { toast } = useToast();

  const handleApprove = (id: string) => {
    updateVoluntarioStatus(id, "aprovado");
    setList(getVoluntarios());
    toast({ title: "Voluntário aprovado!" });
  };

  return (
    <div className="bg-card rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Mensagem</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((v) => (
            <TableRow key={v.id}>
              <TableCell className="font-medium">{v.nome}</TableCell>
              <TableCell>{v.email}</TableCell>
              <TableCell>{v.telefone}</TableCell>
              <TableCell className="max-w-[200px] truncate">{v.mensagem}</TableCell>
              <TableCell>
                <Badge variant={v.status === "aprovado" ? "secondary" : "outline"}>
                  {v.status === "aprovado" ? "Aprovado" : "Pendente"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {v.status === "pendente" && (
                  <Button variant="ghost" size="icon" onClick={() => handleApprove(v.id)}>
                    <Check className="h-4 w-4 text-green-600" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminVoluntarios;
