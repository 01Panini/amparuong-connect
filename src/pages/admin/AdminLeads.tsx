import { getLeads } from "@/data/adminStore";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const AdminLeads = () => {
  const leads = getLeads();

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">{leads.length} lead(s) registrados</p>
      <div className="bg-card rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Interesse</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((l) => (
              <TableRow key={l.id}>
                <TableCell className="font-medium">{l.nome}</TableCell>
                <TableCell>{l.email}</TableCell>
                <TableCell>{l.telefone}</TableCell>
                <TableCell>{l.interesse}</TableCell>
                <TableCell>{l.criadoEm}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminLeads;
