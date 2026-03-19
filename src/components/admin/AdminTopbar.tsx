import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/pets": "Gestão de Pets",
  "/admin/pets/new": "Novo Pet",
  "/admin/doacoes": "Doações",
  "/admin/voluntarios": "Voluntários",
  "/admin/leads": "Leads",
  "/admin/config": "Configurações",
};

const AdminTopbar = () => {
  const { pathname } = useLocation();
  const title = pathname.startsWith("/admin/pets/edit") ? "Editar Pet" : titles[pathname] || "Admin";

  return (
    <header className="h-16 border-b bg-card flex items-center px-6 sticky top-0 z-10">
      <h1 className="text-lg font-semibold font-heading">{title}</h1>
    </header>
  );
};

export default AdminTopbar;
