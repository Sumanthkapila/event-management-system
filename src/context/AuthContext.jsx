import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    const userData = { email };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ Store user persistently
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // ✅ Clear session storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
