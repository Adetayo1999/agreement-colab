import { createContext, useCallback, useContext, useState } from "react";
import { AuthTypes } from "@/types";

const AuthContext = createContext({} as AuthTypes);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuthState = useCallback(
    (state: boolean) => setIsAuthenticated(state),
    []
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
