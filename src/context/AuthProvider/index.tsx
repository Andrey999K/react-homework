import React, { createContext, useState } from "react";
import { User } from "../../types";

const AuthContext = createContext(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const useAuth = () => {
  return AuthContext;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const signIn = (newUser: User, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const signOut = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value = {
    user,
    signIn,
    signOut
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
