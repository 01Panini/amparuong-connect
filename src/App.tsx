import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Adotar from "./pages/Adotar";
import PetDetail from "./pages/PetDetail";
import Doar from "./pages/Doar";
import Voluntario from "./pages/Voluntario";
import LarTemporario from "./pages/LarTemporario";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

// Admin
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import AdminRoute from "./components/admin/AdminRoute";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPets from "./pages/admin/AdminPets";
import AdminPetForm from "./pages/admin/AdminPetForm";
import AdminDoacoes from "./pages/admin/AdminDoacoes";
import AdminVoluntarios from "./pages/admin/AdminVoluntarios";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminConfig from "./pages/admin/AdminConfig";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/adotar" element={<PageTransition><Adotar /></PageTransition>} />
        <Route path="/adotar/:slug" element={<PageTransition><PetDetail /></PageTransition>} />
        <Route path="/doar" element={<PageTransition><Doar /></PageTransition>} />
        <Route path="/voluntario" element={<PageTransition><Voluntario /></PageTransition>} />
        <Route path="/lar-temporario" element={<PageTransition><LarTemporario /></PageTransition>} />
        <Route path="/sobre" element={<PageTransition><Sobre /></PageTransition>} />
        <Route path="/contato" element={<PageTransition><Contato /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const AdminRoutes = () => (
  <Routes>
    <Route path="login" element={<AdminLogin />} />
    <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
    <Route path="dashboard" element={<AdminRoute><AdminLayout><AdminDashboard /></AdminLayout></AdminRoute>} />
    <Route path="pets" element={<AdminRoute><AdminLayout><AdminPets /></AdminLayout></AdminRoute>} />
    <Route path="pets/new" element={<AdminRoute><AdminLayout><AdminPetForm /></AdminLayout></AdminRoute>} />
    <Route path="pets/edit/:id" element={<AdminRoute><AdminLayout><AdminPetForm /></AdminLayout></AdminRoute>} />
    <Route path="doacoes" element={<AdminRoute><AdminLayout><AdminDoacoes /></AdminLayout></AdminRoute>} />
    <Route path="voluntarios" element={<AdminRoute><AdminLayout><AdminVoluntarios /></AdminLayout></AdminRoute>} />
    <Route path="leads" element={<AdminRoute><AdminLayout><AdminLeads /></AdminLayout></AdminRoute>} />
    <Route path="config" element={<AdminRoute><AdminLayout><AdminConfig /></AdminLayout></AdminRoute>} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AdminAuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Admin routes - separate layout */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            {/* Public routes - keep existing layout */}
            <Route path="/*" element={<Layout><AnimatedRoutes /></Layout>} />
          </Routes>
        </BrowserRouter>
      </AdminAuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
