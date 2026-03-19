import { NavLink } from "react-router-dom";
import { LayoutDashboard, PawPrint, Heart, Users, Mail, Settings, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/amparu-logo.png";

const links = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/pets", label: "Pets", icon: PawPrint },
  { to: "/admin/doacoes", label: "Doações", icon: Heart },
  { to: "/admin/voluntarios", label: "Voluntários", icon: Users },
  { to: "/admin/leads", label: "Leads", icon: Mail },
  { to: "/admin/config", label: "Configurações", icon: Settings },
];

const AdminSidebar = () => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <aside className={cn("bg-card border-r flex flex-col h-screen sticky top-0 transition-all duration-200", collapsed ? "w-16" : "w-60")}>
      <div className="flex items-center gap-2 p-4 border-b min-h-[64px]">
        {!collapsed && <img src={logo} alt="Amparu" className="h-8" />}
        <button onClick={() => setCollapsed(!collapsed)} className="ml-auto text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-1 px-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <link.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{link.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-2 border-t">
        <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors w-full">
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
