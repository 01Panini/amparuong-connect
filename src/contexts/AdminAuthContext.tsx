import React, { createContext, useContext, useState, useEffect } from "react";

interface AdminAuth {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuth>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

const MOCK_EMAIL = "admin@amparu.com";
const MOCK_PASSWORD = "admin123";
const STORAGE_KEY = "admin_auth";

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(isAuthenticated));
  }, [isAuthenticated]);

  const login = (email: string, password: string) => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);
